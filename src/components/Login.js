import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
  <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <button onClick={() => loginWithRedirect()}
              className="ml-8 px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-indigo-400 hover:bg-indigo-500">
              Sign in
            </button>
          </div>);
}


