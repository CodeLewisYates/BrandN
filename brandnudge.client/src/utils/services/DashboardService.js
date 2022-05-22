import axios from "utils/axios";

const DashboardService = async () => {
    const promises = [];

    promises.push(
        getRetailers(),
        getStockSummaryGraph(),
        getPriceSummaryGraph(),
        getDates(),
        getCategories(),
        getRetailerProductsInCategories('2022-02-07', 1),
    );

    const result = await Promise.all(promises);
    console.log(result)
    return {retailers: result[0], stockSummaryData: result[1], priceSummaryData: result[2], dates: result[3], categories: result[4], productCategories: result[5]};
}

const getRetailers = async () => {
    const response = await axios.get("retailers");
    return response;
}

const getStockSummaryGraph = async () => {
    const response = await axios.get("summary/stock");
    return response;
}

const getPriceSummaryGraph = async () => {
    const response = await axios.get("summary/price");
    return response;
}

const getDates = async () => {
    const response = await axios.get("summary/dates");
    return response;
}

const getCategories = async () => {
    const response = await axios.get("summary/categories");
    return response;
}

const getRetailerProductsInCategories = async (date, categoryId) => {
    const response = await axios.post("summary/productsByCategory", {date, categoryId});
    return response;
}

export const getNewDonutData = async (date, categoryId) => {
    const response = await axios.post("summary/productsByCategory", {date, categoryId});
    return response;
}

export const getTableFormatPriceSummary = (data) => {
    const columns = ["Date", "Retailer", "Avg Price"];
    const tableData = data.map(x => x.data.map(y => {
        return {
            "Date": y.date,
            "Retailer": x.retailer,
            "Avg Price": `£${y.value.toFixed(2)}`
        }
    })).flat();
    return {columns, data: tableData}
}

export default DashboardService;