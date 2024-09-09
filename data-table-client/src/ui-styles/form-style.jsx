import React from "react";

export const Form = ({children}, {...props}) => {
    return <form className={`flex justify-center items-center`} {...props}>{children}</form>
}