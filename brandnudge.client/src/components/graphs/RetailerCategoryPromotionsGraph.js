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
                label: (labelTip) => `${labelTip.dataset.label}: ${labelTip.formattedValue}`,
                title: (titleTip) => `${titleTip[0].label}`
            }
        },
        title: {
            display: true,
            text: "Promotions Per Category",
            position: "top",
            align: "start",
            font: {size: 20, family: "Roboto"},
            color: `${colors.whiteText}`,
        },
        legend: {
            display: false,
        }
    },
}

const CategoryPopularityGraph = (props) => {
 
    const { data } = props;

    const alphabetical = _.sortBy(data, (o) => o.category);
    const labels = alphabetical.map(x => x.category);
    const formattedData = {
        labels,
        datasets: [{
            label: '# Of Products',
            data: alphabetical.map(x => x.numberOfPromotions),
            backgroundColor: categoryColorsTrans,
            hoverBackgroundColor: categoryColors,
            borderColor: categoryColors,
            borderWidth: 2,
            borderRadius: 2,
            categoryPercentage: 0.8,
            barPercentage: 0.6,
        }]
    }

    return (
        <Bar options={chartOptions} data={formattedData} />
    );
};

export default CategoryPopularityGraph;