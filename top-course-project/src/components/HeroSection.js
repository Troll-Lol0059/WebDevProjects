import Cards from "./Cards";
import Filter from "./Filter";
import Spinner from "./Spinner";

const HeroSection = (props) => {

    const loading = props.loading;

    return (
        <div className="w-[100%] bg-bgDark2">
            <div className="w-[100%]">
                <Filter filterData= {props.filterData}
                category={props.category} setCategory={props.setCategory}/>
            </div>

            <div className="flex flex-col w-[70%] mx-auto">
            {
                loading ? <Spinner /> : <Cards coursesData={props.coursesData} category={props.category} />
            }
            </div>            
        </div>
    )
}

export default HeroSection;

