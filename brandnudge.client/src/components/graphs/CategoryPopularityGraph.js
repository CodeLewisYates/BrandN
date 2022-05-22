import { Bar } from "react-chartjs-2";
import _ from "lodash";
import { categoryColors } from "assets/shared/variables";
import { categoryColorsTrans } from "assets/shared/variables";
import { colors } from "assets/shared/variables";

const chartOptions = {
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
                label: (labelTip) => `${labelTip.dataset.label}: ${labelTip.formattedValue} Products`,
                title: (titleTip) => `Date: ${titleTip[0].label}`
            }
        },
        title: {
            display: true,
            text: "Amount of Products in Categories",
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

const CategoryPopularityGraph = (props) => {

    const { data } = props;

    const byDate = _.groupBy(data, (o) => o.date);
    const labels = _.orderBy(Object.keys(byDate), (o) => o);
    const sorted = _.orderBy(data, (o) => o.date);

    const format = _.groupBy(sorted, (o) => o.categoryName);
    console.log(format);
    const formattedData = {
        labels,
        datasets: Object.keys(format).map((x, i) => {
            return {
                label: x,
                backgroundColor: categoryColorsTrans[i],
                hoverBackgroundColor: categoryColors[i],
                borderColor: categoryColors[i],
                borderWidth: 2,
                borderRadius: 2,
                categoryPercentage: 0.8,
                barPercentage: 0.6,
                data: format[x].map(y => y.value)
            }
        })
    }

    return (
        <Bar options={chartOptions} data={formattedData} />
    );
};

export default CategoryPopularityGraph;