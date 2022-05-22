import { useEffect, useState } from "react";
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
import { DashboardGraphCard1 } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardGraphCard2 } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardGraphHeightLimiter } from "assets/styles/layouts/Dashboard/DashboardStyles";
import { DashboardGraphRow } from "assets/styles/layouts/Dashboard/DashboardStyles";
import StockSummaryGraph from "components/graphs/StockSummaryGraph";
import AvgPriceSummaryGraph from "components/graphs/AvgPriceSummaryGraph";
import DonutCategorySummaryGraph from "components/graphs/DonutCategorySummaryGraph";
import {getTableFormatPriceSummary} from "utils/services/DashboardService";
import { getNewDonutData } from "utils/services/DashboardService";
import Table from "components/Table";
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

    useEffect(() => {
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
                     <NavLink to={`/retailer/${retailer.id}`} style={{textDecoration: "none"}}>
                        <DashboardCard key={key}>
                            <DashboardCardIcon
                                style={{background: `linear-gradient(45deg, ${retailerColors[key]},${retailerColors[key]}, rgba(255,255,255,1))`}}
                            ><BsFillBarChartFill size="30px" /></DashboardCardIcon>
                            <DashboardCardText>{retailer.retailerName}</DashboardCardText>
                            <DashboardCardFooter>Retailer Analytics</DashboardCardFooter>
                        </DashboardCard>
                     </NavLink>
                ))}
                </DashboardCardsContainer>
                
                <DashboardGraphRow>
                    <Card width="38%">
                        <DashboardGraphHeightLimiter style={{marginBottom: "10px"}}>
                            <DonutCategorySummaryGraph data={donutData} />
                        </DashboardGraphHeightLimiter>
                        <Select onChange={(e) => setDonutCategory(e.target.value)} valueProperty="id" options={data.categories} property="categoryName" />
                        <Select onChange={(e) => setDonutDate(e.target.value)} options={data.dates} />
                    </Card>
                    <Card width="60%">
                        <DashboardGraphHeightLimiter>
                            <StockSummaryGraph data={data.stockSummaryData} />
                        </DashboardGraphHeightLimiter>
                    </Card>
                </DashboardGraphRow>
                
                <DashboardGraphRow>
                    <Card>
                        <DashboardGraphHeightLimiter>
                            <AvgPriceSummaryGraph data={data.priceSummaryData} />
                        </DashboardGraphHeightLimiter>
                    </Card>
                    {/* <DashboardGraphCard2>
                        <Table tableData={getTableFormatPriceSummary(data.priceSummaryData)} />
                    </DashboardGraphCard2> */}
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