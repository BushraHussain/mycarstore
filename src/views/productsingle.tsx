import { Button } from "../../components/ui/button";
import imageUrlBuilder from '@sanity/image-url';
import {client} from "../../sanity/lib/client";
import Image from "next/image";
import { useState } from "react";
import AddToBag from "../../components/addToBag";

//--------------------------------------------

//------------To fetch images
const builder = imageUrlBuilder(client); // create builder
function urlFor(source:any) { // Make URL
  return builder.image(source)
}

export default function ProductSingleView(props:any) {

    const[counter, setCounter] = useState(1);

    function handleAdd() {
        setCounter(counter+1);
    }

    function handleMinus() {
        if(counter > 1){
            setCounter(counter-1);
        }
    }

    return(
        <div className="flex justify-center space-x-16 items-center pt-16">
            <div className="rounded-md p-6 h-72 flex items-center">
                <Image className="object-cover rounded-lg" src={urlFor(props.image).width(200).url()} alt="My image" width={500} height={500}></Image>
            </div>

            <div className=" h-[500px] w-[500px] space-y-8">
                <p className=" text-2xl font-extrabold">{props.title}</p>
                <p className=" text-lg font-base">RS. {props.price}</p>
                <p>Category: {props.category}</p>
                <div className="flex space-x-4 items-center">
                    <p>Quantity:</p>
                    <button className="w-10 h-10 rounded-full  border-2 border-black flex justify-center items-center " onClick={handleAdd}> + </button>
                        <div>{counter}</div>
                    <button className="w-10 h-10 rounded-full  border-2 border-black flex justify-center items-center" onClick={handleMinus}>-</button>
                </div>
               
                <div className="flex items-center space-x-4">
                   <AddToBag 
                        id = {props.id}
                        counterValue = {counter}
                        title = {props.title}
                        price = {props.price}
                        image = {props.image}
                   />
                </div>



            </div>
            
        </div>
    )
}