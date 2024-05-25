import { useState } from "react"

type props = {
    label: string,
    id: string,
    checked:boolean
    handleCheck:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Checkbox({ label, id, checked, handleCheck }: props) {
    
    return  <label htmlFor={id} className="transition duration-100 ease-in cursor-pointer flex text-left body-m group hover:bg-lightPurple space-x-4 rounded bg-lightBg dark:bg-darkBg p-3">
            <div className="grid items-center justify-center">
                    <input onChange={(e)=>handleCheck(e)} checked={checked} type="checkbox" id={id} className="peer ring-transparent ring-1 row-start-1 col-start-1 appearance-none checked:bg-primaryPurple checked:ring-0 h-4 w-4 rounded-sm border border-[#828FA33F] outline-none" />
                    
                    <svg className="peer-checked:visible text-white invisible row-start-1 col-start-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/></svg>
            </div>
            <p className="transition-[text-decoration] ease-in grow  peer-checked:line-through peer-checked:text-black/50 peer-checked:dark:text-white/50 dark:text-white">{label}</p>
        </label>
}