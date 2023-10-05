import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/cartSlice";

const Card = (props) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const { id, title, price, description, image } = props.products;
    let descriptionString = description.substring(0, 50) + " ....";

    function addToCart() {
        dispatch(addItem(props.products));
        toast.success("Item Added to Cart");
    }

    const removeFromCart = () => {
        dispatch(removeItem(id));
        toast.error("Item removed from Cart");
    }


    return (
        <div className="flex flex-col items-center px-4 py-3 border-[3px] border-solid
         border-black min-h-[385px] rounded-2xl mt-12 shadow-none 
         hover:scale-105 transition duration-300 ease-in cursor-pointer ">

            <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                {title}
            </div>

            <div className="w-40 text-gray-400 font-normal text-[0.75rem] text-left mb-2 h-[3.25rem] 
            mt-2">
                {
                    descriptionString
                }
            </div>

            <div className="h-[180px]">
                {
                    <img src={image} alt="product pic" loading="lazy" className="w-full h-full bg-contain" />
                }
            </div>

            <div className="flex items-center w-full justify-between mt-8">
                <div className="text-[green]">
                    $ {price}
                </div>

                {
                    // check if cart.id contains the props.id 
                    cart.some((p) => p.id == id) ?
                        (<button
                            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                            text-[12px] p-1 px-3 uppercase 
                          hover:bg-gray-700
                          hover:text-white transition duration-300 ease-in"
                            onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                            text-[12px] p-1 px-3 uppercase 
                            hover:bg-gray-700
                          hover:text-white transition duration-300 ease-in"
                            onClick={addToCart}>
                            Add to Cart
                        </button>)
                }

            </div>

        </div>
    )

}

export default Card;