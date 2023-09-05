import Card from "./Card";

function Cards(props){

    function getCourseData(){
        const coursesData = props.coursesData;
        const allData = [];
        const values = coursesData ? Object.values(coursesData) : [];
        
        values.forEach((courseCategory) =>{
            courseCategory.forEach((course)=>{
                allData.push(course);
            })
        })
        return allData;
    }


    return (
        <div className="flex flex-wrap gap-4">
            {
            getCourseData().map((element)=>{
                return <Card data={element} key={element.id}/>
            })
            }
        </div>
    )
}

export default Cards;

