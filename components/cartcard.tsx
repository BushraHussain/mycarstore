import { client } from "../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'

//------------To fetch images
const builder = imageUrlBuilder(client); // create builder

function urlFor(source:any) { // Make URL
  return builder.image(source)
}

export default function CartCard (item:any) {
    return(
        <div className="bg-green-200 h-[300px] w-[854px] mx-20 mt-10">
            {/* <div className="rounded-md  w-full p-6 h-72 flex items-center">
                <Image className="object-cover rounded-lg" src={urlFor(item.image).width(200).url()} alt="My image" width={250} height={250}></Image>
            </div> */}

            <p>Hello cart</p>

        </div>
    )
}