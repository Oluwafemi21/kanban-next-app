"use client"
import AddColumn from "@/components/Modals/AddColumn";
import { useState } from "react";

export default function Home() {
  const [addColumModal, setColumModalState] = useState(false)
  const [columns, setColumns] = useState([])
  
  const editBoard = () => {
    setColumModalState(true)
  }

  const closeModal = () => {
    setColumModalState(!addColumModal)
  }

  return (
      <div className="p-4 md:p-6 h-full">
        {!columns.length && (
            <>
              <div className="flex flex-col items-center justify-center max-w-xs md:max-w-[459px] lg:max-w-none text-center mx-auto gap-5 min-h-full space-y-6">
                  <p className="text-mediumGrey heading-l">This board is empty. Create a new column to get started.</p>
                  <button onClick={editBoard} className="heading-m btn btn-primary py-3.5 px-4">+Add New Column</button>
              </div>
            </>
      )}
      {addColumModal && (
        <AddColumn onClose={closeModal} />
      )}
      </div>
  );
}
