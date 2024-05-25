"use client"
import { useState } from "react";
import {Task} from '@/types/Task'
import TaskColumn from "@/components/TaskColumn";
import SubTasks from "@/components/Modals/SubTasks";
import AddTask from "@/components/Modals/AddTask";
import Delete from "@/components/Modals/Delete";
import Board from "@/components/Modals/Board";


export default function Home() {
  const [addColumModal, setColumModalState] = useState(false)
  const [viewSubtaskModal,setSubtaskModal] = useState(false)
  const [editTask,setEditTask] = useState(false)
  const [deleteTask, setDeleteTask] = useState(false)
  const [currentSubtask, setSubTask] = useState<Task>({
    title: "",
    description:"",
    status: "",
    subtasks:[]
  })
  const [columns, setColumns] = useState([
    {
      name: 'todo',
      tasks: [
        {
          title: 'Build UI for onboarding flow',
          description:"",
          status: "todo",
          subtasks: [
            {
              title: 'Design the page',
              isCompleted:false,
            },
            {
              title: 'Code the page',
              isCompleted:false,
            },
            {
              title: 'Test the page',
              isCompleted:false,
            },
          ]
        },
        {
          title: 'Build UI for onboarding flow',
          description:"",
          status: "todo",
          subtasks: [
            {
              title: 'Design the page',
              isCompleted:false,
            },
            {
              title: 'Code the page',
              isCompleted:false,
            },
            {
              title: 'Test the page',
              isCompleted:false,
            },
          ]
        },
        {
          title: 'Build UI for onboarding flow',
          description:"",
          status:"todo",
          subtasks: [
            {
              title: 'Design the page',
              isCompleted:false,
            },
            {
              title: 'Code the page',
              isCompleted:false,
            },
            {
              title: 'Test the page',
              isCompleted:false,
            },
          ]
        },
        {
          title: 'Build UI for onboarding flow',
          description:"",
          status:"todo",
          subtasks: [
            {
              title: 'Design the page',
              isCompleted:false,
            },
            {
              title: 'Code the page',
              isCompleted:false,
            },
            {
              title: 'Test the page',
              isCompleted:false,
            },
          ]
        },
        {
          title: 'Build UI for search',
          description:"",
          status:"todo",
          subtasks: [
            {
              title: 'Design the search',
              isCompleted:true,
            },
            {
              title: 'Code the search',
              isCompleted:false
            },
            {
              title: 'Test the search',
              isCompleted:false
            },
          ]
        },
        {
          title: 'Build UI for search',
          description:"",
          status:"todo",
          subtasks: [
            {
              title: 'Design the search',
              isCompleted:true,
            },
            {
              title: 'Code the search',
              isCompleted:false
            },
            {
              title: 'Test the search',
              isCompleted:false
            },
          ]
        }
      ]
    },
    {
      name: 'doing',
      tasks: [
        {
          title: 'Build UI for onboarding flow',
          description:"",
          status:'doing',
          subtasks: [
            {
              title: 'Design the page',
              isCompleted:false
            },
            {
              title: 'Code the page',
              isCompleted:false
            },
            {
              title: 'Test the page',
              isCompleted:false
            },
          ]
        },
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          title: 'Do this',
          description:"",
          status:"done",
          subtasks: [
            {
              title: 'Design the page',
              isCompleted:false,
            },
            {
              title: 'Code the page',
              isCompleted:false,
            },
            {
              title: 'Test the page',
              isCompleted:false,
            },
          ]
        } 
      ]
    },
    {
      name: 'about-to',
      tasks: [
        {
          title: 'Do this',
          description:"",
          status:"done",
          subtasks: [
            {
              title: 'Design the page',
              isCompleted:false,
            },
            {
              title: 'Code the page',
              isCompleted:false,
            },
            {
              title: 'Test the page',
              isCompleted:false,
            },
          ]
        } 
      ]
    }
  ])

  
  const editBoard = () => {
    setColumModalState(true)
  }


  const toggleModal = (modal:string) => {
    if(modal === 'view_subtask') setSubtaskModal(!viewSubtaskModal)
    if(modal === 'add_task') setColumModalState(!addColumModal)
    if(modal === 'edit_task') setEditTask(!editTask)
    if(modal === 'delete_task') setDeleteTask(!deleteTask)
  }

  const doThis = (task: Task) => {
    setSubTask(task)
    console.log(task)
    setSubtaskModal(true)
  }


  return (
   <>
        {
          columns.length && (
            <div className="max-h-[calc(100vh-80px)] overflow-scroll cards gap-6 snap-x p-4 md:p-6 w-full">
              {columns.map((column,index) => {
                return <TaskColumn task={column} key={index} openTask={(task)=>doThis(task)}/>
              })}
              <section className="box-content mt-10 sticky new-column min-w-[280px] place-items-center rounded-lg">
                <button className="h-full w-[280px]" onClick={editBoard}>
                  <p className="heading-xl text-mediumGrey">+ New Column</p>
                </button>
              </section>
            </div>
          )
        }
             
        {!columns.length && (
              <div className="p-4 md:p-6">
                <div className="flex flex-col items-center justify-center max-w-xs md:max-w-[459px] lg:max-w-none text-center mx-auto gap-5 min-h-full space-y-6">
                    <p className="text-mediumGrey heading-l">This board is empty. Create a new column to get started.</p>
                    <button onClick={editBoard} className="heading-m btn-primary py-3.5 px-4">+ Add New Column</button>
                </div>
              </div>
        )}

        {addColumModal && (
          <Board mode="edit" onClose={()=>toggleModal('add_task')} />
        )}
       {viewSubtaskModal && (
          <SubTasks onClose={()=>toggleModal('view_subtask')} changeModal={(modal:string)=>toggleModal(modal)} task={currentSubtask} />
      )}
        {editTask && (
              <AddTask onClose={() => toggleModal('edit_task')} mode="edit" toEdit={currentSubtask}/>
        )}
        {deleteTask && (
          <Delete type="task" title={currentSubtask.title} onClose={()=>toggleModal('delete_task')} />
        )}
        
      </>
  );
}
