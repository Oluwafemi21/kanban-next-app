"use client"
import AddColumn from "@/components/Modals/AddColumn";
import TaskColumn from "@/components/TaskColumn";
import { useState } from "react";

export default function Home() {
  const [addColumModal, setColumModalState] = useState(false)
  const [columns, setColumns] = useState([
    {
      title: 'todo',
      tasks: [
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'done'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        }
      ]
    }
  ])


  const testColumns = [
    {
      title: 'todo',
      tasks: [
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'done'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        }
      ]
    },
    {
      title: 'doing',
      tasks: [
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'todo'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'todo'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'todo'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        }
      ]
    },
    {
      title: 'done',
      tasks: [
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'todo'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'todo'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for onboarding flow',
          subtasks: [
            {
              title: 'Design the page',
              status:'todo'
            },
            {
              title: 'Code the page',
              status:'todo'
            },
            {
              title: 'Test the page',
              status:'todo'
            },
          ]
        },
        {
          title: 'Build UI for search',
          subtasks: [
            {
              title: 'Design the search',
              status:'todo'
            },
            {
              title: 'Code the search',
              status:'todo'
            },
            {
              title: 'Test the search',
              status:'todo'
            },
          ]
        }
      ]
    }
  ]
  
  const editBoard = () => {
    setColumModalState(true)
  }

  const closeModal = () => {
    setColumModalState(!addColumModal)
  }

  return (
    <div className="h-full">
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
            <>
              {columns.map((task,index) => {
                return <TaskColumn task={task} key={index}/>
              })}
            </>
          )
        }
        {addColumModal && (
          <AddColumn onClose={closeModal} />
        )}
        </div>
      </div>
  );
}
