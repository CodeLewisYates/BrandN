import { Bar } from "react-chartjs-2";
import {retailerColors} from "assets/shared/variables";
import { retailerColorsTrans } from "assets/shared/variables";
import { colors } from "assets/shared/variables";
import _ from "lodash";

const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: {
                color: `${colors.chartText}`,
                font: {
                    size: 11,
                    family: "Roboto"
                }
            }
        },
        x: {
            ticks: {
                color: `${colors.chartText}`,
                font: {
                    size: 11,
                    family: "Roboto"
                }
            }
        }
    },
    plugins: {
        tooltip: {
            enabled: true,
            boxPadding: 6,
            callbacks: {
                label: (labelTip) => `${labelTip.dataset.label} Avg: £${labelTip.formattedValue}`,
                title: (titleTip) => `Date: ${titleTip[0].label}`
            }
        },
        title: {
            display: false,
            text: "Retailers Average Shelf Price",
            position: "top",
            align: "start",
            font: {size: 20, family: "Roboto"},
            color: `${colors.whiteText}`,
        },
        legend: {
            labels: {
                color: `${colors.whiteText}`,
                font: {
                    family: "Roboto"
                }
            }
        }
    },
}

const AvgPriceSummaryGraph = (props) => {

    const {data} = props;

    const labels = _.orderBy(data[0].data.map(x => x.date), (o) => o, "asc");
    const formattedData = {
        labels,
        datasets: data.map((x, i) => {
            return {
                label: x.retailer,
                backgroundColor: retailerColorsTrans[i],
                hoverBackgroundColor: retailerColors[i],
                borderColor: retailerColors[i],
                borderWidth: 2,
                hoverBorderColor: retailerColors[i],
                borderRadius: 2,
                categoryPercentage: 0.8,
                barPercentage: 0.6,
                data: _.orderBy(x.data, (o) => o.date).map(y => y.value.toFixed(2))
            }
        })
    }

    return (
        <Bar options={graphOptions} data={formattedData} />
    );
};

export default AvgPriceSummaryGraph;