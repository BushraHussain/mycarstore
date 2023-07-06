import Image from "next/image"
import NavBar from "./navbar"
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"


export function Hero() {
    return (
      <div>
        <div className="flex px-9 sm:px-16 lg:px-28 space-x-20 ">
          <div className="space-y-8 mt-16 lg:mt-32">
            <Button variant="secondary">Sale 20%</Button>
            <h1 className="scroll-m-20 leading-lg text-5xl lg:text-6xl font-bold tracking-tight max-w-xl ">
              An Industrial Take on Streetwear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 lg:max-w-sm">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>

            <Button className="h-14 w-64 text-base font-bold">
              <ShoppingCart className="mr-2 h-6 w-6 " /> Start Shopping
            </Button>
          </div>

          <div className="hidden lg:flex justify-center items-center lg:mt-20  h-[500px] w-[520px] rounded-full">
            <Image className="w-[1000px] h-[400px]" src="/car.png" height={500} width={1200} alt="car"></Image>
          </div>
          
        </div>
        </div>
      
    )
  }
  