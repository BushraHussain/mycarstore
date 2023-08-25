"use client"
import { useEffect, useState } from 'react';
import { client } from "../../sanity/lib/client"

let _sanityData:any = [];

//----------- To fetch product_id from DB using user_id get from user cookie
async function fetchData() {
  let data;
  let sanityData:any;
  let _productID:any = [];
  
  try {
    const response = await fetch(`/api/cart?${document.cookie}`);
    data = await response.json();

    console.log("data all ", data);
    
    data.res.forEach((item:any) => {
      _productID.push(item.product_id);
    });
  }

  catch (error) {
    console.error("Error in cart page:", error);
  }

  return _productID;  
}

//----------- To fetch data (title, description, image, price) from sanity
async function getDataFromSanity(id:any) {
  const sanityData = await client.fetch(`*[_type == 'autopart' && _id == '${id}']{
    title,
    price
  }`);  
  return sanityData;
}

// Loop inside 
async function getAllsanity(res:any) {
  for (let index = 0; index < res.length; index++) {
    const sanityD = await getDataFromSanity(res[index]);
    console.log("Saan data new ", sanityD);
    _sanityData.push(sanityD); 
  }

  return _sanityData;
}

const CartView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await fetchData(); // All product IDs here of user
      const valo = await getAllsanity(res); // all sanity data 
      console.log("valooo ", valo);
      setData(valo);
    }
  
    getdata();

  }, [])
  
  console.log("DATA Is ", data);
    return(
      <div>
      <h1>Product List</h1>
      
      {/* <ul>
        {data.map((item:any, index:any) => (
          <li key={index}>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul> */}
    </div>
    )
}

export default CartView;