import { FieldHookConfig, useField } from "formik"
import {InputHTMLAttributes,ClassAttributes} from "react"
type InputProps = {
    // type?: string | 'text',
    // value: string,
    label?: string,
    // name?:string,
    // min?: string,
    // max?: string,
    // placeholder?:string,
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    // error?:string
}
export default function BaseInput({ label, ...props }: InputProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> & FieldHookConfig<string>) {
    
    const [field, meta] = useField(props)
    
    return (
        <div className="grid space-y-2 text-darkGrey dark:text-white w-full">
            {label && (
                <label htmlFor={props.id || props.name} className="capitalize body-m">
                    {label}
                </label>
            )}
            <div className="relative">
            <input
                className={`border border-[#828FA340] px-4 py-2 rounded-md body-l font-medium bg-transparent w-full ${meta.touched && meta.error ? 'border-danger' : ''}`}
                {...field}
                {...props}
            />
            {meta.touched ? (
                <p className="text-danger absolute body-l top-2 right-4">{meta.error}</p>
            ):null}
            </div>
        </div>
        
    )
}