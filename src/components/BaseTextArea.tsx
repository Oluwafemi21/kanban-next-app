import React from "react"
type inputProps = {
    value: string,
    label?: string,
    name?:string,
    placeholder?:string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    rows?: number | 5
}
export default function TextArea({label,name,rows,value,placeholder,onChange }:inputProps) {
    
    return (
        <div className="grid space-y-2 text-darkGrey dark:text-white">
            {label && (
                <label htmlFor={name} className="capitalize body-m">
                    {label}
                </label>
            )}
            <textarea
                className="border border-[#828FA340] px-4 py-2 rounded-md body-l resize-none bg-transparent"
                name={name}
                value={value}
                onChange={(e)=>onChange(e)}
                placeholder={placeholder}
                rows={rows}
            />
        </div>
    )
}