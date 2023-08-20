import Image from "next/image"

export default function Features() {
    return(
        <div className="py-28">
            <div className=" flex justify-end">
                <h1 className="scroll-m-20 leading-lg text-4xl lg:text-5xl font-bold tracking-tight max-w-xl ">
                    Unique and Authentic Vintage Designer Jewellery
                </h1>

            </div>

            {/* Features */}

            <div className=" h-[512px] px-16 py-10 grid grid-cols-4 gap-5">
                <div className="bg-red-200">
                    <Image className="h-full" src="/box1.jpeg" height={500} width={1200} alt="car"></Image>
      
                </div>    
                <div className="bg-green-200">
                    <Image className="h-full object-cover" src="/box7.jpeg" height={500} width={1200} alt="car"></Image>
      
                
                </div>
                <div className="bg-gray-200 col-start-3 row-start-1 row-end-3 "> 
                    <Image className="h-full object-cover" src="/box4.jpg" height={500} width={1200} alt="car"></Image>
      
                </div>
                <div className="bg-blue-200 col-start-4 row-start-1 row-end-3"> 
                    <Image className="h-full object-cover" src="/box3.jpeg" height={500} width={1200} alt="car"></Image>
      
                </div>
                <div className="bg-purple-200"> 
                <Image className="h-full" src="/box2.jpeg" height={500} width={1200} alt="car"></Image>
      
                </div>
                <div className="bg-orange-200">
                <Image className="h-full object-cover" src="/box5.jpeg" height={500} width={1200} alt="car"></Image>
      
                </div>
                
            </div>
        </div>
    )
}