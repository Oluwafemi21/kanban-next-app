import BoardIcon from '@/components/icons/BoardIcon'

interface propType {
    text: string,
    isActive: boolean,
    changeColumn:() => void
}

export default function ColumnNav({ text, isActive, changeColumn }: propType) {
    const condition = isActive ? "bg-primaryPurple text-white" : "hover:bg-white hover:text-primaryPurple"
    return (
        <button onClick={() => changeColumn()} className={`w-full text-mediumGrey pl-6 py-4 rounded-r-full flex items-center gap-4 ${condition}`} type='button'>
            <BoardIcon />
            <span className="heading-m capitalize">{ text }</span>
        </button>
    )
}