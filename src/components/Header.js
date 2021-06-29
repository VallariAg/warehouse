import { ChevronDownIcon, SearchIcon } from "@heroicons/react/outline"

function LoginOrUser({user}) {
  if (!user) {
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
  return (
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a> */}
            <a href="#"
              className="ml-8  whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign in
            </a>
          </div>
  )
}
export default function Header() {
  return (
    <div className="App">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <a href="#" className="px-2 text-base font-medium text-gray-500 hover:text-gray-900">
            Logo
          </a>
          <a href="#" className="px-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Home
          </a>
          
          <div className="m:flex m:items-center m:justify-end text-base font-medium text-gray-500 hover:text-gray-900">
            <div className="">
              <SearchIcon
                            className="ml-2 h-5 w-5 group-hover:text-gray-500"
                            aria-hidden="true"
              />
              {/* <input
              type="text"
              name="price"
              id="price"
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:w-0 block w-full px-8 py-2 pl-7 pr-12 border-gray-100 rounded-md"
              placeholder="search for items"
            /> */}
            </div>
          </div>
      
          <LoginOrUser user="" />
          
        </div>
    </div>
  );
}

