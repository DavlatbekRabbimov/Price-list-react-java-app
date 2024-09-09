import React from "react";
import {
    CRUDContainer,
    MenuCRUDContainer,
    MenuIconContainer, ProductUpdatingContainer, ItemTitleContainer, ItemUpdatingBox, ItemUpdatingContainer,
    UpdatingContainer, RadioContainer, Container, UpdatingButtonContainer
} from "../../ui-styles/container-style.jsx";
import {FiMoreHorizontal} from "react-icons/fi";
import {DeleteIcon, EditIcon} from "../../ui-styles/image-style.jsx";
import {BiSolidEditAlt} from "react-icons/bi";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useProvider} from "../../providers/provider.jsx";
import axios from "axios";
import {ProductCheckbox, ProductInput, RadioInput, TitleCheckbox} from "../../ui-styles/input-style.jsx";
import {CheckboxLabel, RadioLabel} from "../../ui-styles/text-style.jsx";
import {UpdatingButton} from "../../ui-styles/button-style.jsx";

export const CrudMenu = ({items}) => {

    const {
        apiPath, productForDelete, setProductForDelete,
        isMenuVisible, setMenuVisible, isOpenUpdatingWindow, setIsOpenUpdatingWindow,
        setIsProductSelected, setIsQualitySelected, setIsCurrencySelected,
        updatedFields, setUpdatedFields, updatedProduct, setUpdatedProduct,
        updatedQuality, setUpdatedQuality, updatedCurrency, setUpdatedCurrency,
    } = useProvider().provider;

//----------------------------------------- Window For Updating fields ---------------------------------------------------
    const showUpdateWindow = (id) => {
        setIsOpenUpdatingWindow((prevState) => ({...prevState, [id]: true}));
    };
    const closeUpdateWindow = (e, id) => {
        e.stopPropagation();
        setIsOpenUpdatingWindow((prevState) => ({...prevState, [id]: false}))
    };
//----------------------------------------- Update Items (CRUD) ----------------------------------------------------------
    const updateItems = async (id) => {
        try {
            const result = await axios.patch(`${apiPath}/${id}`, updatedFields);
            alert(`Successfully items updated! - ${result.status}`);
            window.location.reload();
        } catch (err) {
            alert(`Error: Items not updated! - ${err}`)
        }
    }
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        setUpdatedProduct(e.target.value);
        setUpdatedFields({
            ...updatedFields,
            product: e.target.value
        })
    }

    const handleUpdateQuality = (e) => {
        e.preventDefault();
        setUpdatedQuality(e.target.value);
        setUpdatedFields((prevState) => (
            {
                ...prevState,
                quality: e.target.value,
                product: prevState.product,
                currency: prevState.currency
            }
        ));
    }

    const handleUpdateCurrency = (e) => {
        e.preventDefault();
        setUpdatedCurrency(e.target.value);
        setUpdatedFields((prevState) => (
            {
                ...prevState,
                currency: e.target.value,
                product: prevState.product,
                quality: prevState.quality
            }
        ));
    }
//----------------------------------------- Delete Items (CRUD) ---------------------------------------------
        const deleteItem = async (id) => {
            try {
                const result = await axios.delete(`${apiPath}/${id}`);
                if (result.status === 204) {
                    setProductForDelete(productForDelete.filter(product => product.id !== id));
                    alert(`Successfully product by id - ${id} deleted!`);
                    window.location.reload();
                } else {
                    alert(`Error: product by id - ${id} not deleted (no status)!`);
                }

            } catch (err) {
                alert(`Error: product by id - ${id} not deleted! `);
            }
        }
//--------------------------------------- Menu Button ------------------------------------------------------
        const showMenu = (id) => {
            setMenuVisible((prevState) => ({...prevState, [id]: true}));
        };
        const hideMenu = (id) => {
            setMenuVisible((prevState) => ({...prevState, [id]: false}))
        };
