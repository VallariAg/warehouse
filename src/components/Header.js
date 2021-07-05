import { ChevronDownIcon, SearchIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";

function LoginOrUser({user}) {
  if (user) {
    return (
      <div className="flex items-center justify-end flex-1 lg:w-0">
        <div class="rounded-full text-gray-600 text-md justify-self-center my-2 h-12 w-12 flex items-center justify-center bg-blue-100">V</div>
        <ChevronDownIcon
                          className="ml-2 h-5 w-5 text-gray-500 group-hover:text-gray-500"
                          aria-hidden="true"
            />
      </div>
    )
  }
  return <Login />
}
export default function Header() {
  const { user } = useAuth0();
  let username = ""
  
  if (user) {
    username = user['https://myapp.example.com/username'];
  }


  return (
    <div className="App">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start space-x-10 lg:space-x-10">
          <Link href="/" className="px-2 text-base font-medium text-gray-500 hover:text-gray-900">
            Logo
          </Link>
          <Link to={"/" + username} className="px-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Home
          </Link>
          
          <div className=" text-base font-medium text-gray-500 hover:text-gray-900">
            <div className="">
              <SearchIcon
                            className="ml-2 h-5 w-5 group-hover:text-gray-500"
                            aria-hidden="true"
              />
              {/* TODO: Search posts by word 
              <input
              type="text"
              name="price"
              id="price"
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:w-0 block w-full px-8 py-2 pl-7 pr-12 border-gray-100 rounded-md"
              placeholder="search for items"
            /> */}
            </div>
          </div>
      
          <LoginOrUser user={user} />
          
        </div>
    </div>
  );
}

