import { Button } from "../../components/ui/button"

export default function ProductSingleView() {
    return(
        <div className="flex justify-center space-x-16 items-center pt-16">
            <div className="bg-red-200 h-[719px] w-[668px]">
                Image 
            </div>

            <div className="bg-green-200 h-[500px] w-[500px] space-y-8">
                <p>Product Name:</p>
                <p>Category:</p>
                <div className="flex space-x-4 items-center">
                    <p>Quantity:</p>
                    <button className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center "> - </button>
                    <div>Number</div>
                    <button className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center">+</button>
                </div>
               
                <div className="flex items-center space-x-4">
                    <Button className="h-[40px] w-36 text-base font-bold">
                        Add to Cart
                    </Button>
                    <p>Price </p>
                </div>



            </div>
            
        </div>
    )
}