import axios from "utils/axios";

const DataViewService = async () => {
    const promises = [];

    promises.push(
        getDataView(),
    )

    const results = await Promise.all(promises);

    return {productsData: results[0]}
}

const getDataView = async () => {
    const result = await axios.get(`summary/productsdata`);
    return result;
}

export const getTableFormat = (data) => {
    const columns = ["Date", "Manufacturer", "Retailer", "Category", "Brand", "Product Name", "Base Price", "Shelf Price", "Promotion"];
    const tableData = data.productsData.map(x => {
        return {
            "Date": x.date,
            "Manufacturer": x.manufacturer,
            "Retailer": x.retailer,
            "Category": x.category,
            "Brand": x.brand,
            "Product Name": x.productName,
            "Base Price": x.basePrice.toFixed(2),
            "Shelf Price": x.shelfPrice.toFixed(2),
            "Promotion": x.promotionDescription
        }
    });
    return {columns, data: tableData}
}

export default DataViewService;