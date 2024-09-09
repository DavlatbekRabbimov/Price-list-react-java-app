import React from "react";
import axios from 'axios'
import {useProvider} from "../providers/provider.jsx";
import {RiCurrencyFill, RiScales2Fill, RiShoppingBasketFill} from "react-icons/ri";
import {CreationContainer, SelectorContainer, Container, CreationBox} from "../ui-styles/container-style.jsx";
import {Bs123} from "react-icons/bs";
import {IoPricetags} from "react-icons/io5";
import {PiNumberCircleZeroFill} from "react-icons/pi";
import {ButtonCreator} from "../ui-styles/button-style.jsx";
import {DragonLeftLogo, DragonRightLogo, IconCreator} from "../ui-styles/image-style.jsx";
import {InputCreator} from "../ui-styles/input-style.jsx";
import {RateSelector, CurrencySelector, Option, UnitSelector} from "../ui-styles/selection-style.jsx";
import {PriceListTitle} from "../ui-styles/text-style.jsx";
export const CreationPl = () => {

    const {
        emptyList, priceList, setPriceList, apiPath,
        isOpenProduct, isOpenRate,
        isOpenPrice, isOpenCurrency, isOpenCount, isOpenUnit,
        isClickedProduct, isClickedRate, isClickedPrice, isClickedCurrency,
        isClickedCount, isClickedUnit, clearFormatNumberString, setFormatNumberString
    } = useProvider().provider;

//-------------------------------------------- Create Items --------------------------------------------------------------
    const createItems = async () => {
        try {

            await axios.post(`${apiPath}`, clearFormatNumberString({...priceList}));
            setPriceList(emptyList);
            alert('Successfully create price list!')
            window.location.reload();
        } catch (err) {
            setPriceList(emptyList);
            alert('Error: Price list did not create!');

        }
    }

    const handleChangeInput = (e) => {
        e.preventDefault();
        let value = e.target.value;
        const name = e.target.name;

        if (name === 'price' || name === 'count') {
            value = value.replace(/[^0-9.,]/g, '');
            if (value !== '') {
                value = setFormatNumberString(value);
            }
        }

        setPriceList({
            ...priceList,
            [name]: value
        })
    }
//---------------------------------------------------------------------------------------------------------------------------
    return (
            <CreationBox>
                <PriceListTitle name={`Price list`}>
                    <DragonRightLogo src={`src/assets/dragon_logo.png`} alt={`logo`}/>
                    <DragonLeftLogo src={`src/assets/dragon_logo.png`} alt={`logo`}/>
                </PriceListTitle>

                <CreationContainer>
                    <Container>
                        {!isOpenProduct
                            ?
                            (<IconCreator Icon={RiShoppingBasketFill} onClick={isClickedProduct}/>)
                            :
                            (<InputCreator type={`text`}
                                           id={`product`}
                                           placeholder={'Product'}
                                           name={`product`}
                                           value={priceList.product}
                                           onChange={handleChangeInput}
                            />)
                        }
                    </Container>

                    <Container>
                        {
                            !isOpenRate
                                ?
                                (<IconCreator Icon={Bs123} onClick={isClickedRate}/>)
                                :
                                (
                                    <SelectorContainer>
                                        <RateSelector id={`quality`}
                                                      name={`quality`}
                                                      value={priceList.quality}
                                                      onChange={handleChangeInput}
                                        >
                                            <Option value={''} name={'Quality'}/>
                                            <Option value={'high'} name={'high'}/>
                                            <Option value={'medium'} name={'medium'}/>
                                            <Option value={'low'} name={'low'}/>
                                        </RateSelector>
                                    </SelectorContainer>
                                )
                        }
                    </Container>

                    <Container>
                        {
                            !isOpenPrice
                                ?
                                (<IconCreator Icon={IoPricetags} onClick={isClickedPrice}/>)
                                :
                                (
                                    <InputCreator type={`text`}
                                                  id={`price`}
                                                  placeholder={`Price`}
                                                  name={`price`}
                                                  value={priceList.price}
                                                  onChange={handleChangeInput}
                                    />
                                )
                        }
                    </Container>

                    <Container>
                        {
                            !isOpenCurrency
                                ?
                                (<IconCreator Icon={RiCurrencyFill} onClick={isClickedCurrency}/>)
                                :
                                (
                                    <SelectorContainer>
                                        <CurrencySelector id={`currency`}
                                                          name={`currency`}
                                                          value={priceList.currency}
                                                          onChange={handleChangeInput}
                                        >
                                            <Option value={``} name={`Currency`}/>
                                            <Option value={`USD`} name={`USD`}/>
                                            <Option value={`RUB`} name={`RUB`}/>
                                            <Option value={`UZS`} name={`UZS`}/>
                                        </CurrencySelector>
                                    </SelectorContainer>
                                )
                        }
                    </Container>

                    <Container>
                        {
                            !isOpenCount
                                ?
                                (<IconCreator Icon={PiNumberCircleZeroFill} onClick={isClickedCount}/>)
                                :
                                (<InputCreator type={`text`}
                                               id={`count`}
                                               placeholder={`Count`}
                                               name={`count`}
                                               value={priceList.count}
                                               onChange={handleChangeInput}
                                />)
                        }
                    </Container>

                    <Container>
                        {
                            !isOpenUnit
                                ?
                                (<IconCreator Icon={RiScales2Fill} onClick={isClickedUnit}/>)
                                :
                                (
                                    <SelectorContainer>
                                        <UnitSelector id={`unit`}
                                                      name={`unit`}
                                                      value={priceList.unit}
                                                      onChange={handleChangeInput}
                                        >
                                            <Option value={``} name={`Units`}/>
                                            <Option value={`g.`} name={`g.`}/>
                                            <Option value={`kg.`} name={`kg.`}/>
                                            <Option value={`sm.`} name={`sm.`}/>
                                            <Option value={`m.`} name={`m.`}/>
                                            <Option value={`pc.`} name={`pc.`}/>
                                            <Option value={`l.`} name={`l.`}/>
                                        </UnitSelector>
                                    </SelectorContainer>
                                )
                        }
                    </Container>
                    <ButtonCreator name={`Create`} onClick={createItems}/>
                </CreationContainer>

            </CreationBox>
    )
}