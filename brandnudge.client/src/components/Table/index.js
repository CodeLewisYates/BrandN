import React, {useEffect, useState, useMemo, useCallback} from "react";
import {IoMdArrowRoundDown, IoMdArrowRoundUp} from "react-icons/io";
import {BsArrowDownUp} from "react-icons/bs"
import { colors } from "assets/shared/variables";
import _, { first } from "lodash";
import Paginate from "react-paginate";
import cx from "classnames";
import Select from "components/Select/Select";
import { Table } from "assets/styles/components/Table/TableStyles";
import { TableRow } from "assets/styles/components/Table/TableStyles";
import { TableHeaders } from "assets/styles/components/Table/TableStyles";
import { TableHeader } from "assets/styles/components/Table/TableStyles";
import { TableData } from "assets/styles/components/Table/TableStyles";
import { TableHeaderText } from "assets/styles/components/Table/TableStyles";
import { TablePaginate } from "assets/styles/components/Table/TableStyles";
import { TableHeaderRow } from "assets/styles/components/Table/TableStyles";
import { TableControls } from "assets/styles/components/Table/TableStyles";
import { FilterOptions } from "assets/styles/components/Table/TableStyles";
import { FiltersBox } from "assets/styles/components/Table/TableStyles";
import { Search } from "assets/styles/components/Table/TableStyles";
import { FilterOption } from "assets/styles/components/Table/TableStyles";
import {FOT} from "assets/styles/components/Table/TableStyles";
import { FilterControl } from "assets/styles/components/Table/TableStyles";
import "assets/styles/components/Table/Pagination.css";

