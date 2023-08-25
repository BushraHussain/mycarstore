import imageUrlBuilder from '@sanity/image-url'
import { client } from "../sanity/lib/client";
import Image from 'next/image'
import Link from 'next/link';
import AddToBag from './addToBag';


//------------To fetch images
const builder = imageUrlBuilder(client); // create builder
function urlFor(source:any) { // Make URL
  return builder.image(source)
}

export default function CardNew(props:any) {
    return(
        <div className="space-y-8 border border-gray-200 rounded-lg h-[500px] ">
    
            <div className="rounded-md  w-full p-6 h-72 flex items-center">
                <Image className="object-cover rounded-lg" src={urlFor(props.image).width(200).url()} alt="My image" width={250} height={250}></Image>
            </div>
            <div className='px-6 space-y-4'>
                <div className='font-semibold text-lg'>{props.title}</div>
                <div className='flex  justify-between'>
                  <div>RS{props.price}</div>
                  <Link href={`/products/${encodeURIComponent(props.id)}`} className="text-base font-bold">
                      View
                  </Link><br/>
                </div>

                <AddToBag 
                  title = {props.title}
                  price = {props.price}
                  quanitity = {1}
                  id = {props.id}
                  image = {props.image}
                />
                
            </div>
        </div>
    )
}



