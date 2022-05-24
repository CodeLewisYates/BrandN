import { Doughnut } from "react-chartjs-2";
import { colors } from "assets/shared/variables";
import { retailerColors } from "assets/shared/variables";
import { retailerColorsTrans } from "assets/shared/variables";
import _ from "lodash";

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: false,
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

const testColors = [
    "rgb(102,148,246)",
    "rgb(115,194,251)",
    "#7ef9ff",
    "rgb(0,128,129)",
    "rgb(16,52,166)"
]

const DonutCategorySummaryGraph = (props) => {
    const {data} = props;

    const sorted = _.orderBy(data, (o) => o.retailer);
    const labels = sorted.map(x => x.retailer)
    const formattedData={
        labels,
        datasets: [{
            data: sorted.map(x => x.productCount),
            backgroundColor: retailerColorsTrans,
            borderColor: retailerColors,
        }]
    };

    return (
        <Doughnut options={chartOptions} data={formattedData} />
    )
}

export default DonutCategorySummaryGraph;