import { Button } from "./ui/button"

export default function Newsletter() {
    return(
        <div className="bg-gray-50">
            <center className=" h-[460px] space-y-6 items-center py-20 sm:py-28 ">
                <div className="scroll-m-20 leading-lg text-4xl font-bold tracking-tight ">
                    Subscribe Our Newsletter
                </div>
                <div className="leading-7 [&:not(:first-child)]:mt-6 px-2">
                    Get the latest information and promo offers directly
                </div>

                <div className="space-y-4 space-x-4 px-2">
                    <input className="w-[279px] h-[40px] border pl-2 border-gray-700" placeholder="Input email address" />
                    <Button className="h-[40px] w-36 text-base font-bold">
                        Get Started
                    </Button>
                    

                </div>
            </center>


        </div>
    )
}