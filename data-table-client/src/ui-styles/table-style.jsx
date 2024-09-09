import React from "react";

export const Table = ({children})=> {
    return <table className={`table-fixed w-full`}>{children}</table>
}

export const TableHead = ({children})=> {
    return <thead>{children}</thead>
}

export const TableHeadRow = ({children})=> {
    return <tr className={`bg-gray-700`}>{children}</tr>
}

export const TableHeader = ({name})=> {
    return <th className={`border border-gray-800 text-white p-1 `}>{name}</th>
}

export const TableBodyRow = ({children, ...props})=> {
    return <tr className={`border-b border-gray-700 text-center text-white hover:bg-gray-700`} {...props}>{children}</tr>
}

export const TableBody = ({children})=> {
    return <tbody>{children}</tbody>
}

export const TableData = ({name, children})=> {
    return <td>{name}{children}</td>
}

export const TableUpdatedData = ({children})=> {
    return <td className={`flex flex-row justify-between items-center mx-4 p-2`}>{name}{children}</td>
}
