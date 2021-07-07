import React from "react";

export default function ErrorPage({error}) {
  const errorMsg = error.message || "unknown error!";
  
  return (
  <div className="md:flex items-center justify-center px-4 py-24 text-gray-600 md:flex-1">
        Error: {errorMsg}
  </div>);
}


