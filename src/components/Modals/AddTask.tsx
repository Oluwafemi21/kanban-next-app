import {useState} from "react";
import BaseInput from "../BaseInput";
import Modal from "../BaseModal";
import TextArea from "../BaseTextArea";
import Select from "../BaseSelect";
import LoadingButton from "../LoadingButton";

type props = {
    onClose:() => void
}


export default function AddTask({ onClose }: props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState("todo")
    const [subtasks, setSubtasks] = useState([
        "",
        ""
    ])
    const [loading,setLoading] = useState(false)

    const options = [
        "todo",
        "doing",
        "done"
    ]


    const bindTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const bindDescription = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const bindSubtask = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedSubtasks = [...subtasks];
        updatedSubtasks[index] = e.target.value;
        setSubtasks(updatedSubtasks);
    }

    const removeSubtask = (index: number) => {
        if (index < 1) return;
        setSubtasks((subtasks) => subtasks.filter((_, i) => i !== index))
    }

    const updateStatus = (option: string) => {
        setStatus(option)
    }

    const addNewSubtask = () => {
        setSubtasks([...subtasks,''])
    }

    const createTask = () => {
        let task = {
            title,
            description,
            status,
            subtasks,
        }
    }
    
    return (
        <Modal id='add_task' onClose={onClose}>
            <h2 className="heading-l">Add New Task</h2>
            <BaseInput label="title" placeholder="e.g. Take coffee break" value={title} onChange={(e) => bindTitle(e)}/>
            <TextArea label="description" placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
            value={description} rows={3} onChange={(e) => bindDescription(e)}
            />
            <div className="grid space-y-2">
                <label htmlFor="subtasks" className="capitalize body-m">Subtasks</label>
                <div className="space-y-3 grid">
                {subtasks.map((task,index)=> {
                    return <div key={index} className="flex items-center justify-between gap-3">
                            <BaseInput placeholder={index === 0 ? 'e.g. Make coffee' : index === 1 ? 'e.g. Drink coffee & smile' : 'Your subtask title...'} value={task} onChange={(e) => bindSubtask(e, index)} />
                            <button onClick={()=>removeSubtask(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="text-mediumGrey w-5 h-5 hover:text-danger">
                                    <path  d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>     
                            </div>
                })}
                </div>
                <LoadingButton text="+ add new subtask" variant="secondary" size="small" action={addNewSubtask} />
            </div>
            <Select label="Status" options={options} selected={status} onSelect={(option)=> updateStatus(option)} />
            <div className="w-full grid">
                <LoadingButton text="create task" variant="primary" size="small" loading={loading} action={createTask} />
            </div>
        </Modal>
    )
}