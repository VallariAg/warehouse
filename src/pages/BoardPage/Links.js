import { useState } from "react";
import { PlusCircleIcon, PencilIcon } from "@heroicons/react/outline";
// components
import Card from "./LinkCard";
import EditBoardModal from "./EditBoard_Modal";
import AddPostModal from "./AddLink_Modal";


export default function Links({boardData, isSelfProfile}) {
    const boardID = boardData.board_id;
    const [isEditBoardModalOpen, setisEditBoardModalOpen] = useState(false)
    const [isAddPostModalOpen, setisAddPostModalOpen] = useState(false)
  
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
              <button onClick={() => setisAddPostModalOpen(!isAddPostModalOpen)} className="right-0 float-right">
                  <PlusCircleIcon className="ml-2 h-9 w-9 text-gray-500 hover:text-gray-800" />
              </button>
              { isAddPostModalOpen ?
                  <AddPostModal isModalOpen={isAddPostModalOpen} setIsModalOpen={setisAddPostModalOpen} />
              : ""}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 my-2">
              {
                  boardData.link_data.map((linkData) => 
                            <Card  data={linkData} boardID={boardID} />)
              }
          </div>
        </div>
      )
  }
  
  
  