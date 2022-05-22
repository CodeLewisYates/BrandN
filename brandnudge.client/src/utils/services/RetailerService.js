import axios from "utils/axios";

const RetailerService = async (id) => {

    const promises = [];

    promises.push(
        getProductsData(id),
        getCategoryPopularityData(id),
    );

    const result = await Promise.all(promises);

    return {productsData: result[0], categoryPopularities: result[1]}
}

const getProductsData = async (id) => {
    const result = await axios.get(`summary/productsData/${id}`);
    return result;
}

const getCategoryPopularityData = async (id) => {
    const result = await axios.get(`retailers/categoryPopularity/${id}`);
    return result;
}

export const getTableFormat = (data) => {
    const columns = ["Date", "Manufacturer", "Brand", "Product Name", "Base Price", "Shelf Price", "Promoted Price"];
    const tableData = data.map(x => {
        return {
            "Date": x.date,
            "Manufacturer": x.manufacturer,
            "Brand": x.brand,
            "Product Name": x.productName,
            "Base Price": x.basePrice.toFixed(2),
            "Shelf Price": x.shelfPrice.toFixed(2),
            "Promoted Price": x.promotedPrice.toFixed(2),
        }
    });
    return {columns, data: tableData}
}

export default RetailerService;