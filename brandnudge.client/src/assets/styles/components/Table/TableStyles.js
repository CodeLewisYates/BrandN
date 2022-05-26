import styled from "styled-components";
import { colors } from "assets/shared/variables";

export const Table = styled.table`
    width: 100%;
    text-align: start;
    border-collapse: collapse;
`
export const TableHeaders = styled.thead`
`

export const TableHeader = styled.th`
    
`

export const TableHeaderText = styled.div`
    text-align: start;
    padding: 5px;
    font-weight: 900;
    margin: 0 auto;
    cursor: pointer;
    font-size: 14px;
    @media (max-width: 1600px) {
        font-size: 12px;
    }
`

export const TableHeaderRow = styled.tr`
    border-bottom: 1px solid rgba(191,191,197, 0.2);
    color: #bfbfc5;
`

export const TableRow = styled.tr`
    color: #bfbfc5;
    border-bottom: 1px solid rgba(191,191,197, 0.2);
    font-size: 14px;
    &:hover {
        background-color: rgba(190,190,190,0.1);
    }
`

export const TableData = styled.td`
    padding: 12px 6px;
    font-weight: 500;
    @media (max-width: 1600px) {
        font-size: 12px;
    }
`

export const TablePaginate = styled.div`
    width: max-content;
    margin: 10px 0 15px auto;
`

export const TableControls = styled.div`
    display: flex;
    flex-direction: row;
    color: ${colors.whiteText};
`

export const FilterOptions = styled.div`
    font-size: 14px;
    font-weight: 600;
    position: relative;
`

export const FilterOption = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 14px;
    margin: 5px 0;
`
export const FOT = styled.div`
    margin-right: auto;
    font-weight: 400;
    color: ${colors.chartText};
`
export const FilterControl = styled.p`
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
`

export const FiltersBox = styled.div`
    background-color: #2a2850;
    border-radius: 10px;
    padding: 25px;
    position: absolute;
    top: -20%;
    right: 120%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0,0,0,0.8);
    width: max-content;
    transform-origin: top right;
    animation: filter 0.2s linear;
`

export const Search = styled.input`
    padding: 12px;
    margin-right: auto;
    border: 2px solid #bfbfc5;
    border-radius: 10px;
    width: 30%;
    background-color: rgba(95,124,155, 0.2);
    color: ${colors.whiteText} !important;
    margin-bottom: 15px;
    ::placeholder {
        color: ${colors.whiteText};
    }
`