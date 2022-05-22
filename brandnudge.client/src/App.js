import routes from "routes";
import Sidenav from "components/Sidenav";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "assets/shared/variables";

const App = () => {

  const Wrapper = styled.div`
    // background: radial-gradient(circle, rgba(51,75,170,1) 12%, rgba(14,9,30,1) 68%);
    
    height: 100%;
  `

  const LayoutElement = styled.div`
    margin-left: 250px;
  `

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100%;
  `

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, key) => (
      <Route exact path={route.route} key={key} element={route.element} />
    ))

  return (
    <Wrapper>

      {/* <Grid>
        <Sidenav
          routes={routes}
        />
        <LayoutElement>
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </LayoutElement>
      </Grid> */}
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
