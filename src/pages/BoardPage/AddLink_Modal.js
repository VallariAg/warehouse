import { useState } from 'react'
import {  XIcon } from '@heroicons/react/outline'
import useCreateLink from '../../hooks/Links/useCreateLink'


export default function AddPostPopUp({ setIsModalOpen, board_id, setBoardData, boardData }) {

    return (
            <div className="fixed text-sm text-gray-500  flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
                <div className="bg-white p-7 flex flex-col rounded-lg text-black">
                    
                    <div className="grid grid-cols-2 w-full">
                        <button className="justify-self-start w-6 h-6 relative" 
                            onClick={() => setIsModalOpen(false)}>
                                <XIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                        </button>
                    </div>                    
                    
                    <Form 
                        board_id={board_id} 
                        setIsModalOpen={setIsModalOpen}
                        setBoardData={setBoardData}
                        boardData={boardData} />
                
                </div>
            </div>
    )
}

function Form({ board_id, setIsModalOpen, boardData, setBoardData }) {
    const { createLink, mutationError, mutationLoading } = useCreateLink();
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
 
    const onSubmit = () => {
        createLink({ variables: { board_id, title, description, link }}).then(({ data }) => {
            const updatedBoardData = (data.insert_link_data.returning[0].board);
            setBoardData(updatedBoardData);
            setIsModalOpen(false);
        });
    }
    return (
    <>
        <form className="flex flex-col">
            <span className="text-center text-lg">Add Link</span>
            <input 
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-2 bg-white text-center focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}  
            />
            <input  
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="https://example.com"
                value={link}
                onChange={(e) => setLink(e.target.value)} 
            />
        </form>
            {mutationError ? <p className="text-red-700 text-center">Error! Please try again.</p> : ""}
            {mutationLoading ? <p className="text-green-700 text-center">Creating...</p> : ""}
            <div className="mt-3">
                <button className="bg-indigo-500 text-white rounded w-min py-1 justify-self-start px-3"
                        onClick={onSubmit}>
                    Add
                </button>
            </div>
    </>
    )
}
