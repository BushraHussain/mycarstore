
"use client"
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import CardNew from "../../components/cardnew";

//----------- To fetch data (title, description, image, price)
async function getData() {
    const res = await client.fetch(`*[_type == 'autopart' && category->name == 'Interior']{
      title,
      price,
      _id,
      image
    }`); 
    return res;
  }

//--------------------------------------------

//------------To fetch images
// const builder = imageUrlBuilder(client); // create builder
// function urlFor(source:any) { // Make URL
//   return builder.image(source)
// }

export default function InteriorView() {

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
                    {data.map((item:any) => ( 
                      <div key={item.name}>
                        <CardNew 
                            title = {item.title}
                            price = {item.price}
                            image = {item.image}
                            id = {item._id}
                        /> 
                      </div>   
                    ))}    
                </div>
            </div>
    </div>
  ) 
}


       