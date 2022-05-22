import styled from "styled-components";
import { colors } from "assets/shared/variables";
import { globalPadding } from "assets/shared/variables";

export const SidenavContainer = styled.div`
    width: 250px;
    height: 100%;
    padding: ${globalPadding.padding};
    position: fixed;
`

export const SidenavNav = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    // background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
    background-color: transparent;
    color: ${colors.whiteText};
    border-radius: 10px;
    // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    padding: 20px 10px;
    align-items: center;
`

export const SidenavTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
`

export const SidenavDivider = styled.div`
    width: 90%;
    height: 1px;
    border-radius: 40px;
    margin-top: 15px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255), rgba(255, 255, 255, 0)) !important;
`

export const SidenavList = styled.ul`
    list-style: none;
    margin-top: 15px;
    width: 100%;
    text-align: start;
`

export const SidenavListItem = styled.li`
    color: ${colors.whiteText};
    padding: 15px 25px;
    border-radius: 10px;
    font-size: 15px;
    margin: 5px 0;
    transition: all 0.3s;
    :hover {
        background-color: rgba(255,255,255,0.1);
    }
`

export const SidenavListItemActive = styled(SidenavListItem)`
    background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232)); 
`

export const SidenavListItemIcon = styled.span`
    margin-right: 10px;
    vertical-align: middle;
`