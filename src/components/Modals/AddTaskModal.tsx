import {useState} from "react";
import BaseInput from "../BaseInput";
import Modal from "../BaseModal";
import TextArea from "../BaseTextArea";
import Select from "../BaseSelect";

type props = {
    onClose:() => void
}

export default function AddTask({ onClose }: props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState("todo")

    const options = [
        "todo",
        "doing",
        "done"
    ]

    const bindTtile = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const bindDescription = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const updateStatus = (option: string) => {
        setStatus(option)
    }
    
    return (
        <Modal id='add_task' onClose={onClose}>
            <h2 className="heading-l">Add New Task</h2>
            <BaseInput label="title" placeholder="e.g Take coffee break" value={title} onChange={(e) => bindTtile(e)}/>
            <TextArea label="description" placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
            value={description} rows={3} onChange={(e) => bindDescription(e)}
            />
            <div className="grid space-y-2">
                <label htmlFor="subtasks" className="capitalize body-m">Subtasks</label>
                
            </div>
            <Select label="Status" options={options} selected={status} onSelect={(option)=> updateStatus(option)} />
            <p>Title: { title }</p>
            <p>Description: {description}</p>
            <p>Status: {status}</p>
        </Modal>
    )
}