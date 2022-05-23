import styled from "styled-components";
import { globalPadding } from "assets/shared/variables";

export const RetailerContainer = styled.div`
    width: 100%;
    padding: ${globalPadding.padding};
`

export const RetailerCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    padding: 25px 30px 0 30px;
    margin: 15px auto;
`

export const RetailerGraphHeightLimiter = styled.div`
    height: 400px;
`