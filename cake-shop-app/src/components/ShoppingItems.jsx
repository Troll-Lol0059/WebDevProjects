import { AiTwotoneDelete } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { removeItem } from "../redux/slices/cartSlice";
import image1 from '../assets/cakeImages/1.jpg';

const ShoppingItems = ( {item} )=> {
    const dispatch = useDispatch();
    
    return(
        <div className='flex border-b-[3px] border-slate-500 w-[95%] h-[40%] mt-4 items-center gap-2'>

            <div className='w-[25%] h-[100%] flex items-center justify-center'>
                <img src={image1} loading='lazy' alt="cant load" className='w-[90%] h-[150px]' />
            </div>

            <div className='w-[80%] h-[100%] px-4 py-4'>
                <div className='font-bold text-[1.35rem] text-slate-800 leading-8 my-2'>
                    {item.title}
                </div>

                <div className='capitalize text-[0.90rem]'>
                    a sweet baked food made from a dough or thick batter usually containing flour and sugar 
                    and often shortening, eggs, and a raising agent (such as baking powder)
                </div>

                <div className='flex justify-center gap-40 px-4 pt-4 items-center' >
                    <div className='text-[#006400] text-[1.25rem]'>
                        &#8377; {item.price} <span className='text-[0.75rem] text-black'>(Inclusive of all taxes)</span>
                    </div>

                    <div className='h-[40px] w-[40px] rounded-full bg-red-400 flex justify-center items-center cursor-pointer'
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