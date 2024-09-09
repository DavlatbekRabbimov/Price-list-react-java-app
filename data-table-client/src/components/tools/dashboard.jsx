import React, {useEffect, useState} from "react";
import {useProvider} from "../../providers/provider.jsx";
import axios from "axios";
import {
    Container,
    DashboardContainer,
    TotalCount,
    TotalCountContainer,
    TotalCountHeader, TotalCurrency, TotalCurrencyName
} from "../../ui-styles/container-style.jsx";

export const Dashboard = () => {

    const {apiPath, products, } = useProvider().provider;
    const [currencies, setCurrencies] = useState([]);

//---------------------------------------- Get Currencies (CRUD) --------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${apiPath}/currency`);
                setCurrencies(result.data)
            } catch (err) {
                alert('Error: Currency not found!')
            }
        }
        return () => {
            fetchData();
        }
    }, [])

//---------------------------------------------------------------------------------------------------------------------

    return (
        <DashboardContainer>
            <TotalCountContainer>
                <TotalCountHeader name={`Total Count`}/>
                <TotalCount>{products.length}</TotalCount>
            </TotalCountContainer>

            {currencies.map((currency, index) => (
                <Container key={index}>
                    <TotalCurrency>
                        <TotalCurrencyName>{currency[0]}</TotalCurrencyName>
                        <TotalCount>{currency[1]}</TotalCount>
                    </TotalCurrency>
                </Container>
            ))}
        </DashboardContainer>
    );
}

