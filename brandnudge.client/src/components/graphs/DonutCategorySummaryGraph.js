import { Doughnut } from "react-chartjs-2";
import { colors } from "assets/shared/variables";
import { retailerColors } from "assets/shared/variables";
import { retailerColorsTrans } from "assets/shared/variables";

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: "Retailer Categories Comparison",
            position: "top",
            align: "start",
            font: {size: 20, family: "Roboto"},
            color: `${colors.whiteText}`
        },
        legend: {
            labels: {
                color: `${colors.whiteText}`,
                font: {
                    family: "Roboto"
                }
            }
        }
    }
}

const DonutCategorySummaryGraph = (props) => {
    const {data} = props;

    console.log("donut", data);
    const labels = data.map(x => x.retailer)
    const formattedData={
        labels,
        datasets: [{
            data: data.map(x => x.productCount),
            backgroundColor: retailerColorsTrans,
            borderColor: retailerColors,
        }]
    };

    return (
        <Doughnut options={chartOptions} data={formattedData} />
    )
}

export default DonutCategorySummaryGraph;