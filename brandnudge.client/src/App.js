import routes from "routes";
import Sidenav from "components/Sidenav";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  // background: radial-gradient(circle, rgba(51,75,170,1) 12%, rgba(14,9,30,1) 68%);
  height: 100%;
`

const LayoutElement = styled.div`
  margin-left: 250px;
`

const App = () => {

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, key) => (
      <Route exact path={route.route} key={key} element={route.element} />
    ))

  return (
    <Wrapper>

      <Sidenav
          routes={routes}
        />
        <LayoutElement>
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </LayoutElement>

    </Wrapper>
  );
}

export default App;
