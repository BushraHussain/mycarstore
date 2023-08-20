import Image from "next/image"
export default function Promotion() {
    return(
        <div className="bg-gray-50 justify-center items-center py-28">  
            <div className="text-center space-y-4 ">
                <p className="text-md font-bold">
                    PROMOTIONS
                </p>
                <h1 className="scroll-m-20 leading-lg text-2xl lg:text-3xl font-bold tracking-tight  ">
                    Our Promotions Events
                </h1>
            </div>  

            <div className=" flex justify-center mt-11">

            <div className="grid grid-cols-3 gap-6 h-[417px] w-[1250px] ">

                <div className="bg-green-200">
                    <Image className="h-[200px] w-full" src="/homepic4.webp" height={500} width={1200} alt="car"></Image>
      
                </div>
                <div className="bg-yellow-200 col-start-3 row-start-1 row-end-3">
                    <Image className="h-full w-full" src="/homepic3.jpeg" height={500} width={1200} alt="car"></Image>
      
                </div>
                <div className="bg-gray-500 col-start-2 row-start-1 row-end-3">
                    <Image className="h-full" src="/homepic1.jpg" height={500} width={1200} alt="car"></Image>
      
                </div>
                <div className="bg-orange-200 ">
                    <Image className="h-[200px] w-full" src="/homepic5.jpeg" height={500} width={1200} alt="car"></Image>
      
                </div>

            </div>    
    
                
            </div>
            
        </div>
    )
}