import { useState } from "react";
import Card from "./Card";

function Cards(props) {
    const [isLiked, setLiked] = useState([]);
    const coursesData = props.coursesData;
    var category = props.category;

    function getCourseData() {
        // if All category is selected 
        if (category === "All") {
            const allData = [];

            // add Object Values from API call into values if coursesData is not null or undefined
            const values = coursesData ? Object.values(coursesData) : [];

            // for each category go into each course and add that into an array
            values.forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allData.push(course);
                })
            })
            return allData;
        }
        // if a category is selected render that category cards into UI
        else{
            return coursesData[category];
        }
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {
                getCourseData().map((element) => {
                    return <Card data={element} key={element.id}
                        isLiked={isLiked} setLiked={setLiked} />
                })
            }
        </div>
    )
}

export default Cards;

