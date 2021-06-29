import { ChevronDownIcon, SearchIcon } from "@heroicons/react/outline"


export default function Header() {
  return (
    <div className="App">
       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
   
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Logo
          </a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            <div className="group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Home
            <ChevronDownIcon
                          className="ml-2 h-5 w-5 group-hover:text-gray-500"
                          aria-hidden="true"
            />
            </div>
          </a>
          
          <div className="text-base font-medium text-gray-500 hover:text-gray-900">
            <div className="group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <SearchIcon
                            className="ml-2 h-5 w-5 group-hover:text-gray-500"
                            aria-hidden="true"
              />
              <input
              type="text"
              name="price"
              id="price"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-8 py-2 pl-7 pr-12 sm:text-sm border-gray-100 rounded-md"
              placeholder="search for items"
            />
            </div>
          </div>

          <div className="mt-1 relative rounded-md shadow-sm">
            
          </div>
      

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

