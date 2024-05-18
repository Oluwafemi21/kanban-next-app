import React from "react"
type inputProps = {
    type?: string | 'text',
    value: string,
    label?: string,
    name?:string,
    min?: string,
    max?: string,
    placeholder?:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}
export default function BaseInput({label,type,name,value,min,max,placeholder,onChange }:inputProps) {
    
    return (
        <div className="grid space-y-2 text-darkGrey dark:text-white">
            {label && (
                <label htmlFor={name} className="capitalize body-m">
                    {label}
                </label>
            )}
            <input
                className="border border-[#828FA340] px-4 py-2 rounded-md body-l font-medium"
                name={name}
                type={type}
                value={value}
                min={min}
                max={max}
                onChange={(e)=>onChange(e)}
                placeholder={placeholder}
                
            />
        </div>
    )
}