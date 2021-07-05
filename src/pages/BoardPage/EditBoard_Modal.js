import { useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
import {  XIcon, TrashIcon } from '@heroicons/react/outline'

export default function EditBoardPopUp({ isModalOpen, setIsModalOpen }) {

    return (
            <div className="fixed text-sm text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
                <div className="bg-white p-7 flex flex-col rounded-lg text-black">
                    
                    <div className="grid grid-cols-2 w-full">
                        <button className="justify-self-start w-6 h-6 relative" 
                            onClick={() => setIsModalOpen(!isModalOpen)}>
                                <XIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                        </button>
                    </div>                    
                    
                    <span className="text-center text-lg">Edit Board</span>

                    <Form  />
                
                </div>
            </div>
    )
}

function Form() {
    
    return (
    <>
        <form className="mt-2 flex text-sm flex-row">
            <input  
                className={"shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"} 
                placeholder="Board Title"
            />        
            <button className="bg-indigo-500 text-white rounded mx-1 w-min px-2">Save</button>
        </form>
        <span className="mt-3 text-center">or</span>
        <button className="mt-3 flex flex-cols bg-red-100 text-red-500 hover:text-red-700 text-center justify-center rounded py-2">
            <span>Delete board</span>
            <TrashIcon className="ml-2 h-5 w-5 left-0" />
        </button>
            
    </>
    )
}
