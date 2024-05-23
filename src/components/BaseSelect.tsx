import {useState} from "react"

type props = {
    options: string[],
    selected: string,
    label?: string,
    onSelect: (option:string) => void
}

export default function Select({ options, label, selected, onSelect}: props) {
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const handleKeyPress = (event:React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault();
        const { key } = event;
        const openKeys = ['Escape', 'Enter', ' '];
        if(openKeys.includes(key) && isDropdownOpen) setDropdownOpen(false)
    }
    
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }

    const handleSelect = (option: string) => {
        selected = option
        onSelect(option)
        toggleDropdown()
    }

    return (
        <div className="grid space-y-2" onKeyDown={(e) => handleKeyPress(e)}>
            {label && (
                <label htmlFor="select" className="capitalize body-m">
                    {label}
                </label>
            )}
            <div className="relative group" onMouseLeave={()=>setDropdownOpen(false)}>
                <button onClick={toggleDropdown} role="combobox" id="select" value="Select" aria-controls="listbox" aria-haspopup="listbox" aria-expanded="false" className="peer capitalize border border-[#828FA340] px-4 py-2 rounded-md body-l">
                    {selected }
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-primaryPurple">
                        <path  d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                <ul role="listbox" id="listbox" className={`drop-shadow bg-white dark:bg-darkBg transition-[display] duration-300 ease-in-out rounded-md absolute z-20 text-white right-0 left-0 top-12 max-h-36 overflow-y-auto snap-mandatory snap-y will-change-auto px-4 ${isDropdownOpen ? 'block will-change-transform': 'hidden' }`}>

                    {options.map((option,index) => {
                        return <li key={index} onClick={()=>handleSelect(option)} className="body-l capitalize w-full cursor-pointer py-2 snap-start text-mediumGrey dark:hover:text-white" role="option" aria-selected={selected === option}>{option}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}