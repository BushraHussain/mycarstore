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
                <div className="bg-red-200"> Box 1</div>    
                <div className="bg-green-200"> Box 2</div>
                <div className="bg-gray-200 col-start-3 row-start-1 row-end-3 "> Box 3</div>
                <div className="bg-blue-200 col-start-4 row-start-1 row-end-3"> Box 4</div>
                <div className="bg-purple-200"> Box 5</div>
                <div className="bg-orange-200"> Box 6</div>
                
            </div>
        </div>
    )
}