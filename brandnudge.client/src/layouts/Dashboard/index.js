import { useEffect, useState, useRef } from "react";
import DashboardService from "utils/services/DashboardService";
import {BsFillBarChartFill} from "react-icons/bs"
import Loader from "components/Loader";
import { NavLink } from "react-router-dom";
import { retailerColors } from "assets/shared/variables";
import LayoutTitle from "components/LayoutTitle/LayoutTitle";
import { DashboardContainer } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardCardIcon } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardCard } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardCardText } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardCardFooter } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardCardsContainer } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardGraphHeightLimiter } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardGraphRow } from "assets/styles/layouts/Dashboard/DashboardStyles";
import StockSummaryGraph from "components/graphs/StockSummaryGraph";
import AvgPriceSummaryGraph from "components/graphs/AvgPriceSummaryGraph";
import DonutCategorySummaryGraph from "components/graphs/DonutCategorySummaryGraph";
import { getNewDonutData } from "utils/services/DashboardService";
import Card from "components/Card/Card";
import Select from "components/Select/Select";

const Dashboard = (props) => {
    const [data, setData] = useState(null);
    const [donutData, setDonutData] = useState(null);
    const [donutDate, setDonutDate] = useState("2022-02-07");
    const [donutCategory, setDonutCategory] = useState(1);

    useEffect(() => {
        services();
    }, []);

    const ref = useRef(false);
    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
            return;
        }
        getNewDonut(donutDate, donutCategory);
    }, [donutDate, donutCategory]);

    const services = async () => {
        const result = await DashboardService();
        setData(result);
        setDonutData(result.productCategories);
    }

    const getNewDonut = async () => {
        const result = await getNewDonutData(donutDate, donutCategory);
        setDonutData(result);
    }


    return (
        <DashboardContainer>
             <LayoutTitle />
            {data ? (
                <>
                <DashboardCardsContainer>
                 {data.retailers.map((retailer, key) => (
                     <DashboardCard key={key}>
                            <NavLink to={`/retailer/${retailer.id}`} style={{textDecoration: "none"}}>
                            <DashboardCardIcon
                                style={{background: `linear-gradient(45deg, ${retailerColors[key]},${retailerColors[key]}, rgba(255,255,255,1))`}}
                            ><BsFillBarChartFill size="30px" /></DashboardCardIcon>
                            <DashboardCardText>{retailer.retailerName}</DashboardCardText>
                            <DashboardCardFooter>Retailer Analytics</DashboardCardFooter>
                     </NavLink>
                        </DashboardCard>
                ))}
                </DashboardCardsContainer>
                
                <DashboardGraphRow>
                    <Card width="38%" headerText="Retailer Amount of Products in Categories">
                        <Select onChange={(e) => setDonutCategory(e.target.value)} valueProperty="id" options={data.categories} property="categoryName" />
                        <Select onChange={(e) => setDonutDate(e.target.value)} options={data.dates} />
                        <DashboardGraphHeightLimiter style={{marginBottom: "10px"}}>
                            <DonutCategorySummaryGraph data={donutData} />
                        </DashboardGraphHeightLimiter>
                    </Card>
                    <Card width="60%" headerText="Retailers Number of Products">
                        <DashboardGraphHeightLimiter>
                            <StockSummaryGraph data={data.stockSummaryData} />
                        </DashboardGraphHeightLimiter>
                    </Card>
                </DashboardGraphRow>
                
                <DashboardGraphRow>
                    <Card headerText="Retailers Average Shelf Price">
                        <DashboardGraphHeightLimiter>
                            <AvgPriceSummaryGraph data={data.priceSummaryData} />
                        </DashboardGraphHeightLimiter>
                    </Card>
                </DashboardGraphRow>

                </>

            ) : (
                <Loader />
            )}
        </DashboardContainer>
    )
}

export default Dashboard;

{/* <DashboardGraphCard2>
                        <Table tableData={getStockSummaryData()} />
                    </DashboardGraphCard2> */}