//------------------------------------------------------------------------------------------------------------
        return (
            <CRUDContainer>
                {isOpenUpdatingWindow[items.id] && (
                    <UpdatingContainer>
                        <ProductUpdatingContainer>
                            <ProductCheckbox id={`product-checkbox`} type={`checkbox`}
                                             onChange={(e) => setIsProductSelected(e.target.checked)}
                            />
                            <ProductInput id={'product-update-input'}
                                          type={`text`}
                                          className={`w-[155px] h-[25px] text-[15px] p-2 bg-gray-700 rounded-[5px]`}
                                          placeholder={`Product`}
                                          value={updatedProduct}
                                          onChange={handleUpdateProduct}
                            />
                        </ProductUpdatingContainer>

                        <ItemUpdatingBox>
                            <ItemUpdatingContainer>
                                <ItemTitleContainer>
                                    <TitleCheckbox id={`quality-checkbox`} type={`checkbox`}
                                                   onChange={(e) => setIsQualitySelected(e.target.checked)}
                                    />
                                    <CheckboxLabel htmlFor={`quality-label`} name={`Quality`}/>
                                </ItemTitleContainer>
                                <RadioContainer>
                                    <Container>
                                        <RadioInput id={`quality-radio-high`} type={`radio`} name={`quality-radio`}
                                                    value={`high`}
                                                    checked={updatedQuality === 'high'}
                                                    onChange={handleUpdateQuality}
                                        />
                                        <RadioLabel htmlFor={`quality-radio-high`} name={`high`}/>
                                    </Container>
                                    <Container>
                                        <RadioInput id={`quality-radio-medium`} type={`radio`} name={`quality-radio`}
                                                    value={`medium`}
                                                    checked={updatedQuality === 'medium'}
                                                    onChange={handleUpdateQuality}
                                        />
                                        <RadioLabel htmlFor={`quality-radio-medium`} name={`medium`}/>
                                    </Container>
                                    <Container>
                                        <RadioInput id={`quality-radio-low`} type={`radio`} name={`quality-radio`}
                                                    value={`low`}
                                                    checked={updatedQuality === 'low'}
                                                    onChange={handleUpdateQuality}
                                        />
                                        <RadioLabel htmlFor={`quality-radio-low`} name={`low`}/>
                                    </Container>
                                </RadioContainer>
                            </ItemUpdatingContainer>
                        </ItemUpdatingBox>

                        <ItemUpdatingBox>
                            <ItemUpdatingContainer>

                                <ItemTitleContainer>
                                    <TitleCheckbox id={`currency-checkbox`} type={`checkbox`}
                                                   onChange={(e) => setIsCurrencySelected(e.target.checked)}
                                    />
                                    <CheckboxLabel htmlFor={`currency-label`} name={`Currency`}/>
                                </ItemTitleContainer>

                                <RadioContainer>
                                    <Container>
                                        <RadioInput id={`currency-radio-usd`} type={`radio`} name={`currency-radio`}
                                                    value={`USD`}
                                                    checked={updatedCurrency === 'USD'}
                                                    onChange={handleUpdateCurrency}

                                        />
                                        <RadioLabel htmlFor={`update-radio-usd`} name={`usd`}/>
                                    </Container>
                                    <Container>
                                        <RadioInput id={`currency-radio-rub`} type={`radio`} name={`currency-radio`}
                                                    value={`RUB`}
                                                    checked={updatedCurrency === 'RUB'}
                                                    onChange={handleUpdateCurrency}
                                        />
                                        <RadioLabel htmlFor={`currency-radio-medium`} name={`rub`}/>
                                    </Container>
                                    <Container>
                                        <RadioInput id={`currency-radio-uzs`} type={`radio`} name={`currency-radio`}
                                                    value={`UZS`}
                                                    checked={updatedCurrency === 'UZS'}
                                                    onChange={handleUpdateCurrency}
                                        />
                                        <RadioLabel htmlFor={`currency-radio-uzs`} name={`uzs`}/>
                                    </Container>
                                </RadioContainer>

                            </ItemUpdatingContainer>
                        </ItemUpdatingBox>

                        <UpdatingButtonContainer>
                            <UpdatingButton name={`Cancel`} onClick={(e) => closeUpdateWindow(e, items.id)}/>
                            <UpdatingButton name={`Update`} onClick={() => updateItems(items.id)}/>
                        </UpdatingButtonContainer>

                    </UpdatingContainer>
                )
                }
                <MenuCRUDContainer onMouseEnter={() => showMenu(items.id)}
                                   onMouseLeave={() => hideMenu(items.id)}
                >
                    {!isMenuVisible[items.id] && <FiMoreHorizontal/>}

                    {isMenuVisible[items.id] && (
                        <MenuIconContainer>
                            <EditIcon Icon={BiSolidEditAlt} onClick={() => showUpdateWindow(items.id)}/>
                            {
                                !isOpenUpdatingWindow[items.id] &&
                                (<DeleteIcon Icon={RiDeleteBin5Fill} onClick={() => deleteItem(items.id)}
                                />)
                            }

                        </MenuIconContainer>
                    )}
                </MenuCRUDContainer>
            </CRUDContainer>
        )
}

