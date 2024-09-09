import React, {useEffect} from "react";
import {
    Table,
    TableBody,
    TableBodyRow,
    TableData,
    TableHead,
    TableHeader,
    TableHeadRow,
    TableUpdatedData
} from "../../ui-styles/table-style.jsx";
import {useProvider} from "../../providers/provider.jsx";
import axios from 'axios'
import {TableContainer} from "../../ui-styles/container-style.jsx";
import {CrudMenu} from "./crud-menu.jsx";

export const DataTable = () => {

    const { apiPath, setProducts, currentProductCount} = useProvider().provider;

//--------------------------------------- Get Items (CRUD) --------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${apiPath}`);
            setProducts(result.data);
        }
        return () => {
            fetchData();
        }

    }, [])
//----------------------------------------------------------------------------------------------------------------
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableHeadRow>
                        <TableHeader name={`Product`}/>
                        <TableHeader name={`Quality`}/>
                        <TableHeader name={`Price`}/>
                        <TableHeader name={`Currency`}/>
                        <TableHeader name={`Count`}/>
                        <TableHeader name={`Unit`}/>
                        <TableHeader name={`Total price`}/>
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {currentProductCount.map((items) => {
                                return (
                                    <TableBodyRow key={items.id}>
                                        <TableData>{items.product}</TableData>
                                        <TableData>{items.quality}</TableData>
                                        <TableData>{items.price}</TableData>
                                        <TableData>{items.currency}</TableData>
                                        <TableData>{items.count}</TableData>
                                        <TableData>{items.unit}</TableData>
                                        <TableUpdatedData>
                                            {items.totalPrice}
                                            <CrudMenu items={items}/>
                                        </TableUpdatedData>
                                    </TableBodyRow>
                                )
                            })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )

}