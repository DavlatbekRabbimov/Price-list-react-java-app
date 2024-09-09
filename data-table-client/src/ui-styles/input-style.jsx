import React from "react";

export const InputCreator = ({...props}) => {
    return (
        <input className={`
        w-[100px] p-2 bg-gray-700
        border-2 border-solid border-gray-500 hover:border-gray-400
        outline-none rounded-lg 
        `} {...props}/>
    )
}

export const InputSearch = ({...props}) => {
    return (
        <input className={`
        w-full pl-10 py-3 px-12 rounded-r-lg
        border border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-500 
        text-gray-900 text-sm dark:text-white 
        focus:ring-blue-500 dark:focus:ring-blue-500 
        dark:placeholder-gray-400 
        bg-gray-50 dark:bg-gray-700 
        `} {...props}/>
    )
}

export const ProductCheckbox = ({...props}) => {
    return <input className={``} {...props}/>
}
export const ProductInput = ({...props}) => {
    return <input className={`w-[155px] h-[25px] text-[15px] p-2 bg-gray-700 rounded-[5px]`} {...props}/>
}
export const TitleCheckbox = ({...props}) => {
    return <input className={`mt-1`} {...props}/>
}

export const RadioInput = ({...props}) => {
    return <input {...props}/>
}



