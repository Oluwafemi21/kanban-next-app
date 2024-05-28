import {useEffect, useState} from "react";
import BaseInput from "../BaseInput";
import Modal from "../BaseModal";
import TextArea from "../BaseTextArea";
import Select from "../BaseSelect";
import LoadingButton from "../LoadingButton";
import { Task } from "@/types/Task";
import * as Yup from 'yup';
import { Form, Formik } from "formik";

type props = {
    onClose: () => void
    mode: "edit" | "add"
    toEdit?:Task | any
}

const taskSchema = Yup.object().shape({
    title: Yup.string().required("Can't be empty"),
    status: Yup.string().required("Can't be empty"),
    subtasks:Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Can't be empty"),
        isCompleted: Yup.boolean().default(false),
      })
    )
  });


export default function AddTask({ onClose, mode, toEdit }: props) {
    const [task, setTask] = useState(
        {
            title: "",
            description:"",
            status: "",
            subtasks: [
                {
                    title: "",
                    isCompleted:false
                },
                {
                    title: "",
                    isCompleted:false
                }
            ]
        }
    )
   
    const [loading,setLoading] = useState(false)

    const options = [
        "todo",
        "doing",
        "done"
    ]

    

    const bindTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task,title:e.target.value})
    }

    const bindDescription = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask({...task,description:e.target.value})
    }

    const bindSubtask = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedSubtasks = [...task.subtasks];
        updatedSubtasks[index].title = e.target.value;
        setTask({...task,subtasks:updatedSubtasks});
    }

    const removeSubtask = (index: number) => {
        if (index < 1) return;
        const tasks = task.subtasks.filter((_, i) => i !== index)
        setTask({...task,subtasks:[...tasks]})
    }

    const updateStatus = (option: string) => {
        setTask({...task,status:option})
    }

    const addNewSubtask = () => {
        const subTask = {title:"",isCompleted:false}
        if(!task.subtasks[0].title.length || !task.subtasks[task.subtasks.length - 1].title.length) return
        setTask({ ...task, subtasks: [...task.subtasks, subTask] })
    }

    const createTask = () => {
        // console.log(task)
        onClose()
    }

    const handleSubmit = (values: Task) => {
        setLoading(true)
        setTimeout(() => {
            console.log(values)  
            setLoading(false)
        },500)
    }
    useEffect(() => { 
        if (mode === 'edit') {
            setTask(toEdit)
        } 
    },[toEdit])
    
    return (
        <Modal id='add_task' onClose={onClose}>
            <h2 className="heading-l">{ mode === 'add' ? "Add New Task" : "Edit Task" }</h2>
            <Formik initialValues={task} validationSchema={taskSchema} onSubmit={(values) => handleSubmit(values)} enableReinitialize>
                <Form className="space-y-4">
                    <BaseInput name="title" label="title" placeholder="e.g. Take coffee break" />
                    <TextArea label="description" placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                    value={task.description} rows={3} onChange={(e) => bindDescription(e)}
                    />
                    <div className="grid space-y-2">
                        <label htmlFor="subtasks" className="capitalize body-m">Subtasks</label>
                        <div className="space-y-3 grid">
                        {task.subtasks.map((task,index)=> {
                            return <div key={index} className="flex items-center justify-between gap-3">
                                    <BaseInput name={`subtasks[${index}].title`} placeholder={index === 0 ? 'e.g. Make coffee' : index === 1 ? 'e.g. Drink coffee & smile' : 'Your subtask title...'} />
                                    <button onClick={()=>removeSubtask(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="text-mediumGrey w-5 h-5 hover:text-danger">
                                            <path  d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                </button> 
                            </div>
                        })}
                        </div>
                        <LoadingButton text="+ add new subtask" variant="secondary" size="small" action={addNewSubtask} type="button"/>
                    </div>
                    <Select label="Status" options={options} selected={task.status} onSelect={(option)=> updateStatus(option)} />
                    <div className="w-full grid">
                        <LoadingButton text="create task" variant="primary" size="small" loading={loading} type="submit" />
                    </div>
                </Form>
            </Formik>
            <div>
                <p>Title: {task.title}</p>
                {task.subtasks.map((t,index) => {
                    return <p key={ index }>{t.title} - {t.isCompleted}</p>
                })}
            </div>
        </Modal>
    )
}