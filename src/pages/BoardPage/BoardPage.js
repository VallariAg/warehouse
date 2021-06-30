import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import Card from "./PostCard";


export default function BoardPage() {

  return (
      <div className="">
        <h1 className="text-4xl text-gray-700 my-5 mx-3 lg:my-8 md:my-5 sm:my-5">
            Board Title
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


