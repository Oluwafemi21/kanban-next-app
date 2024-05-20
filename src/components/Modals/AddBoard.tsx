import {useState} from "react";
import BaseInput from "../BaseInput";
import Modal from "../BaseModal";
import LoadingButton from "../LoadingButton";

type props = {
    onClose:() => void
}


export default function AddBoard({ onClose }: props) {
    const [boardName, setBoardName] = useState("")
    const [columns, setColumns] = useState([
        "",
        ""
    ])
    const [loading,setLoading] = useState(false)


    const bindBoardName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setBoardName(e.target.value)
    }

    const bindColumns = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedColumns = [...columns];
        updatedColumns[index] = e.target.value;
        setColumns(updatedColumns);
    }

    const removeColumn = (index: number) => {
        if (index < 1) return;
        setColumns((columns) => columns.filter((_, i) => i !== index))
    }

    const addNewColumn= () => {
        setColumns([...columns,''])
    }

    const createBoard = () => {
        let board = {
            boardName,
            columns,
        }
    }
    
    return (
        <Modal id='add_task' onClose={onClose}>
            <h2 className="heading-l">Add New Board</h2>
            <BaseInput label="board name" placeholder="e.g. Web Design" value={boardName} onChange={(e) => bindBoardName(e)}/>
            
            <div className="grid space-y-2">
                <label htmlFor="subtasks" className="capitalize body-m">Board Columns</label>
                <div className="space-y-3 grid">
                {columns.map((column,index)=> {
                    return <div key={index} className="flex items-center justify-between gap-3">
                            <BaseInput placeholder='Your column title...' value={column} onChange={(e) => bindColumns(e, index)} />
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
                <LoadingButton text="create board" variant="primary" size="small" loading={loading} action={createBoard} />
            </div>
        </Modal>
    )
}