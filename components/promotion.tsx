export default function Promotion() {
    return(
        <div className="justify-center items-center">  
            <div className="text-center space-y-4 pt-28">
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
                    box 1
                </div>
                <div className="bg-yellow-200 col-start-3 row-start-1 row-end-3">
                    box 2
                </div>
                <div className="bg-gray-500 col-start-2 row-start-1 row-end-3">
                    box 3
                </div>
                <div className="bg-orange-200 ">
                    box 4
                </div>

            </div>    
    
                
            </div>
            
        </div>
    )
}