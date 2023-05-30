import Image from "next/image"
import SearchBar from "./searchbar"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { AlignRight } from "lucide-react" 

export default function NavBar() {
    return(
        <div className="pt-10 flex items-center justify-between lg:justify-evenly px-8 lg:px-0">
            <Image src="/image.webp" width={150} height={150} alt="Logo"></Image>
            <div className="lg:hidden">
                <AlignRight  width={30} height={30} />
            </div>

            <div className="hidden lg:flex space-x-10 text-lg">
                <Link href="" className="btnhover">Cars for sale</Link>
                <Link href="" className="btnhover">News</Link>
                <Link href="" className="btnhover">Reviews</Link>
                <Link href="" className="btnhover">Sell your car</Link>
            </div>
            <div className="hidden lg:block">
                <SearchBar/>
            </div>
            
            <div className="hidden lg:flex bg-white rounded-full w-12 h-12 justify-center items-center ">
                <ShoppingCart />
            </div>          
        </div>
    )
}