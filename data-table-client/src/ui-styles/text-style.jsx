export const PriceListTitle = ({name, children}) => {
    return (
        <div className={`flex justify-center items-center m-4 font-bold font-sans rounded-lg`}>
            <Label>{name}</Label>
            {children}
        </div>
    )
}
const Label = ({children}) => {
    return <label className={`w-full rounded-lg border-b-4 border-t-4 border-solid border-gray-700 text-[25px] font-sans text-center text-gray-300 p-2`}> {children} </label>
}
export const CheckboxLabel = ({name, children, ...props}) => {
    return <label className={``} {...props}> {name} {children} </label>
}
export const RadioLabel = ({name, children, ...props}) => {
    return <label{...props}> {name} {children} </label>
}