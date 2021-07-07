import { useState} from "react";
import Card from "./BoardCard"
import CreateBoardModal from "./CreateBoard_Modal";
import { PlusCircleIcon, ViewGridIcon, ViewGridAddIcon } from "@heroicons/react/outline";


export default function Boards({boardsData, username, isSelfProfile}) {
    const [boards, setBoards] = useState(boardsData)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const AddBoardModal = (<CreateBoardModal 
                                setIsModalOpen={setIsModalOpen} 
                                boards={boards}
                                setBoards={setBoards}
                                username={username} />)
    if (boards.length === 0) {
      return (
      <div className="flex flex-col text-center my-20 justify-items-center content-center">
        <div className="flex mb-2 justify-center">
            <ViewGridIcon className="text-gray-400 h-16 w-16 text-center" />
        </div>
        <span className="text-gray-700 mb-5">No boards created yet!</span>
        { isSelfProfile ? 
            <div className="my-1">
                <button onClick={() => setIsModalOpen(!isModalOpen)} 
                    className="bg-indigo-50 text-black rounded w-32 py-1 justify-self-center px-3">
                        Add a board
                </button> 
                { isModalOpen ? AddBoardModal : ""}  
            </div>  : ""}
        </div>); 
    }

    return(
    <div className="flex flex-col w-full">
        { isSelfProfile ? 
            <div>
                <button onClick={() => setIsModalOpen(!isModalOpen)}  className="mx-1 mb-1 float-right w-min align-self-end">
                    <ViewGridAddIcon className="ml-1 h-7 w-7 text-gray-500 hover:text-gray-800" />
                </button>
                <button className="mx-1 mb-1 float-right w-min align-self-end">
                    <PlusCircleIcon className="ml-1 h-7 w-7 text-gray-500 hover:text-gray-800" />
                </button>
            </div> 
        : ""}
        { isModalOpen ? AddBoardModal : ""}  
        <div class=" grid lg:grid-cols-4 md:grid-cols-3 gap-2">
          {
            boards.map((board) => {
              return <Card board={board} username={username} />
            })
          }
        </div>
    </div>
    )
  }
