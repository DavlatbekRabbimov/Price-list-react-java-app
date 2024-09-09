import React from "react";
import {Dashboard} from "./tools/dashboard.jsx";
import {DataTable} from "./tools/data-table.jsx";
import {Pagination} from "./tools/pagination.jsx";
import {MonitorBox} from "../ui-styles/container-style.jsx";
import {FilterSearch} from "./tools/filter-search.jsx";

export const MonitoringPl = () => {
    return (
        <MonitorBox>
            <FilterSearch/>
            <Dashboard/>
            <DataTable/>
            <Pagination/>
        </MonitorBox>
    )
}