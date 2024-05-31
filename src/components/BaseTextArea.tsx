import { FieldHookConfig, useField } from "formik"
import { TextareaHTMLAttributes, ClassAttributes } from "react"

type InputProps = {
    label?: string,
}

export default function TextArea({ label, ...props }: InputProps & TextareaHTMLAttributes<HTMLTextAreaElement> & ClassAttributes<HTMLTextAreaElement> & FieldHookConfig<string>) {
    
    const [field, meta] = useField(props)

    return (
        <div className="grid space-y-2 text-darkGrey dark:text-white">
            {label && (
                <label htmlFor={props.id || props.name} className="capitalize body-m">
                    {label}
                </label>
            )}
            <textarea
                className="border border-[#828FA340] px-4 py-2 rounded-md body-l resize-none bg-transparent" {...field} {...props}
            />
        </div>
    )
}