import { useState } from "react"
import {LinkIcon, ExternalLinkIcon, DocumentDuplicateIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Modal from "./CardView&Edit_Modal";


export default function PostCard() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const bodyText = "About a project something something something";
    let postImg = "https://vallariag.github.io/Music/images/plane.jpg"

    return (
    <>
        <button onClick={() => setIsModalOpen(!isModalOpen)}>
        <div className="m-1.5 grid grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2 shadow-md border-2 border-indigo-100 border-opacity-25 p-0 rounded-lg ">
          
          <img className="w-full max-h-44 object-cover md:h-auto lg:h-auto h-full rounded" src={postImg}></img>
          <div className="relative text-left col-span-2 lg:col-span-1 md:col-span-1 flex flex-col bg-indigo-50 sm:p-3 p-3 w-full">
              <span className="grid grid-cols-4 lg:grid-cols-5 text-lg w-full leading-tight text-gray-700"> 
                    <span className="lg:col-span-4 col-span-3">Some long  long Title</span>
                    <button className="right-0 grid col-gap-2 grid-cols-2 float-right">
                        <DocumentDuplicateIcon className="ml-2 h-5 w-5 mx-2 text-gray-500 hover:text-gray-600" /> 
                        <ExternalLinkIcon className="ml-2 h-5 w-5 mx-2 text-gray-500 hover:text-gray-600" /> 
                    </button>
              </span>
              <span className="text-gray-500 right-0 float-right"> 
                    { bodyText.length > 35 ? bodyText.slice(0, 35) + "..." : bodyText} 
              </span>
          </div>
        
        </div>
        </button>
        {isModalOpen? <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />: ""}
    </>
        )
}
