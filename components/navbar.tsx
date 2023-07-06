import Image from "next/image"
import SearchBar from "./searchbar"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { AlignRight } from "lucide-react" 

export default function NavBar() {
    return(
        <div className="pt-10 flex items-center justify-between lg:justify-evenly px-8 lg:px-0">
            <Link href="/"><Image src="/image.webp" width={150} height={150} alt="Logo"></Image></Link>
            <div className="lg:hidden">
                <AlignRight  width={30} height={30} />
            </div>

            <div className="hidden lg:flex space-x-10 text-lg">
                <Link href="/allproductssanity" className="btnhover">All Parts</Link>
                <Link href="/exterior" className="btnhover">Exterior</Link>
                <Link href="/interior" className="btnhover">Interior</Link>
                <Link href="/other" className="btnhover">Other</Link>
                
            </div>
            <div className="hidden lg:block">
                <SearchBar/>
            </div>
            
            <div className="hidden lg:block bg-gray-100 rounded-full w-12 h-12 justify-center items-center ">
                <div className="w-6 h-6 ml-4 bg-red-500 text-white rounded-full flex justify-center items-center">0</div>
                <ShoppingCart className="ml-2 -mt-2"/>
            </div>          
        </div>
    )
}