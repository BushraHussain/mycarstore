"use client"
import { useEffect, useState } from 'react';
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'
import CartComponent from '../../components/cartcomponent';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/app/store';
import NoProduct from '../../components/noproduct';
import { Button } from '../../components/ui/button';
import Checkout from '../../components/checkout';

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
      _id,
      image
    }`);  
    return sanityData;
}

export default function CartNewView() {

    const [cartData, setCartData] = useState<Array<any>>([]);
    const productCartData = useSelector((state: RootState) => state.cartProductReducer.cartProducts)
    console.log("PRODUCT DATA from redux cart state ", productCartData);
    
    let arr:any =[];

    useEffect(() => {
        async function getdata() {
            const res = await fetchData(); // All product IDs here of user
            console.log("RES product UIDs ", res);

            for(let i=0; i <res.length; i++){
                const dat = await getDataFromSanity(res[i]);                
                arr.push(dat);
            }
            // Reduce array of array of objects to Array of objects
            const flattenedArray = arr.reduce((acc:any, curr:any) => acc.concat(curr), []);
            
            console.log("Falt array ", flattenedArray);

            const uniqueArray = flattenedArray.filter((obj:any, index:any, self:any) =>
                index === self.findIndex((o:any) => o.title === obj.title)
            );

            console.log("unique array", uniqueArray);
            
            setCartData(uniqueArray);
        }
      
        getdata();
    }, [])


    return(
        <div className=' mx-36 mt-20'> 
            {productCartData.length !== 0?
            <div>
                <Checkout />
                <div className='flex space-x-80 mt-10 '>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                    
                </div> </div>: <div><NoProduct /></div>}
            
            {   
                productCartData.map((item:any) =>(
                    <div className='border-t border-gray-200 my-4 flex space-x-24 '>
                        <CartComponent 
                            title = {item.title}
                            price = {item.price}
                            image = {item.image}
                            quantity = {item.quantity}
                            id = {item.id}
                        />
                    </div>
                ))
            }

    
            

            
        </div>
    )

    // return(
    //     <div className='flex'> 
    //         <div>
    //         {cartData.length === 0 ? (
    //             <div>Loading</div>
    //         ) : (
    //             cartData.map( (innerArray) => (
    //                 innerArray.map((item:any, index:any)=>(
    //                     <div key={index}> 
    //                         <div>Title: {item.title}</div>
    //                         <div>Price: {item.price}</div>
    //                         <Image className="object-cover rounded-lg" src={urlFor(item.image).width(200).url()} alt="My image" width={250} height={250}></Image>
    //                     </div>
    //                 ))
    //             )
                   
    //             ))
    //         }
    //         </div>
    //         <div>
    //             <Checkout
    //                 products = {cartData}
    //              />
    //         </div>

            
            
    //     </div>
    // )
}
