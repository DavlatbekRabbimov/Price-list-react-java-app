import {MonitoringPl} from "./monitoring-pl.jsx";
import React from "react";
import {CreationPl} from "./creation-pl.jsx";
import {PriceListPage} from "../ui-styles/container-style.jsx";

export const PriceList = () => {

    return(
        <PriceListPage>
            <CreationPl/>
            <MonitoringPl/>
        </PriceListPage>
    )
}