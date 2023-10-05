import { AiTwotoneDelete } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { removeItem } from "../redux/slices/cartSlice";

const ShoppingItems = ( {item} )=> {
    const dispatch = useDispatch();
    let description = item.description.substring(0,150) + " ....";
    
    return(
        <div className='flex border-b-[3px] border-slate-500 w-[95%] h-[50%] mt-4 items-center gap-2'>

            <div className='w-[25%] h-[100%] flex items-center justify-center'>
                <img src={item.image} loading='lazy' alt="cant load" className='w-[90%] h-[150px]' />
            </div>

            <div className='w-[80%] h-[100%] px-4 py-4'>
                <div className='font-bold text-[1.35rem] leading-8 my-2'>
                    {item.title}
                </div>

                <div className='text-[0.85rem] text-gray-700'>
                    {description}
                </div>

                <div className='flex justify-between px-4 pt-4 items-center' >
                    <div className='text-[#006400]'>
                        $ {item.price}
                    </div>

                    <div className='h-[40px] w-[40px] rounded-full bg-red-300 flex justify-center items-center cursor-pointer'
                     onClick={ ()=> dispatch(removeItem(item.id))} >
                        <IconContext.Provider value={ {color:"red",size:"1.55rem"} }>
                            <AiTwotoneDelete />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShoppingItems;