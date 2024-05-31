import { useEffect, useState } from "react";
import BaseInput from "../BaseInput";
import Modal from "../BaseModal";
import TextArea from "../BaseTextArea";
import LoadingButton from "../LoadingButton";
import { Task } from "@/types/Task";
import * as Yup from "yup";
import { FieldArray, Form, Formik } from "formik";
import Select from "../BaseSelect";

type props = {
    onClose: () => void;
    mode: "edit" | "add";
    toEdit?: Task | any;
};

const taskSchema = Yup.object().shape({
    title: Yup.string().required("Can't be empty"),
    status: Yup.string().required("Can't be empty"),
    subtasks: Yup.array().of(
        Yup.object().shape({
            title: Yup.string().required("Can't be empty"),
            isCompleted: Yup.boolean().default(false),
        })
    ),
});

export default function AddTask({ onClose, mode, toEdit }: props) {
    
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "todo",
        subtasks: [
            {
                title: "",
                isCompleted: false,
            },
            {
                title: "",
                isCompleted: false,
            },
        ],
    });

    const [loading, setLoading] = useState(false);

    const options = ["todo", "doing", "done"];

    const handleSubmit = (values: Task) => {
        setLoading(true);
        setTimeout(() => {
            console.log(values);
            setLoading(false);
        }, 500);
    };
    
    useEffect(() => {
        if (mode === "edit") {
            setTask(toEdit);
        }
    }, [mode, toEdit]);

    return (
        <Modal id="add_task" onClose={onClose}>
            <h2 className="heading-l">
                {mode === "add" ? "Add New Task" : "Edit Task"}
            </h2>
            <Formik
                initialValues={task}
                validationSchema={taskSchema}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize
                validateOnChange
            >
                {({ values,setFieldValue }) => (
                    <>
                         <Form className="space-y-4 max-h-[70vh] overflow-y-scroll">
                        <BaseInput
                            name="title"
                            label="title"
                            placeholder="e.g. Take coffee break"
                        />
                        <TextArea
                            name="description"
                            label="description"
                            placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                            rows={3}
                        />
                        <div className="grid space-y-2">
                            <label
                                htmlFor="subtasks"
                                className="capitalize body-m"
                            >
                                Subtasks
                            </label>
                            <FieldArray
                                name="subtasks"
                                render={(arrayHelpers) => (
                                    <div className="space-y-3 grid">
                                        {values.subtasks.map((task, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between gap-3"
                                                >
                                                    <BaseInput
                                                        name={`subtasks[${index}].title`}
                                                        placeholder={
                                                            index === 0
                                                                ? "e.g. Make coffee"
                                                                : index === 1
                                                                ? "e.g. Drink coffee & smile"
                                                                : "Your subtask title..."
                                                        }
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            arrayHelpers.remove(
                                                                index
                                                            )
                                                        }
                                                        type="button"
                                                        disabled={
                                                            index === 0 ||
                                                            index === 1
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="3"
                                                            stroke="currentColor"
                                                            className="text-mediumGrey w-5 h-5 hover:text-danger"
                                                        >
                                                            <path d="M6 18 18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            );
                                        })}
                                        <LoadingButton
                                            type="button"
                                            text="+ add new subtask"
                                            variant="secondary"
                                            size="small"
                                            action={()=>arrayHelpers.push({
                                                title: "",
                                                isCompleted: false,
                                            })}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        
                            <Select label="Status" options={options} selected={values.status} onSelect={(option) => setFieldValue('status', option)} />
                            
                        <div className="w-full grid">
                            <LoadingButton
                                text="create task"
                                variant="primary"
                                size="small"
                                loading={loading}
                                type="submit"
                            />
                        </div>
                    </Form>
                    </>
                )}
            </Formik>
        </Modal>
    );
}
