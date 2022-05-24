import styled from "styled-components";
import { colors } from "assets/shared/variables";

export const StyledCard = styled.div`
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
    padding: 0 30px 5px 30px;
    background-color: rgba(57,63,68, 0.3);
`

export const CardHeader = styled.div`
    color: ${colors.whiteText};
    font-size: 18px;
    font-weight: 300;
    width: 100%;
    padding: 10px 10px 10px 0;
    margin-bottom: 10px;
    border-radius: 10px;
`