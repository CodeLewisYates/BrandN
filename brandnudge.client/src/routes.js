import {IoStatsChart} from "react-icons/io5";
import {MdDashboard} from "react-icons/md";
import { colors } from "assets/shared/variables";
import Dashboard from "layouts/Dashboard";
import Retailer from "layouts/Retailer";
import DataView from "layouts/DataView";

const routes = [
    {
        name: 'Dashboard',
        route: '/dashboard',
        icon: <MdDashboard size="16px" color={colors.whiteText} />,
        element: <Dashboard />,
        includeInNav: true,
    },
    {
        name: 'Data View',
        route: '/data-view',
        icon: <IoStatsChart size="16px" color={colors.whiteText} />,
        element: <DataView />,
        includeInNav: true,
    },
    {
        name: 'Retailer',
        route: '/retailer/:id',
        element: <Retailer />,
        includeInNav: false,
    }
]

export default routes;