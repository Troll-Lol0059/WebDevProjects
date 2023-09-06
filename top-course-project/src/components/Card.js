import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
    const courses = props.data;

    let descriptionString = courses.description;
    let descriptionSubString = descriptionString.substring(0,100) + "....";

    let isLiked = props.isLiked;
    let setLiked = props.setLiked;
    const id = courses.id;

    // function to hand like or dislike state
    function likeHandler(){
        // if isLiked array has course id (which means the course is liked)
        // then unlike it on click
        if(isLiked.includes(id)){
            // removing the courseID of clicked Card from the previous state of array and setting it 
            // as new isLiked array
            setLiked( (prev) => prev.filter( (eachId) => (eachId !== id)) );
            toast.warning("Course Disliked");
        }
        else{
            // if no Courses are Liked (for initial render)
            if(isLiked.length === 0){
                // onClick of like button add the courseId of liked component into isLiked Array
                setLiked([id]);
                // display toast container
                toast.success("Course Liked");
            }
            else{
                // if some elements are liked already add the current liked card in previous liked array
                setLiked( (prev) => [...prev , id]);
                // display toast message
                toast.success("Course Liked");
            }
        }
    }
    
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

                {/* div for like button */}
                <div className="bg-white h-[40px] w-[40px] rounded-full absolute top-[40%] right-[4%] flex items-center justify-center
                cursor-pointer" onClick={likeHandler}>
                    {
                        isLiked.includes(courses.id) ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;