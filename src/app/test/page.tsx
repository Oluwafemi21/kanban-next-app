"use client"
import BaseInput from "@/components/BaseInput";
import LoadingButton from "@/components/LoadingButton";
import { BoardType } from "@/types/Task";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup"


const boardSchema = Yup.object().shape({
    name: Yup.string().required("Can't be empty"),
    columns:Yup.array().of(
      Yup.object().shape({
          title: Yup.string().required("Can't be empty"),
          description: Yup.string(),
          status: Yup.string(),
          subtasks: Yup.array()
      })
    )
});
  

export default function Test() {
    let initialValues:BoardType = {
        name: "",
        columns: [
            {
                title: "",
                status: "",
                description: "",
                subtasks: [
                    {
                        title: "",
                        isCompleted:false
                    }
                ]
            }
        ]
    }

    const removeColumn = (index: number) => {
        if (index < 1) return;
        let newColumns = initialValues.columns.filter((_, i) => i !== index)
        initialValues = {...initialValues, columns:[...newColumns]}
    }
    
    const handleSubmit = (values: BoardType) => {
        setTimeout(() => {
          console.log(values)  
        },500)
    }


    const columnObject = {
        title: "",
        status: "",
        description: "",
        subtasks: [
            {
                title: "",
                isCompleted:false
            }
        ]
    }

    return (
        <div className="grid grid-cols-2 gap-5">
                <div className="grid h-full p-5 bg-white/70 m-5">
                <h2 className="heading-l mb-4">Add New Board</h2>
                <Formik initialValues={initialValues} validationSchema={boardSchema} onSubmit={(values) => handleSubmit(values)}>
                    {({values}) => (
                        <Form className="space-y-4 max-w-lg w-full">
                            <BaseInput name="name" label="board name" placeholder="e.g. Web Design" />
                            <div className="space-y-2">
                            <label htmlFor="columns" className="capitalize body-m">Board Columns</label>
                            <FieldArray name="columns" render={arrayHelpers => (
                                <div className="space-y-3 grid">
                                    {values.columns.map((column, index) => (
                                        <div key={index} className="flex items-center justify-between gap-3">
                                            <BaseInput name={`columns[${index}].title`} placeholder={`Your column title... ${index}`} />
                                        <button onClick={()=>arrayHelpers.remove(index)} type="button" disabled={index === 0 || index === 1 ? true : false}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="cursor-pointer text-mediumGrey w-5 h-5 hover:text-danger">
                                                <path  d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>     
                                        </div>
                                    ))}
                                    <LoadingButton type="button" variant="secondary" text="+ Add New Column" size="small" action={()=> arrayHelpers.push(columnObject)}/>
                                </div>
                                )} />
                        </div>

                            <div className="w-full grid">
                                <LoadingButton type="submit" variant="primary" size="small" text="create board" />
                            </div>
                        </Form>
                    ) }
                </Formik>            
            </div>
            <div className="grid h-full p-5 bg-white/70 m-5">
                <h2 className="heading-l mb-4">Add New Board</h2>
                
                 <pre>{initialValues.name}</pre>
            </div>
        </div>
  );
}