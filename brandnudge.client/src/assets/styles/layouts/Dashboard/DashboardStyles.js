import styled from "styled-components";
import { colors } from "assets/shared/variables";
import { globalPadding } from "assets/shared/variables";

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: ${globalPadding.padding};
    position: relative;
`
export const DashboardCard = styled.div`
    // background-color: #fff;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 10px;
    padding: 25px 30px 0 30px;
    width: 300px;
    cursor: pointer;
    margin: 0 10px 10px 10px;
    // background: ${colors.backgroundSecondary};
    background-color: rgb(57,63,68, 0.3);
    transition: all 0.3s;
    &:hover {
        transform: scale(1.02)
    }
`

export const DashboardCardIcon = styled.div`
    position: absolute;
    top: -10%;
    left: 5%;
    height: 60px;
    width: 60px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.whiteText};
    background-color: red;
`

export const DashboardCardText = styled.div`
    margin-left: auto;
    width: max-content;
    padding: 5px;
    color: ${colors.whiteText};
    font-weight: 500;
    font-size: 18px;
`

export const DashboardCardFooter = styled.div`
    color: ${colors.layoutTitles};
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 5px;
    margin-top: 15px;
`

export const DashboardCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1;
`
export const DashboardGraphRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin: 25px 0;
`

export const DashboardGraphCard1 = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    background-color: #fff;
    width: 60%;
    border-radius: 10px;
    padding: 25px 30px 0 30px;
`
export const DashboardGraphCard2 = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    background-color: #fff;
    width: 38%;
    border-radius: 10px;
    padding: 25px 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DashboardGraphHeightLimiter = styled.div`
    height: 400px;
`