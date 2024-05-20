import {useState} from "react";
import BaseInput from "../BaseInput";
import Modal from "../BaseModal";
import TextArea from "../BaseTextArea";
import Select from "../BaseSelect";
import LoadingButton from "../LoadingButton";

type props = {
    type:'board' | 'task'
    title:string,
    onClose:() => void
}


export default function AddTask({ type,title,onClose }: props) {
    const [loading,setLoading] = useState(false)

    const handleDelete = () => {
        console.log('deleted')
        onClose()
    }
    

    
    
    return (
        <Modal id='add_task' onClose={onClose}>
            <h2 className="heading-l">Delete this {type }?</h2>
            <p>Are you sure you want to delete the {`'${title}'`} {type}? This action will remove all columns and tasks and cannot be reversed.</p>
            <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2">
                <LoadingButton text="delete" variant="danger" size="small" loading={loading} action={handleDelete} />
                <LoadingButton text="cancel" variant="secondary" size="small" action={onClose} />
            </div>
        </Modal>
    )
}