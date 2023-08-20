import Image from "next/image"
export default function Products() {
    return(
        <div className=" py-28 ">  
            <div className="flex justify-center items-center ">
                <div className="text-center space-y-4 ">
                    <p className="text-md font-bold">
                        PRODUCTS
                    </p>
                    <h1 className="scroll-m-20 leading-lg text-2xl lg:text-3xl font-bold tracking-tight  ">
                        Check What We Have
                    </h1>
                </div>  
            </div>

            {/* Product Images */}
            <div className="flex justify-center">
                <div className=" grid grid-cols-3 gap-10 mt-11 ">
                    <div className="bg-green-200 h-[400px] w-[390px]">
                        <Image className="h-full" src="/part2.jpeg" height={500} width={1200} alt="car"></Image>
      
                    </div>
                    <div className="bg-yellow-200 h-[400px] w-[390px]">
                        <Image className="h-full" src="/part3.jpg" height={500} width={1200} alt="car"></Image>
        
                    </div>
                    <div className="bg-red-200 h-[400px] w-[390px]">
                        <Image className="h-full" src="/part4.jpeg" height={500} width={1200} alt="car"></Image>
        
                    </div>

                </div>
            </div>
            
        </div>
    )
}