import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Cards = (props) => {
    const maxElement = props.maxElement;
    const iconStyle = {color:"blue"}
    const iconSize = 15;

    const index = props.index;
    const setIndex = props.setIndex;

    function leftShiftHandler(){
        if(index < 1){
            console.log("I am called");
            setIndex(1);
        }
        setIndex(index-1);
    }

    function rightShiftHandler(){
        if(index > maxElement-1){
            setIndex(0);
        }
        setIndex(index+1);
    }

    return (
        <div className="relative flex flex-col items-center justify-center p-16 pb-10">
            {/* for image */}
            <div className="rounded-full h-[19%] w-[19%] absolute top-[-20%] left-[6%]">
                <img src={props.eachData.image} alt="cant load" className="object-contain rounded-full" />
            </div>

            {/* for name */}
            <div className="font-bold text-[1.5rem] tracking-wider">{props.eachData.name}</div>

            {/* for designation */}
            <div className="text-violet-500 uppercase text-[0.85rem] mb-8 mt-[-0.2rem]">{props.eachData.job}</div>

            <FaQuoteLeft size={iconSize} style={iconStyle} className="opacity-70" />

            {/* testimonial */}
            <div className="my-4 opacity-60 text-[1rem]">{props.eachData.text}</div>

            <FaQuoteRight size={iconSize} style={iconStyle} className="opacity-70" />

            <div className="mt-8 flex gap-6 ">
                <FiChevronLeft size={iconSize + 15} style={iconStyle} className="transition-opacity opacity-70 cursor-pointer hover:opacity-100"
                onClick={leftShiftHandler} />

                <FiChevronRight size={iconSize + 15 } style={iconStyle} className="transition-opacity opacity-70 cursor-pointer hover:opacity-100"
                onClick={rightShiftHandler} />

            </div>

            <div className="mt-6 text-[1.05rem] text-white font-bold py-2 px-10 bg-violet-500 rounded-md opacity-70 cursor-pointer
            transition-opacity  hover:opacity-100">Surprise Me</div>
        </div>
    )
}

export default Cards;