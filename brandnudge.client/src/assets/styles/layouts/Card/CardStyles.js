import styled from "styled-components";
import { colors } from "assets/shared/variables";

export const StyledCard = styled.div`
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
    padding: 25px 30px 5px 30px;
    // background: linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box;
    background-color: ${colors.backgroundSecondary};
    backdrop-filter: blur(120px);
`