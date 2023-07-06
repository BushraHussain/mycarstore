import imageUrlBuilder from '@sanity/image-url'
import { client } from "../sanity/lib/client";
import Image from 'next/image'


//------------To fetch images
const builder = imageUrlBuilder(client); // create builder

function urlFor(source:any) { // Make URL
  return builder.image(source)
}

export default function CardNew(props:any) {
    return(
        <div className="space-y-4">
            <div className="rounded-md h-[230px] w-[251px]">
                <Image src={urlFor(props.image).width(200).url()} alt="My image" width={200} height={200}></Image>
            </div>
            <div>{props.name}</div>
            <div>{props.category}</div>
            <div>${props.price}</div>
            <button className='bg-green-200 h-12 w-28'>Buy now</button>
        </div>
    )
}


