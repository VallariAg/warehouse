import { useState } from "react";
import { PlusCircleIcon, PencilIcon } from "@heroicons/react/outline";
import Card from "./PostCard";
import EditBoardModal from "./EditBoardPopUp"

export default function BoardPage() {
  const [isEditBoardModalOpen, setisEditBoardModalOpen] = useState(false)

  return (
      <div className="">
        <h1 className="text-4xl text-gray-700 my-5 mx-3 lg:my-8 md:my-5 sm:my-5">
            Board Title
            <button onClick={() => setisEditBoardModalOpen(!isEditBoardModalOpen)} className="mx-3">
                <PencilIcon className="ml-2 h-5 w-5 text-gray-500 hover:text-gray-800" /> 
            </button>
            { isEditBoardModalOpen ? 
            <EditBoardModal isModalOpen={isEditBoardModalOpen} setIsModalOpen={setisEditBoardModalOpen} />
            : "" }
            <button className="right-0 float-right">
                <PlusCircleIcon className="ml-2 h-9 w-9 text-gray-500 hover:text-gray-800" />
            </button>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 my-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    )
}


