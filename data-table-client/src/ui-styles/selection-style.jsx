import React from "react";

const Selector = ({children, className, ...props}) => {
    return (
        <select
            className={`${className} rounded-lg p-2.5 px-1 bg-gray-700 text-gray-400 focus:text-white outline-none hover:border-gray-400`} {...props}>
            {children}
        </select>
    )
}
export const CurrencySelector = ({children, ...props}) => {
    return <Selector className={`px-1`} {...props}> {children} </Selector>
}

export const RateSelector = ({children, ...props}) => {
    return <Selector className={`px-4`} {...props}> {children} </Selector>
}

export const UnitSelector = ({children, ...props}) => {
    return <Selector className={`px-4`} {...props}> {children} </Selector>
}

export const FilterSelector = ({children, ...props}) => {
    return (
        <select className={`
                w-[130px] mx-2 my-6 p-3 px-8 rounded-l-lg 
                border border-gray-300 focus:border-blue-500 dark:border-gray-600 
                text-[16px] font-bold font-sans text-gray-300
                focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500
                bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400`} {...props}>
            {children}
        </select>
    )
}

export const Option = ({name, ...props}) => {
    return <option {...props}> {name} </option>

}
