import { Button } from './ui/button';
import { addToCart, removeFromCart } from '@/app/store/cartSlice';
import { useDispatch } from 'react-redux';


export default function AddToBag(props:any){

  const dispatch = useDispatch();

  // function handleAdd(){
  //   dispatch(addToCart());
  // }

  // function handleSub(){
  //   dispatch(removeFromCart());
  // }

    const handleAddToCart = async () => {
      dispatch(addToCart());
      
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