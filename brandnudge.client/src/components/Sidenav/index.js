import { NavLink, useLocation } from "react-router-dom";
import { SidenavContainer } from "assets/styles/components/Sidenav/SidenavStyles";
import { SidenavNav } from "assets/styles/components/Sidenav/SidenavStyles";
import { SidenavTitle } from "assets/styles/components/Sidenav/SidenavStyles";
import { SidenavDivider } from "assets/styles/components/Sidenav/SidenavStyles";
import { SidenavList } from "assets/styles/components/Sidenav/SidenavStyles";
import { SidenavListItem } from "assets/styles/components/Sidenav/SidenavStyles";
import { SidenavListItemActive } from "assets/styles/components/Sidenav/SidenavStyles";
import { SidenavListItemIcon } from "assets/styles/components/Sidenav/SidenavStyles";

const Sidenav = (props) => {
    const location = useLocation();
    const { routes } = props;

    const renderRoutes = (allRoutes) =>
        allRoutes.map((route, key) => route.includeInNav && (
            <NavLink style={{textDecoration: "none"}} key={key} to={route.route}>
                {location.pathname === route.route ? <SidenavListItemActive><SidenavListItemIcon>{route.icon}</SidenavListItemIcon>{route.name}</SidenavListItemActive>
                : <SidenavListItem><SidenavListItemIcon>{route.icon}</SidenavListItemIcon>{route.name}</SidenavListItem>}
            </NavLink>
        ));

    return (
        <SidenavContainer style={{animation: props.show ? "navIn 0.3s linear forwards" : "navOut 0.3s linear forwards"}}>
            <SidenavNav>
                <SidenavTitle>
                    Brand Nudge Analytics
                </SidenavTitle>

                <SidenavDivider />

                <SidenavList>
                    {renderRoutes(routes)}
                </SidenavList>

            </SidenavNav>
        </SidenavContainer>
    )
}

export default Sidenav;