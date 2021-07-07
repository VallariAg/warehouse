import { useState } from 'react'
import {  XIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import useUpdateLink from '../../hooks/Links/useUpdateLink'

export default function PostPopUp({ setIsModalOpen, linkData, setLinkData }) {
    const [isEditMode, setisEditMode] = useState(false)

    return (
            <div className="fixed text-gray-500  flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
                <div className="bg-white p-7 flex flex-col rounded-lg text-black">
                    
                    <div className="grid grid-cols-2 w-full">
                        <button className="justify-self-start w-6 h-6 relative" 
                            onClick={() => setIsModalOpen(false)}>
                                <XIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                        </button>
                        {isEditMode ? "" : 
                        <button className="justify-self-end w-6 h-6 relative" 
                            onClick={() => setisEditMode(!isEditMode)}> 
                                <PencilIcon className="ml-2 h-5 w-5 mx-2 left-0 text-gray-700 hover:text-black" />
                        </button>}
                    </div>                    
                    
                    <Form 
                        linkData={linkData} 
                        setLinkData={setLinkData} 
                        isEditMode={isEditMode}
                        setIsModalOpen={setIsModalOpen} />
                
                </div>
            </div>
    )
}

function Form({ isEditMode, linkData, setLinkData, setIsModalOpen }) {
    const [link, setLink] = useState(linkData.link);
    const [title, setTitle] = useState(linkData.title);
    const [description, setDescription] = useState(linkData.description);
    const updateLink = useUpdateLink()

    const onSubmit = () => {
        const updatedLinkData = {
            link,
            title,
            description,
            id: linkData.id
        }
        updateLink({variables: { id: linkData.id, title, description, link} });
        setLinkData(updatedLinkData);
        setIsModalOpen(false);
    }
    return (
    <>
        <form className="flex flex-col">
            <input disabled={!isEditMode} 
                className={(isEditMode ? "shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 ": "text-gray-800 text-lg p-1 ") + "mt-2 bg-white text-center focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"} 
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea disabled={!isEditMode} 
                className={(isEditMode ? "shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 ": "text-gray-600 px-2 ") + "mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"} 
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
            />
            <input disabled={!isEditMode} 
                className={(isEditMode ? "shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 ": "text-gray-600 p-2 ") + "mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"} 
                placeholder="https://example.com"
                value={link}
                onChange={(e) => setLink(e.target.value)} 
            />
           
        </form>
        { isEditMode ? <>
            <div className="mt-3 grid grid-cols-2">
                <button className="bg-indigo-500 text-white rounded w-min py-1 justify-self-start px-3"
                        onClick={onSubmit}> Save </button>
                <button className="w-6 h-6 rounded w-min py-1 justify-self-end px-3">
                    <TrashIcon className="ml-2 h-5 w-5 left-0 text-red-500 hover:text-red-700" />
                </button>
            </div>
        </> : ""}
    </>
    )
}
