import React from "react";
export const PriceListPage = ({children}) => {
    return <div className={`flex flex-col justify-center items-center w-full h-screen`}>{children}</div>
}
export const MonitorBox = ({children}) => {
    return <div
        className={`relative w-[950px] h-[500px] border-8 border-solid border-gray-700 rounded-lg`}>{children}</div>
}
export const CreationBox = ({children}) => {
    return <div className={`relative w-[750px] h-[150px] rounded-lg`}>{children}</div>
}
export const Container = ({children}) => {
    return <div> {children}</div>
}
export const AppContainer = ({children}) => {
    return <div> {children}</div>
}
export const SearchFilterContainer = ({children}) => {
    return <div> {children}</div>
}
export const TableContainer = ({children}) => {
    return <div className={`m-4`}> {children}</div>
}
const CenterContainer = ({className, children}) => {
    return <div className={`flex justify-center items-center ${className}`}>{children}</div>
}
export const CreationContainer = ({children}) => {
    return <CenterContainer className={`space-x-2 flex-row `}>{children}</CenterContainer>
}
export const SelectorContainer = ({children}) => {
    return <div className={`rounded-lg border-2 border-solid border-gray-500`}>{children}</div>
}
export const FilterContainer = ({children, ...props}) => {
    return <div className={`relative`} {...props}>{children}</div>
}
export const SearchContainer = ({children}) => {
    return <div className={`relative w-full mr-2`}>{children}</div>
}
export const CRUDContainer = ({children}) => {
    return <CenterContainer className={`relative`}>{children}</CenterContainer>
}
export const MenuCRUDContainer = ({children, ...props}) => {
    return <div className={`absolute z-10`} {...props}>{children}</div>
}
export const MenuIconContainer = ({children, ...props}) => {
    return <div className={`flex flex-row justify-evenly items-center w-full px-2 py-2 border-2 bg-slate-600 rounded-lg`} {...props}>
        {children}
    </div>
}
export const DashboardContainer = ({children}) => {
    return <CenterContainer className={`flex-row`}>{children}</CenterContainer>
}
export const TotalCountContainer = ({children, ...props}) => {
    return <CenterContainer className={`flex-col mx-6 px-4 rounded-lg border-l-2 border-r-2`} {...props}>
        {children}
    </CenterContainer>
}
export const TotalCountHeader = ({name}) => {
    return <h1 className={`text-[15px] font-bold`}>{name}</h1>
}
export const TotalCount = ({children}) => {
    return <div className={`text-[23px]`}>{children}</div>
}
export const TotalCurrency = ({children, ...props}) => {
    return <CenterContainer className={`flex-col relative mx-6 px-4 rounded-lg border-l-2 border-r-2`} {...props}>
        {children}
    </CenterContainer>
}
export const TotalCurrencyName = ({children}) => {
    return <h1 className={`mx-6 text-[15px] font-bold`}>{children}</h1>
}
export const PaginationContainer = ({children}) => {
    return <div className={`flex items-center`}>{children}</div>
}
export const TotalPageContainer = ({children}) => {
    return <div className={`ml-6`}>{children}</div>
}
export const TotalPageText = ({children, name}) => {
    return <p>{name}{children}</p>
}
export const ButtonContainer = ({children}) => {
    return <div className={`absolute space-x-6 right-0 mr-6`}>{children}</div>
}
export const UpdatingContainer = ({children}) => {
    return <div className={`
                absolute top-0 left-0 z-10 ml-[30px] bg-slate-800 py-6 px-6 space-y-2 
                rounded-lg border-2 border-slate-500 font-sans`}>{children}</div>
}
export const ProductUpdatingContainer = ({children}) => {
    return <div className={`flex flex-row space-x-2 mb-2`}>{children}</div>
}
export const ItemUpdatingBox = ({children}) => {
    return <div className={`flex flex-col justify-center items-start`}>{children}</div>
}
export const ItemUpdatingContainer = ({children}) => {
    return <div className={`mb-1`}>{children}</div>
}
export const ItemTitleContainer = ({children}) => {
    return <div className={`flex flex-row items-start space-x-2`}>{children}</div>
}
export const RadioContainer = ({children}) => {
    return <div className={`flex flex-row justify-center items-center space-x-1`}>{children}</div>
}

export const UpdatingButtonContainer = ({children}) => {
    return <div className={`text-[16px] space-x-4 text-white`}>{children}</div>
}


