"use client"
import AddColumn from "@/components/Modals/AddColumn";
import TaskColumn from "@/components/TaskColumn";
import { useState } from "react";

export default function Home() {
  const [addColumModal, setColumModalState] = useState(false)
  const [columns, setColumns] = useState([
    {
      name: 'todo',
      tasks: [
        {
          title: 'Build UI for onboarding flow',
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

  const closeModal = () => {
    setColumModalState(!addColumModal)
  }

  return (
    <div className="h-full w-full">
        <div className="p-4 md:p-6">
          {!columns.length && (
              <>
                <div className="flex flex-col items-center justify-center max-w-xs md:max-w-[459px] lg:max-w-none text-center mx-auto gap-5 min-h-full space-y-6">
                    <p className="text-mediumGrey heading-l">This board is empty. Create a new column to get started.</p>
                    <button onClick={editBoard} className="heading-m btn-primary py-3.5 px-4">+ Add New Column</button>
                </div>
              </>
        )}
        {
          columns.length && (
            <div className="flex gap-6">
              {columns.map((column,index) => {
                return <TaskColumn task={column} key={index} />
              })}
              <section className="relative mt-10 new-column w-[280px] grid place-items-center min-h-[50vh] rounded-lg">
                <button className="absolute inset-0">
                  <p className="heading-xl text-mediumGrey">+ New Column</p>
                </button>
              </section>
            </div>
          )
        }
        {addColumModal && (
          <AddColumn onClose={closeModal} />
        )}
        </div>
      </div>
  );
}
