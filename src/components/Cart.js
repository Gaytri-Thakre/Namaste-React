
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
const Cart=()=>{

    const cartItems = useSelector((Appstore)=>Appstore.cart.items);
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    };
    return(
        <div className="w-[1200px]  m-20 p-10 flex items-center flex-col gap-10">
            <h1 className="text-2xl font-bold text-center">Cart</h1>
            <button className="text-center w-20 bg-black text-white"  onClick={handleClearCart}>Clear All</button>
            {cartItems.length ===0 && <h1>Cart is empty Add Items to the cart!</h1>}
            <div className=" flex flex-row justify-center items-center">
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}
export default Cart;