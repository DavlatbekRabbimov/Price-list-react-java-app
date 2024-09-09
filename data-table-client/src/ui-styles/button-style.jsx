import React from "react";
const Button = ({className, ...props}) => {
    return (
        <button className={`
                py-2 
                text-sm font-medium text-white 
                bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700
                focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 focus:outline-none
                ${className}
                `}{...props}/>
    )
}

export const PrevButton = ({name, ...props}) => {
    return(
        <Button className={`px-3 border border-blue-700 rounded-l-full`} {...props}>
            {name}
        </Button>
    )
}

export const NextButton = ({name, ...props}) => {
    return(
        <Button className={`px-3 border border-blue-700 rounded-r-full`} {...props}>
            {name}
        </Button>
    )
}

export const ButtonCreator = ({name, ...props}) => {
    return <Button className={'relative px-4 rounded-lg'}{...props}> {name} </Button>
}
export const ButtonSearch = ({name, ...props}) => {
    return <Button className={`absolute right-2 top-1 inline-flex px-3 border border-blue-700 rounded-lg`} {...props}>
        {name}
    </Button>
}
export const UpdatingButton = ({name, children, ...props}) => {
    return <button className={`bg-blue-600 hover:bg-blue-800 p-1 px-2 rounded-lg`} {...props}>{name} {children}</button>
}


