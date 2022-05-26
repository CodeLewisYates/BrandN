import routes from "routes";
import Sidenav from "components/Sidenav";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { NavContext } from "contexts/NavContext";

const Wrapper = styled.div`
  height: 100%;
`
const LayoutElement = styled.div`
  transition: margin 400ms;
`

const App = () => {
  const {showNav} = useContext(NavContext);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, key) => (
      <Route exact path={route.route} key={key} element={route.element} />
    ))

  return (
      <Wrapper>
        <Sidenav
            routes={routes}
            show={showNav}
          />
          <LayoutElement style={{marginLeft: showNav ? "250px" : "0px"}}>
            <Routes>
              {getRoutes(routes)}
              <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
          </LayoutElement>
      </Wrapper>
  );
}

export default App;
