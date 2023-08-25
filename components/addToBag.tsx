import { Button } from './ui/button';
import { addToCart, removeFromCart } from '@/app/store/cartSlice';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '@/app/store/productsSlice';
import { ICartProduct } from '@/app/store/productsSlice';

// interface ICartProduct {
//   title: string,
//   price: number,
//   quantity: number,
//   id: string
// }

export default function AddToBag(props:any){

  const dispatch = useDispatch();

  console.log("counter value ", props.counterValue);
  

  // function handleAdd(){
  //   dispatch(addToCart());
  // }

  // function handleSub(){
  //   dispatch(removeFromCart());
  // }

  const handleAddToCart = async () => {

    let counterVal = 0;

    if(props.counterValue){
      counterVal = props.counterValue;
    } else {
      counterVal = 1;
    }

    const product:ICartProduct = {
      title: props.title,
      price: props.price,
      quantity: counterVal,
      id: props.id,
      image: props.image
    };

      console.log("PRODUCT DATA In Add to bag", product);
      
      dispatch(addToCart(props.counterValue));
      dispatch(addProductToCart(product));
      
        try {
          const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
              product_id: props.id,
            }),
          });
    
          const result = await res.json();
          console.log(result);
        } catch (error) {
          console.error("Error adding to cart:", error);
        }
    };

    return(
        <div>
            <Button className="h-14 w-52 text-base font-bold" onClick={handleAddToCart}>
                Add To Bag
            </Button>
        </div>
    )
}