import { SearchIcon } from "@heroicons/react/outline";


export default function LoadingComponent() {
    return (
        <div className="text-200 text-gray-600 my-24 text-center">
            <div className="flex justify-center mb-4">
                <SearchIcon className="text-gray-400 w-10 h-10" />
            </div>
            <span>Loading ...</span>
        </div>
    )
}
