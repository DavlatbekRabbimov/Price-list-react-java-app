import {FilterContainer, SearchContainer, SearchFilterContainer} from "../../ui-styles/container-style.jsx";
import {Form} from "../../ui-styles/form-style.jsx";
import {FilterSelector, Option} from "../../ui-styles/selection-style.jsx";
import {IconSearch} from "../../ui-styles/image-style.jsx";
import {FiSearch} from "react-icons/fi";
import {InputSearch} from "../../ui-styles/input-style.jsx";
import React from "react";
import axios from "axios";
import {useProvider} from "../../providers/provider.jsx";
import {ButtonSearch} from "../../ui-styles/button-style.jsx";

export const FilterSearch = () => {

//--------------------------------------- Search Items ------------------------------------------------
    const {
        apiPath, searchKeyword, setSearchKeyword, filterKeyword, setFilterKeyword,
        setProducts,
    } = useProvider().provider;

//--------------------------------------- Search Items (CRUD) --------------------------------------------
    const searchItems = async (e) => {
        e.preventDefault();
        const [product, quality, currency] = searchKeyword.split(' ');
        let result = "";
        if (product) {
            result = await axios.get(`${apiPath}/${product}`);
        }
        if (product && quality) {
            result = await axios.get(`${apiPath}/${product}/${quality}`);
        }
        if (product && quality && currency) {
            result = await axios.get(`${apiPath}/${product}/${quality}/${currency}`);
        }
        setProducts(result.data);
    }
//---------------------------------------- Filter Items (CRUD) --------------------------------------------
    return (
        <SearchFilterContainer>
            <Form>
                <FilterContainer>
                    <FilterSelector id={`quality`}
                                    value={filterKeyword}
                                    onChange={(e) => setFilterKeyword(e.target.value)}
                    >
                        <Option value={''} name={'Quality'}/>
                        <Option value={'high'} name={'high'}/>
                        <Option value={'medium'} name={'medium'}/>
                        <Option value={'low'} name={'low'}/>
                    </FilterSelector>
                </FilterContainer>

                <SearchContainer>
                    <IconSearch Icon={FiSearch}/>
                    <InputSearch type={`text`}
                                 id={`search`}
                                 value={searchKeyword}
                                 onChange={(e) => setSearchKeyword(e.target.value)}
                                 placeholder={`Search`}
                                 required
                    />
                    <ButtonSearch name={`Search`}
                                  type={`button`}
                                  onClick={searchItems}
                    />
                </SearchContainer>
            </Form>
        </SearchFilterContainer>
    )
}