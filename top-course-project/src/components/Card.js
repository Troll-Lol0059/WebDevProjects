import {FcLike,FcLikePlaceholder} from "react-icons/fc";

const Card = (props) => {
    const courses = props.data;

    let descriptionString = courses.description;
    let descriptionSubString = descriptionString.substring(0,100) + "....";
    
    return (
        // card container
        <div className="w-[32%] bg-bgDark bg-opacity-80 rounded-md text-white relative
        flex flex-col">
            
            {/* image div */}
            <div className="rounded-md"> 
                <img src={courses.image.url} className="rounded-md" alt="cant_load"></img>
            </div>

            {/* contents div */}
            <div className="px-4 py-3">
                {/* for heading */}
                <div className="text-[1.25rem] font-[500]">
                    {courses.title}
                </div>

                {/* description div */}
                <div>
                    {/* {courses.description} */}
                    {descriptionSubString}
                </div>

                <div className="bg-white h-[45px] w-[45px] rounded-full absolute top-[40%] right-[3%] flex items-center justify-center
                cursor-pointer">
                    <FcLikePlaceholder fontSize="1.75rem"/>
                </div>
            </div>
        </div>
    )
}

export default Card;