import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title,
    BarElement,
    ArcElement,
    Chart as ChartJS
} from "chart.js";

const registerCharts = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
        Legend,
        Title,
        BarElement,
        ArcElement,
    );

}

export default registerCharts;