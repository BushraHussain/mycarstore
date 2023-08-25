// import { cookies } from "next/headers";
// import { NextResponse, NextRequest } from "next/server";
// import Stripe from "stripe";

// const key = process.env.Secret_key || ""; 

// const stripe = new Stripe(key, {
//     apiVersion: "2023-08-16",

// })

// export async function POST(request:NextRequest) { 
//     // const url = new URL(request.url);
//     // const urlParams = new URLSearchParams(url.search);
//     // const userID = urlParams.get('user_id');

//     const userIDObject = cookies().get("user_id");
//     const userID = userIDObject?.value;
//     console.log("user id in checkout stripe" , userID);
    

//     const body = await request.json();

//     const customer = await stripe.customers.create({
//         metadata:{
//             userID: userID
//         }
//     });

//     try {

//         if(body.length > 0 && userID){

//             console.log("suxxxced");
            
            
            
//             const session = await stripe.checkout.sessions.create({
//                 submit_type: "pay",
//                 mode: "payment",
//                 payment_method_types: ["card"],
//                 billing_address_collection: "auto",
//                 shipping_options:[{
//                     shipping_rate: "shr_1NhGhIENA56BaomuUrUu8JqG"

//                 },{
//                     shipping_rate:"shr_1NhGgfENA56BaomujeCVya2R"
//                 }],

//                 invoice_creation:{
//                     enabled: true,
//                 },

//                 line_items: body.map((innerArray:any) => (
//                     innerArray.map((item:any, index:any) => {

//                         return {
//                             price_data: {
//                                 currency:"usd",
//                                 product_data:{
//                                     name: item.name,
                        
                                     
//                                 },
    
//                                 unit_amount: item.price * 100,
//                             },
    
                           
//                             adjustable_quantity: {
//                                 enabled: true,
//                                 minimum: 1,
//                                 maximum:10
//                             }
//                         }

                        

//                     })
//                 )), 

//                 // line_items: body.map((item:any) => {

//                 //     return{
//                 //         price_data: {
//                 //             currency:"usd",
//                 //             product_data:{
//                 //                 name: item.name,
//                 //                 images: [item.image],
                                 
//                 //             },

//                 //             unit_amount: item.price * 100,
//                 //         },

//                 //         quantity : item.quantity,
//                 //         adjustable_quantity: {
//                 //             enabled: true,
//                 //             minimum: 1,
//                 //             maximum:10
//                 //         }
//                 //     }

//                 // }), 

//                 customer: customer.id,
//                 success_url: `${request.headers.get("origin")}/success`,
//                 cancel_url: `${request.headers.get("origin")}/cart `,
                  
//             })

//             return NextResponse.json(session);
//         } else{
//             console.log("failer");
            
//             return NextResponse.json({message: " Product data is missing or no user logged in"});
//         }
        
//     } catch (error:any) {
//         return NextResponse.json(error.message);       
//     }
// }