const CustomTable = (props) => {

    const {rows} = props;
    const tableData = useMemo(() => props.tableData, []);

    const [rowsPerPage, setRowsPerPage] = useState(rows || 10);
    const [page, setPage] = useState(0);
    const [sortedData, setSortedData] = useState(tableData.data);
    const [sortDir, setSortDir] = useState("desc");
    const [sortedColumn, setSortedColumn] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [filters, setFilters] = useState({
        "Date": false,
        "Manufacturer": false,
        "Brand": false,
        "Retailer": false,
        "Category": false,
    });

    // Filter Options
    const dateOptions = useMemo(() => [...new Set(tableData.data.map(x => x["Date"]))], [] );
    const manufacturerOptions = useMemo(() => [...new Set(tableData.data.map(x => x["Manufacturer"]))], [] );
    const brandOptions = useMemo(() => [...new Set(tableData.data.map(x => x["Brand"]))], [] );
    const retailerOptions = useMemo(() => [...new Set(tableData.data.map(x => x["Retailer"]))], [] );
    const categoryOptions = useMemo(() => [...new Set(tableData.data.map(x => x["Category"]))], [] );

    // Sorting and Filtering
    useEffect(() => {
        setPage(0);
        const newData = tableData.data.filter(item => {
            let include = true;
            if (filters["Date"] && item["Date"] != filters["Date"]) include = false;
            if (filters["Manufacturer"] && item["Manufacturer"] != filters["Manufacturer"]) include = false;
            if (filters["Brand"] && item["Brand"] != filters["Brand"]) include = false;
            if (filters["Retailer"] && item["Retailer"] != filters["Retailer"]) include = false;
            if (filters["Category"] && item["Category"] != filters["Category"]) include = false;
            if (searchQuery && !item["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())) include = false;
            return include;
        });
        setSortedData(newData);
    }, [filters, searchQuery]);
    
    const sortData = (sortByColumn) => {
        setSortedColumn(sortByColumn, sortDir);
        const sorted = _.orderBy(sortedData, [(o) => o[sortByColumn]], [sortDir]);
        setSortedData(sorted);
        sortDir === "desc" ? setSortDir("asc") : setSortDir("desc");
    }
    
    return (
        <>
        <TableControls>
            <Search placeholder="Search Product Name..." onChange={(e) => setSearchQuery(e.target.value)} />
            <FilterOptions>
            <FilterControl onClick={() => setShowFilters(true)}>Filters</FilterControl>
            {showFilters && (
                <FiltersBox>
                    <FilterOption><FOT>Date Filter:</FOT>
                        <Select width="200px" value={filters["Date"] || "No Filter"} onChange={(e) => setFilters({...filters, "Date": e.target.value === "No Filter" ? false : e.target.value})} placeholder={{text: "No Filter"}} options={dateOptions}></Select>
                    </FilterOption>
                    <FilterOption><FOT>Retailer Filter</FOT>
                        <Select width="200px" value={filters["Retailer"] || "No Filter"} onChange={(e) => setFilters({...filters, "Retailer": e.target.value === "No Filter" ? false : e.target.value})} placeholder={{text: "No Filter"}} options={retailerOptions}></Select>
                    </FilterOption>
                    <FilterOption><FOT>Category Filter:</FOT>
                        <Select width="200px" value={filters["Category"] || "No Filter"} onChange={(e) => setFilters({...filters, "Category": e.target.value === "No Filter" ? false : e.target.value})} placeholder={{text: "No Filter"}} options={categoryOptions}></Select>
                    </FilterOption>
                    <FilterOption><FOT>Brand Filter:</FOT>
                        <Select width="200px" value={filters["Brand"] || "No Filter"} onChange={(e) => setFilters({...filters, "Brand": e.target.value === "No Filter" ? false : e.target.value})} placeholder={{text: "No Filter"}} options={brandOptions}></Select>
                    </FilterOption>
                    <FilterOption><FOT>Manufacturer Filter:</FOT>
                        <Select width="200px" value={filters["Manufacturer"] || "No Filter"} onChange={(e) => setFilters({...filters, "Manufacturer": e.target.value === "No Filter" ? false : e.target.value})} placeholder={{text: "No Filter"}} options={manufacturerOptions}></Select>
                    </FilterOption>
                    <FilterControl onClick={() => setShowFilters(false)}>close</FilterControl>
                </FiltersBox>
            )}
            </FilterOptions>
        </TableControls>
        <Table>
            <TableHeaders>
                <TableHeaderRow>
                    {tableData.columns.map(column => (
                        <TableHeader>
                            <TableHeaderText
                                onClick={() => sortData(column)}
                            >
                                {column.toUpperCase()}
                                {sortedColumn === column ? (
                                    <>
                                    {sortDir === "asc" ? (
                                        <IoMdArrowRoundDown size="18px" color={colors.navBlue} style={{verticalAlign: "middle", marginLeft: "10px"}} />
                                        ) : (
                                        <IoMdArrowRoundUp size="18px" color={colors.navBlue} style={{verticalAlign: "middle", marginLeft: "10px"}} />
                                    )}
                                    </>
                                ) : (
                                    <BsArrowDownUp size="12px" color="rgba(255,255,255,0.5)" style={{verticalAlign: "middle", marginLeft: "10px"}} />
                                )}
                            </TableHeaderText>
                        </TableHeader>
                    ))}
                </TableHeaderRow>
            </TableHeaders>
            <tbody>
                {sortedData.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(row => (
                    <TableRow>
                        {Object.values(row).map(x => (
                            <TableData>{x}</TableData>
                        ))}
                    </TableRow>
                ))}
            </tbody>
        </Table>
        <TablePaginate>
            <Paginate
                pageCount={Math.ceil(sortedData.length / rowsPerPage)}
                breakLabel="..."
                nextLabel="Next"
                previousLabel="Prev"
                pageRangeDisplayed={5}
                pageLinkClassName="page"
                activeLinkClassName="activePage"
                breakLinkClassName="breakLink"
                containerClassName="paginationContainer"
                marginPagesDisplayed={1}
                previousLinkClassName={cx([
                    {["navBase"]: true},
                    {["previous"]: page >= 1},
                    {["previousDisabled"]: page === 0}
                ])}
                nextLinkClassName={cx([
                    {["navBase"]: true},
                    {["next"]: page != Math.ceil(sortedData.length / rowsPerPage)-1},
                    {["nextDisabled"]: page === Math.ceil(sortedData.length / rowsPerPage)-1}
                ])}
                onPageChange={(newPage) => setPage(newPage.selected)}
                forcePage={page}
                />
        </TablePaginate>
        </>
    )
}

export default CustomTable;