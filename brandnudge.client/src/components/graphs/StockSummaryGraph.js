import { Line } from "react-chartjs-2";
import {retailerColors} from "assets/shared/variables";
import { colors } from "assets/shared/variables";
import _ from "lodash";

const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        line: {
            tension: 0.5,
            borderWidth: 4,
        },
        point: {
            borderWidth: 3,
        }
    },
    scales: {
        y: {
            ticks: {
                color: `${colors.chartText}`,
                font: {
                    size: 10,
                    family: "Roboto"
                }
            },
            grid: {
                display: true,
                drawBorder: false,
                borderDash: [6],
                color: 'rgba(114,120,132, 0.5)'
            }
        },
        x: {
            ticks: {
                color: `${colors.chartText}`,
                font: {
                    size: 10,
                    family: "Roboto"
                }
            },
            grid: {
                display: false,
            }
        }
    },
    plugins: {
        tooltip: {
            enabled: true,
            boxPadding: 6,
            callbacks: {
                label: (labelTip) => `${labelTip.dataset.label} Products: ${labelTip.formattedValue}`,
                title: (titleTip) => `Date: ${titleTip[0].label}`
            }
        },
        title: {
            display: false,
            text: "Retailers Number of Products",
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
    },
    interaction: {
        mode: "nearest",
        intersect: false,
    },
}

const StockSummaryGraph = (props) => {

    const {data} = props;

    const labels = _.orderBy(data[0].data.map(x => x.date), (o) => o, "asc");
    const formattedData = {
        labels,
        datasets: data.map((x, i) => {
            return {
                label: x.retailer,
                data: _.orderBy(x.data, (o) => o.date, "asc").map(y => y.value),
                borderColor: retailerColors[i],
                pointHoverBackgroundColor: retailerColors[i],
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBackgroundColor: retailerColors[i],
            }
        })
    }

    return (
        <Line options={graphOptions} data={formattedData} />
    );
};

export default StockSummaryGraph;