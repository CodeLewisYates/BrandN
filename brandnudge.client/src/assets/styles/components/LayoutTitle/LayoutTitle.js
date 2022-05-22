import styled from "styled-components";
import { colors } from "assets/shared/variables";

export const LayoutTitleContainer = styled.div`
    color: ${colors.layoutTitles};
    font-size: 12px;
    font-weight: 300;
    margin: 30px 0 35px 0;
`

export const LayoutTitleIcon = styled.div`
    margin-right: 10px;
`

export const LayoutTitleFlex = styled.div`
    display: flex;
    flex-direction: row;
`

export const LayoutTitleText = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${colors.whiteText};
`