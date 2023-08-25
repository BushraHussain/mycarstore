
"use client"
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import CardNew from "../../components/cardnew";
import { log } from "util";

//----------- To fetch data (title, description, image, price)
async function getData() {
    const res = await client.fetch(`*[_type == 'autopart' && category->name == 'Exterior' ]{
      title,
      price,
      _id,
      image
    }`); 
    console.log("res", res);
    
    return res;
  }

//--------------------------------------------

//------------To fetch images
// const builder = imageUrlBuilder(client); // create builder
// function urlFor(source:any) { // Make URL
//   return builder.image(source)
// }

export default function ExteriorView() {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        async function fetchData() {
            const res = await getData(); 
            console.log("res : ", res);            
            setData(res);
        }

        fetchData();

    },[])

  return (
    <div className="py-20 bg-white ">
            <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-8">
                    {data.map((items:any) => (       
                      <div> 
                        <CardNew 
                          image = {items.image}
                          title = {items.title}
                          price = {items.price}
                          id = {items._id}
                        />  
                      </div>  
                    ))}    
                </div>
            </div>
    </div>
  ) 
}


       