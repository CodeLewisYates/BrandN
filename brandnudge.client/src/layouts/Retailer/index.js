import RetailerService from "utils/services/RetailerService";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "components/Loader";
import LayoutTitle from "components/LayoutTitle/LayoutTitle";
import { RetailerCard } from "assets/styles/layouts/Retailer/RetailerStyles";
import { RetailerGraphHeightLimiter } from "assets/styles/layouts/Retailer/RetailerStyles";
import CategoryPopularityGraph from "components/graphs/CategoryPopularityGraph";
import CustomTable from "components/Table";
import { getTableFormat } from "utils/services/RetailerService";
import Card from "components/Card/Card";
import { RetailerContainer } from "assets/styles/layouts/Retailer/RetailerStyles";

const Retailer = (props) => {

    const location = useLocation();

    useEffect(() => {
        services();
    }, []);

    const services = async () => {
        const result = await RetailerService(location.pathname.split("/")[location.pathname.split("/").length-1]);
        setData(result);
    }

    const [data, setData] = useState(null);

    return (
        <RetailerContainer>
            <LayoutTitle />

            {data ? (
                <>
                <Card>
                    <RetailerGraphHeightLimiter>
                        <CategoryPopularityGraph data={data.categoryPopularities} />
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