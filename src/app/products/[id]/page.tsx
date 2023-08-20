"use client"
import { useEffect, useState } from "react";
import {client} from "../../../../sanity/lib/client";
import ProductSingleView from "@/views/productsingle";

//----------- To fetch data (title, description, image, price)
async function getData(id:any) {
    console.log("ID is ", id);
    
    const res = await client.fetch(`*[_type == 'autopart' && _id == '${id}']{
      title,
      price,
      image,
      _id,
      category -> {
        name
      }
    }`);   
    return res;
}


export default function ProductSingle({ params, searchParams }: {
    params: { id: number },
    searchParams: { id: string },
  }
){

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const res = await getData(params.id); 
            console.log("Sanity daata", res);
            setData(res);
        }

        fetchData();
    }, [])

    return(
        <div>
            {data.map((items:any) => (
                <div key={items._id}>
                    <ProductSingleView
                        title = {items.title}
                        price = {items.price}
                        category = {items.category.name}
                        image = {items.image}
                        id= {items._id}
                    />
                </div>
            ))}  
        </div>
    )
}