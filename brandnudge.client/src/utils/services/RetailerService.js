import axios from "utils/axios";

const RetailerService = async (id) => {

    const promises = [];

    promises.push(
        getProductsData(id),
        getCategoryPromotions(id, '2022-02-07'),
        getDates(),
    );

    const result = await Promise.all(promises);

    return {productsData: result[0], categoryPopularities: result[1], dates: result[2]}
}

const getProductsData = async (id) => {
    const result = await axios.get(`summary/productsData/${id}`);
    return result;
}

const getDates = async () => {
    const response = await axios.get("summary/dates");
    return response;
}

export const getCategoryPromotions = async (id, date) => {
    const result = await axios.get(`retailers/categoryPromotions/${id}/${date}`);
    return result;
}

export const getTableFormat = (data) => {
    const columns = ["Date", "Manufacturer", "Retailer", "Category", "Brand", "Product Name", "Base Price", "Shelf Price", "Promotion"];
    const tableData = data.map(x => {
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

export default RetailerService;