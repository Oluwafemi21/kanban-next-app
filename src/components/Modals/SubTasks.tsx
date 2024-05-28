import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Modal from "../BaseModal";
import moreInfo from "@/images/moreInfo.svg"
import Select from "../BaseSelect";
import { Task } from "@/types/Task";
import Checkbox from "../BaseCheckBox";

type props = {
    onClose: () => void,
    task: Task
    changeModal:(action:string)=>void
}

export default function SubTasks({ task, onClose, changeModal }: props) {
    const [subtask,setTask] = useState(task)
    const [dropdown, setDropdown] = useState(false)
    const [options, setOptions] = useState(['todo', 'done', 'doing'])
    const [status,setStatus] = useState(task ? task.status : "")
    
    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    const handleSelect = (action:string) => {
        if(action === 'edit') changeModal('edit_task')
        if (action === 'delete') changeModal('delete_task')
        onClose()
    }
    
    const completedTaskCount = (tasks: any[]) => {
        let count = 0
        subtask.subtasks.forEach((task) => {
            if(task.isCompleted) count++
        })
        return count
    }

    const updateStatus = (status: string) => {
        setStatus(status)
    }

    const toggleStatus = (e: ChangeEvent<HTMLInputElement>,index: number) => {
        setTask((subtask) => {
            let updatedTask = [...subtask.subtasks]
            updatedTask[index].isCompleted = e.target.checked
            return {...task,subtasks:[...updatedTask]}
        })
    }


    return (
        <>
            <Modal id="toggle_subtask" onClose={onClose} >
            <div className="flex items-center">
                <h2 className="heading-l grow capitalize">{subtask.title}</h2>
                <div className="group relative">
                    <button onClick={toggleDropdown} role="combobox" aria-controls="listbox2" aria-haspopup="listbox" tabIndex={0} aria-expanded="false">
                        <Image src={moreInfo} alt="More info button" />
                    </button>
                    <ul role="listbox" id="listbox2" className={`drop-shadow bg-white dark:bg-darkBg transition-[top,display] duration-300 ease-in-out rounded-md fixed z-20 text-white space-y-4 w-[192px] max-h-36 will-change-auto p-4 ${dropdown ? 'block will-change-transform': 'hidden' }`}>
                        <li role="listitem" onClick={()=>handleSelect('edit')} className="body-l capitalize w-full cursor-pointer snap-start text-mediumGrey hover:text-primaryPurple dark:hover:text-white">Edit Task</li>
                        <li role="listitem" onClick={() => handleSelect('delete')} className="text-danger hover:text-lightRed body-l capitalize w-full cursor-pointer">
                            Delete Task
                        </li>
                    </ul>
                </div>
            </div>
            {task?.description && <p className="my-6 text-mediumGrey body-l dark:text-white">
                description goes here
            </p>}
        
            <div className="grid space-y-2">
                <p className="body-m text-mediumGrey dark:text-white">Subtasks ({completedTaskCount(subtask.subtasks) } of {subtask.subtasks.length})</p>
                <div className="space-y-2 grid">
                    {subtask.subtasks.map(({title,isCompleted},index) => {
                            return (
                                <Checkbox key={index} label={title} id={'checkbox' + index} checked={isCompleted} handleCheck={(e)=>toggleStatus(e,index)}/>
                         )
                        })}                  
                </div>
            </div>
            <Select label="Current Status" options={options} selected={status} onSelect={(option)=> updateStatus(option)} />
            </Modal>  
        </>
    )
}