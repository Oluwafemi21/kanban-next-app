import { useState} from "react";
import BaseInput from "../BaseInput";
import Modal from "../BaseModal";
import LoadingButton from "../LoadingButton";
import { BoardType } from "@/types/Task";

type props = {
    mode:'add' | 'edit'
    onClose:() => void
}


export default function Board({ mode,onClose }: props) {
    const [board, setBoard] = useState<BoardType>(
        {
            name: "",
            columns: [
                {
                    title: "",
                    description:"",
                    status: "",
                    subtasks:[]
                },
                {
                    title: "",
                    description:"",
                    status: "",
                    subtasks:[]
                }
            ]
        }
    )
    
    const [loading,setLoading] = useState(false)


    const bindBoardName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setBoard({
            ...board,
            name: e.target.value
        })
    }

    const bindColumns = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedColumns = [...board.columns];
        updatedColumns[index].title = e.target.value;
        setBoard({...board,columns:updatedColumns})
    }

    const removeColumn = (index: number) => {
        if (index < 1) return;
        let newColumns = board.columns.filter((_, i) => i !== index)
        setBoard({...board,columns:[...newColumns]})
    }

    const addNewColumn = () => {
        const newColumn = {title:"",status:"",description:"",subtasks:[]}
        if (!board.columns[0].title.length || !board.columns[board.columns.length - 1].title.length) return
        setBoard({...board,columns:[...board.columns,newColumn]})
    }

    const createBoard = () => {
        console.log(board)
    } 

    const updateBoard = () => {
        console.log('updating',board)
    }

    const handleBoardSave = () => {
        if (mode === 'add')
            createBoard()
        else
            updateBoard()
        // onClose()
    }
    
    return (
        <Modal id='add_task' onClose={onClose}>
            <h2 className="heading-l">{mode === 'add' ? 'Add New' : 'Edit'} Board</h2>
            <BaseInput label="board name" placeholder="e.g. Web Design" value={board.name} onChange={(e) => bindBoardName(e)}/>
            
            <div className="grid space-y-2">
                <label htmlFor="subtasks" className="capitalize body-m">Board Columns</label>
                <div className="space-y-3 grid">
                {board.columns.map((column,index)=> {
                    return <div key={index} className="flex items-center justify-between gap-3">
                            <BaseInput placeholder='Your column title...' value={column.title} onChange={(e) => bindColumns(e, index)} />
                            <button onClick={()=>removeColumn(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="text-mediumGrey w-5 h-5 hover:text-danger">
                                    <path  d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>     
                            </div>
                })}
                </div>
                <LoadingButton text="+ add new column" variant="secondary" size="small" action={addNewColumn} />
            </div>
            <div className="w-full grid">
                <LoadingButton text={mode === 'add' ? 'create board' : 'save changes'} variant="primary" size="small" loading={loading} action={handleBoardSave} />
            </div>
        </Modal>
    )
}