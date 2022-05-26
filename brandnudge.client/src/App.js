import routes from "routes";
import Sidenav from "components/Sidenav";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  // background: radial-gradient(circle, rgba(51,75,170,1) 12%, rgba(14,9,30,1) 68%);
  height: 100%;
`

const LayoutElement = styled.div`
  //margin-left: 250px;
  transition: margin 400ms;
`

const App = () => {

  const [showNav, setShowNav] = useState(true);

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
          <p style={{cursor:"pointer",color: "white", zIndex: 999, color: "grey", paddingTop: "60px"}} onClick={() => setShowNav(!showNav)}>{`<--`}</p>
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </LayoutElement>

    </Wrapper>
  );
}

export default App;
