import { useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
import {  XIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'

export default function AddPostPopUp({ isModalOpen, setIsModalOpen }) {

    return (
            <div className="fixed text-sm text-gray-500  flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
                <div className="bg-white p-7 flex flex-col rounded-lg text-black">
                    
                    <div className="grid grid-cols-2 w-full">
                        <button className="justify-self-start w-6 h-6 relative" 
                            onClick={() => setIsModalOpen(!isModalOpen)}>
                                <XIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                        </button>
                    </div>                    
                    
                    <Form />
                
                </div>
            </div>
    )
}

function Form() {
    
    return (
    <>
        <form className="flex flex-col">
            <span className="text-center text-lg">Add Link</span>
            <input 
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-2 bg-white text-center focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="Title"
            />
            <textarea 
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                // className={(isEditMode ? "shadow-gray-100 shadow-md bg-gray-50 text-gray-800 ": "text-gray-600 ") + "my-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded p-2"} 
                placeholder="Description"
                // value="Top 10 Cars rated" 
            />
            <input  
                className="shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="https://example.com"
                // value="https://cars.com" 
            />
           
        </form>
            <div className="mt-3">
                <button className="bg-indigo-500 text-white rounded w-min py-1 justify-self-start px-3">Add</button>
            </div>
    </>
    )
}
