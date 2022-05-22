import styled from "styled-components";
import { colors } from "assets/shared/variables";

export const StyledSelect = styled.select`
    padding: 10px 10px;
    margin: 0 5px;
    background-color: transparent;
    color: ${colors.whiteText};
    border-radius: 10px;
`

export const StyledOption = styled.option`
    background-color: #070d2a;
    color: ${colors.whiteText};
`