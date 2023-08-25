import { client } from '../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from '@/app/store/productsSlice';
import { removeFromCart } from '@/app/store/cartSlice';
import { RootState } from '@/app/store';

//------------To fetch images
const builder = imageUrlBuilder(client); // create builder

function urlFor(source:any) { // Make URL
  return builder.image(source)
}

export default function CartComponent(props:any){

    const dispatch = useDispatch();

    const productsInCart = useSelector((state: RootState) => state.cartProductReducer.cartProducts );

    function handleDeleteItem(){
        dispatch(deleteProductFromCart(props.id));
        dispatch(removeFromCart(props.quantity));
    }

    return(
        <div className=" mt-8 w-full flex items-center space-x-28">
            <div className='space-x-8 flex justify-center items-center'>
                <div>
                    <Image className="object-cover rounded-lg" src={urlFor(props.image).width(200).url()} alt="My image" width={100} height={100}></Image>                   
                </div>
                <div className='  w-36 font-bold text-base max-w-xs'>{props.title}</div>
            </div>
            
            <div>{props.price}</div>
            <div className='flex space-x-52'>
                <button onClick={handleDeleteItem}><RiDeleteBin5Line /></button>
                <div>{props.quantity}</div>
            </div>
        </div>     
    )
}