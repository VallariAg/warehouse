import { useState } from 'react';
import {  XIcon } from '@heroicons/react/outline';
import { useParams } from "react-router-dom";
import useCreateBoard from '../../hooks/Board/useCreateBoard';


export default function CreateBoardModal({ setIsModalOpen, boards, setBoards, username }) {

    return (
            <div className="fixed text-sm text-gray-500  flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
                <div className="bg-white p-7 flex flex-col rounded-lg text-black">
                    
                    <div className="grid grid-cols-2 w-full">
                        <button className="justify-self-start w-6 h-6 relative" 
                            onClick={() => setIsModalOpen(false)}>
                                <XIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                        </button>
                    </div>                    
                    
                    <Form boards={boards} username={username} 
                          setBoards={setBoards} setIsModalOpen={setIsModalOpen} />
                
                </div>
            </div>
    )
}

function Form({boards, setBoards, setIsModalOpen, username}) {
    console.log(process.env.REACT_APP_BOARD_DEFAULT_IMG)
    const [boardName, setboardName] = useState("")
    const [boardImg, setboardImg] = useState("")
    const { addBoard, addBoardWithImg } = useCreateBoard();
    const defaultImg = process.env.REACT_APP_BOARD_DEFAULT_IMG;

    const submitForm = () => {
        const newBoard = {  
            username,
            board_name: boardName,
            board_img: boardImg || defaultImg,
            link_data_aggregate: { aggregate: { count: 0 } } 
        };

        if (!boardImg || boardImg === "") {
            addBoard({variables: {username, board_name: boardName}})
        } 
        else {
            addBoardWithImg({ variables: {username, board_name: boardName, board_img: boardImg} })
        } 

        setBoards(boards.concat(newBoard));
        setIsModalOpen(false);
    }

    return (
    <>
        <form className="flex flex-col">
            <span className="text-center text-lg">Create a board</span>
            <div className="flex justify-center">
                <img className="w-48 rounded-md" src={boardImg || defaultImg}></img>
            </div>
            <input 
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-2 bg-white text-center focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="Board Name"
                value={boardName}
                onChange={(e) => setboardName(e.target.value)}
            />
            <input  
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="Board image URL"
                value={boardImg}
                onChange={(e) => setboardImg(e.target.value)}
            />
           
        </form>
            <div className="mt-3">
                <button className="bg-indigo-500 text-white rounded w-min py-1 justify-self-start px-3"
                        onClick={submitForm}>
                            Add
                </button>
            </div>
    </>
    )
}
