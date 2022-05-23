import RetailerService from "utils/services/RetailerService";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "components/Loader";
import LayoutTitle from "components/LayoutTitle/LayoutTitle";
import { RetailerCard } from "assets/styles/layouts/Retailer/RetailerStyles";
import { RetailerGraphHeightLimiter } from "assets/styles/layouts/Retailer/RetailerStyles";
import CategoryPromotionsGraph from "components/graphs/RetailerCategoryPromotionsGraph";
import CustomTable from "components/Table";
import { getTableFormat } from "utils/services/RetailerService";
import Card from "components/Card/Card";
import Select from "components/Select/Select";
import { RetailerContainer } from "assets/styles/layouts/Retailer/RetailerStyles";
import { getCategoryPromotions } from "utils/services/RetailerService";

const Retailer = (props) => {

    const [data, setData] = useState(null);
    const [selectedDate, setSelectedDate] = useState('2022-02-07');
    const [graphData, setGraphData] = useState(null);

    const location = useLocation();
    const paths = location.pathname.split("/");

    useEffect(() => {
        services();
    }, []);
    // here :)
    useEffect(() => {
        getNewGraph();
    }, [selectedDate]);

    const services = async () => {
        const result = await RetailerService(paths[paths.length-1]);
        setData(result);
        setGraphData(result.productsData);
    }

    const getNewGraph = async () => {
        const result = await getCategoryPromotions(paths[paths.length-1], selectedDate);
        setGraphData(result);
    }


    return (
        <RetailerContainer>
            <LayoutTitle />

            {data ? (
                <>
                <Card headerText="Promotions By Category">
                    <Select onChange={(e) => setSelectedDate(e.target.value)} options={data.dates}/>
                    <RetailerGraphHeightLimiter>
                        <CategoryPromotionsGraph data={data.categoryPopularities} />
                    </RetailerGraphHeightLimiter>
                </Card>
                <div style={{height: "50px"}}></div>
                <Card>
                    <CustomTable tableData={getTableFormat(data.productsData)} />
                </Card>
                <div style={{marginBottom: "auto"}} />
                </>
            ) : (
                <Loader />
            )}
        </RetailerContainer>
    );
};

export default Retailer;