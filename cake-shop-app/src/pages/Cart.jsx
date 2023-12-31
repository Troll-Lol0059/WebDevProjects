import { useSelector } from "react-redux";
import ShoppingItems from '../components/ShoppingItems'
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Cart = ()=> {
    const {cart} = useSelector( (state) => state );
    const length = cart.length;
    const [quantity,setQuantity] = useState(1);
    const totalPrice = quantity * (cart.reduce( (total,num)=> (num.price + total) , 0 )) ;

    return(
        <div className="flex h-[85%] w-[80%] justify-center mx-auto overflow-y-auto gap-6">
            {/* left section */}

                {
                    length === 0 ? 
                    // if
                    <div className="flex flex-col justify-center items-center w-[60%] gap-2"> 
                        <p className="font-[900] text-[1.5rem] text-[#006400]">Your Cart is Empty !!</p>

                        <p className="mb-4"> Shop Now For Intresting Offers</p>

                        <button className="bg-[#006400] rounded-lg px-8 py-2 text-stone-200">                  
                            <NavLink to={"/shop"} >
                                Shop Now
                            </NavLink>
                        </button>

                    </div> 
                    
                    :

                    // else
                    <div className="flex flex-col w-[60%] overflow-y-auto">
                        {
                            cart.map( (item,id)=> (
                                <ShoppingItems item={item} quantity={quantity} setQuantity={setQuantity} key={id} />
                            ) )
                        }
                    </div>
                }

            {/* right section */}
            <div className="flex flex-col h-[100%] w-[40%] justify-between text-left pt-8">

                <div>
                    <div className="text-[#006400] text-[1.25rem]">Your Cart</div>
                    <div className="text-[#006400] text-3xl font-[900] mb-3">SUMMARY</div>
                    <div className="text-[1rem] font-bold">Total Items: {length} </div>
                </div>

                <div className="w-full">
                    <div className="flex gap-1 items-center mb-2">
                        <span className="text-[1.25rem]">Total Amount:  </span> 
                        <span className="text-[1.35rem] font-[900] font-sans">&#8377; {totalPrice}</span>
                    </div>

                    <div className="w-[75%] bg-[#006400] text-white font-bold rounded-lg py-3 px-4
                    flex justify-center cursor-pointer">
                        Checkout Now
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;