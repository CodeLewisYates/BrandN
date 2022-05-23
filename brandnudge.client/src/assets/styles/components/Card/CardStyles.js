import styled from "styled-components";
import { colors } from "assets/shared/variables";

export const StyledCard = styled.div`
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
    padding: 0 30px 5px 30px;
    // background: linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box;
    // background-color: ${colors.backgroundSecondary};
    background-color: rgba(39, 41, 61, 0.75);
    backdrop-filter: blur(120px);
`

export const CardHeader = styled.div`
    background-color: #252739;
    color: ${colors.whiteText};
    font-size: 18px;
    font-weight: 300;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`