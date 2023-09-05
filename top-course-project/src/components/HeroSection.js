import Cards from "./Cards";
import Filter from "./Filter";


const HeroSection = (props) => {
    return (
        <div className="w-[100%] bg-bgDark2">
            <div className="w-[100%]">
                <Filter filterData= {props.filterData}/>
            </div>

            <div className="w-[70%] mx-auto">
                <Cards coursesData={props.coursesData} />
            </div>            
        </div>
    )
}

export default HeroSection;

