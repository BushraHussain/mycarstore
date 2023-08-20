"use client"
import { useEffect, useState } from 'react';
import { client } from "../../sanity/lib/client";
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'

async function fetchData() {
    let _productID:any = [];
    try {
        const response = await fetch(`/api/cart?${document.cookie}`);
        const dataReceived  = await response.json();
        dataReceived.res.forEach((item:any) => {   
            _productID.push(item.product_id);
        });
        return _productID;

    } catch(error) {
        console.log("ERROR", error);
        return error;
    }
}

//----------- To fetch data (title, description, image, price) from sanity
async function getDataFromSanity(id:any) {
    const sanityData = await client.fetch(`*[_type == 'autopart' && _id == '${id}']{
      title,
      price,
      image
    }`);  
    return sanityData;
}

//------------To fetch images
const builder = imageUrlBuilder(client); // create builder

function urlFor(source:any) { // Make URL
  return builder.image(source)
}

export default function CartNewView() {

    const [cartData, setCartData] = useState<Array<any>>([]);

    let arr:any =[];

    useEffect(() => {
        async function getdata() {
            const res = await fetchData(); // All product IDs here of user
            //console.log("RES product UIDs ", res);

            for(let i=0; i <res.length; i++){
                const dat = await getDataFromSanity(res[i]);                
                arr.push(dat);
            }

            setCartData(arr);
        }
      
        getdata();
    }, [])

    return(
        <div>
            {cartData.length === 0 ? (
                <div>Loading</div>
            ) : (
                cartData.map( (innerArray) => (
                    innerArray.map((item:any, index:any)=>(
                        <div key={index}> 
                            <div>Title: {item.title}</div>
                            <div>Price: {item.price}</div>
                            <Image className="object-cover rounded-lg" src={urlFor(item.image).width(200).url()} alt="My image" width={250} height={250}></Image>
                        </div>
                    ))
                )
                   
                ))
            }
            
        </div>
    )
}
