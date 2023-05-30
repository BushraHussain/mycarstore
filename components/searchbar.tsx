import { Search } from "lucide-react"

export default function SearchBar() {
    return(
        <div>
            <div className="border-2 border-gray-200 rounded-md pl-2 w-96 h-7 flex items-center space-x-1">
                <Search width={15} height={15} className="text-gray-400"/>
                <p className="text-sm font-base text-gray-400">What are you looking for</p>
            </div>
            

        </div>
    )
}