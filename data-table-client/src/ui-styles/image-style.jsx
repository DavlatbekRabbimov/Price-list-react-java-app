import React from "react";

export const DragonRightLogo = ({alt,...props}) => {
    return (
        <div className={`absolute z-1 w-[55px] h-[55px] mr-[700px]`}>
            <img alt={alt} {...props}/>
        </div>
    )
}

export const DragonLeftLogo = ({alt,...props}) => {
    return (
        <div className={`absolute z-1 w-[55px] h-[55px] ml-[700px]`}>
            <img alt={alt} {...props}/>
        </div>
    )
}

export const IconCreator = ({Icon, ...props}) => {
    return (
        <div className={`spinIcon text-[40px] border-2 border-solid border-gray-500 rounded-lg mx-6`}>
            {Icon && <Icon className={`mx-1.5`} {...props}/>}
        </div>
    )
}

export const IconSearch = ({Icon, ...props}) => {
    return (
        <div className={`absolute left-0 flex items-center pl-3 mt-4 pointer-events-none `}>
            {Icon && <Icon className={`text-[18px]`} {...props}/>}
        </div>
    )
}

export const EditIcon = ({Icon, ...props}) => {
    return (
        <div className={`text-blue-600 hover:text-blue-400 mx-1 text-[22px]`} {...props}>
            {Icon && <Icon/>}
        </div>
    )
}

export const DeleteIcon = ({Icon, ...props}) => {
    return (
        <div className={`text-red-600 hover:text-red-400 mx-1 text-[22px]`} {...props}>
            {Icon && <Icon/>}
        </div>
    )
}