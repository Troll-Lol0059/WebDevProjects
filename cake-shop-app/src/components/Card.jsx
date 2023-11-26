import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/cartSlice";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import image1 from '../assets/cakeImages/1.jpg';
import image2 from '../assets/cakeImages/2.jpg';


const Card = (props) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const { id,title,category,image,description,price,rating,review } = props.products;  

    let cakeCategory = category;

    let isLiked = props.isLiked;
    let setLiked = props.setLiked;

    // function to handle like or dislike state
    function likeHandler(){
        // if isLiked array has course id (which means the course is liked)
        // then unlike it on click
        if(isLiked.includes(id)){
            // removing the courseID of clicked Card from the previous state of array and setting it 
            // as new isLiked array
            setLiked( (prev) => prev.filter( (eachId) => (eachId !== id)) );
            toast.error("Item Disliked");
        }
        else{
            // if no Courses are Liked (for initial render)
            if(isLiked.length === 0){
                // onClick of like button add the courseId of liked component into isLiked Array
                setLiked([id]);
                // display toast container
                toast.success("Item Liked");
            }
            else{
                // if some elements are liked already add the current liked card in previous liked array
                setLiked( (prev) => [...prev , id]);
                // display toast message
                toast.success("Item Liked");
            }    
        }
    }

    function addToCart() {
        dispatch(addItem(props.products));
        toast.success("Item Added to Cart");
    }

    const removeFromCart = () => {
        dispatch(removeItem(id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className="flex flex-col px-2 py-1 pt-4 border-[1px] items-center border-solid
         border-white min-h-[305px] rounded-2xl mt-12 shadow-none gap-2 relative
         hover:scale-105 transition duration-300 ease-in cursor-pointer">    

            <div className="h-[230px] w-[full] rounded-lg">
                {
                    <img src={image} alt="product pic" loading="lazy" className="w-full h-full bg-contain rounded-lg" />
                }
            </div>

            <div className="text-slate-700 text-lg w-40 mt-1 flex justify-center">
                {title}
            </div>

            <div className="flex w-[full] gap-8 font-[300]">
                <div className="flex justify-center items-center gap-2">
                    <div className="text-[black] font-bold text-[1.25rem] pr-8">
                        &#8377; {price}
                    </div>   

                    <div className="text-teal-800 capitalize">
                        {
                            cakeCategory == "veg" ? 
                            <div className="border border-green-900 w-[15px] h-[15px]  flex justify-center items-center"> 
                                <div className="bg-green-900 border rounded-full w-[9px] h-[9px]">

                                </div>
                            </div>
                            : 
                            <div className="border border-red-900 w-[15px] h-[15px]  flex justify-center items-center"> 
                                <div className="bg-red-900 border rounded-full w-[9px] h-[9px]">

                                </div>
                            </div>
                        }
                    </div>

                    <div className="capitalize">
                        {category} 
                    </div>
                </div>

            </div>

            <div className="flex w-[full] gap-8 font-[300] italic">
                <div className="text-black">
                    &#9733; {rating} / 5.0
                </div>

                <div className="text-black underline">
                        Reviews: {review}
                </div>      
                
            </div>

            <div className="flex w-full  items-center justify-center py-2">

                {
                    // check if cart.id contains the props.id 
                    cart.some((p) => p.id == id) ?
                        (<button
                            className="text-[black] bg-red-300 border-2 border-gray-700 rounded-full font-semibold 
                            text-[12px] p-2 px-10 uppercase 
                            hover:bg-gray-700
                          hover:text-white transition duration-300 ease-in"
                            onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className="text-[black] bg-red-300 border-2 border-gray-700 rounded-full font-semibold 
                            text-[12px] p-2 px-10 uppercase 
                            hover:bg-gray-700
                          hover:text-white transition duration-300 ease-in"
                            onClick={addToCart}>
                            Add to Cart
                        </button>)
                }

            </div>

            {/* div for like button */}
            <div className="bg-white h-[40px] w-[40px] rounded-full absolute top-[5%] right-[8%] flex items-center justify-center
                cursor-pointer" onClick={likeHandler}>
                    {
                        isLiked.includes(id) ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                    }
            </div>

        </div>
    )

}

export default Card;