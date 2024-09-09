import React, {createContext, useContext, useState} from "react";

const ProviderContext = createContext();
export const Provider = ({children}) => {

    const apiPath = 'http://localhost:8080/api/products';
    // ---------------------- Price List Data ------------------------------
    const emptyList = {product: '', quality: '', price: '', currency: '', count: '', unit: '', totalPrice: ''};
    const [priceList, setPriceList] = useState(emptyList);
    const [products, setProducts] = useState([]);
    // ----------------------------- Search tool ----------------------------------------
    const [searchKeyword, setSearchKeyword] = useState('');
    // ----------------------------- Filter and Search tool ----------------------------------------
    const [filterKeyword, setFilterKeyword] = useState('');
    const filterByQuality = products.filter(
        (items) => items.quality.includes(filterKeyword)
    );
    // ------------------------------ Pagination ----------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const indexLastProduct = currentPage * productsPerPage;
    const indexFirstProduct = indexLastProduct - productsPerPage;
    const currentProductCount = filterByQuality.slice(indexFirstProduct, indexLastProduct);
    const totalPages = [];
    for (let i = 1; i <= Math.ceil(filterByQuality.length / productsPerPage); i++) {
        totalPages.push(i);
    }
    // ---------------------- Animation Icon ---------------------------------
    const [isOpenProduct, setIsOpenProduct] = useState(false);
    const [isOpenRate, setIsOpenRate] = useState(false);
    const [isOpenPrice, setIsOpenPrice] = useState(false);
    const [isOpenCurrency, setIsOpenCurrency] = useState(false);
    const [isOpenCount, setIsOpenCount] = useState(false);
    const [isOpenUnit, setIsOpenUnit] = useState(false);
    const isClickedProduct = () => { setIsOpenProduct(!isOpenProduct); };
    const isClickedRate = () => { setIsOpenRate(!isOpenRate); };
    const isClickedPrice = () => { setIsOpenPrice(!isOpenPrice);};
    const isClickedCurrency = () => { setIsOpenCurrency(!isOpenCurrency);};
    const isClickedCount = () => { setIsOpenCount(!isOpenCount);};
    const isClickedUnit = () => { setIsOpenUnit(!isOpenUnit);};

    // ----------------------------- Format Number (Input) ----------------------------------------
    const setFormatNumberString = (value) => {
        value = value.replace(/\s/g, '');
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
        return value;
    }
    const clearFormatNumberString = ({...priceList}) => {
        let dataForDatabase = {...priceList};
        dataForDatabase.price = parseFloat(dataForDatabase.price.replace(/\s/g, '').replace(',', '.'));
        dataForDatabase.count = parseFloat(dataForDatabase.count.replace(/\s/g, '').replace(',', '.'));
        return dataForDatabase;
    }
    // ----------------------------- CRUD Items ----------------------------------------
    const [productForDelete, setProductForDelete] = useState(currentProductCount);
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isOpenUpdatingWindow, setIsOpenUpdatingWindow] = useState(false);
    const [isProductSelected, setIsProductSelected] = useState(false);
    const [isQualitySelected, setIsQualitySelected] = useState(false);
    const [isCurrencySelected, setIsCurrencySelected] = useState(false);
    const [updatedFields, setUpdatedFields] = useState({});
    const [updatedProduct, setUpdatedProduct] = useState('');
    const [updatedQuality, setUpdatedQuality] = useState('');
    const [updatedCurrency, setUpdatedCurrency] = useState('');
    // -----------------------------------------------------------------------------------
    const provider = {
        emptyList, priceList, setPriceList, apiPath, products, setProducts, currentPage, setCurrentPage,
        productsPerPage, currentProductCount, indexFirstProduct, indexLastProduct, totalPages,
        isOpenProduct, setIsOpenProduct, isOpenRate, setIsOpenRate, isOpenPrice, setIsOpenPrice,
        isOpenCurrency, setIsOpenCurrency, isOpenCount, setIsOpenCount, isOpenUnit, setIsOpenUnit,
        productForDelete, setProductForDelete, isMenuVisible, setMenuVisible, searchKeyword,
        setSearchKeyword, filterKeyword, setFilterKeyword, filterByQuality, isOpenUpdatingWindow,
        setIsOpenUpdatingWindow, isProductSelected, setIsProductSelected, isQualitySelected,
        setIsQualitySelected, isCurrencySelected, setIsCurrencySelected, updatedFields,
        setUpdatedFields, updatedProduct, setUpdatedProduct, updatedQuality, setUpdatedQuality,
        updatedCurrency, setUpdatedCurrency, setFormatNumberString, clearFormatNumberString,
        isClickedProduct, isClickedRate, isClickedPrice, isClickedCurrency, isClickedCount, isClickedUnit,
    }

    return (
        <ProviderContext.Provider value={{provider}}>
            {children}
        </ProviderContext.Provider>
    )
}

export function useProvider() {
    return useContext(ProviderContext);
}
