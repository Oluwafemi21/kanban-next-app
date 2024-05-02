"use client"
import { useState } from "react";

export default function Home() {
  const [columns,setColumns] = useState([])
  return (
      <div className="px-4 md:px-6 h-full">
        {!columns.length && (
            <>
              <div className="flex flex-col items-center justify-center max-w-xs md:max-w-[459px] lg:max-w-none text-center mx-auto gap-5 min-h-full space-y-6">
                  <p className="text-mediumGrey heading-l">This board is empty. Create a new column to get started.</p>
                  <button className="heading-m btn btn-primary py-3.5 px-4">+Add New Column</button>
              </div>
            </>
          )}
      </div>
  );
}
