import Cards from "./Cards";

const HeroSection = (props) => {

    const loadData = props.wholeData[props.index];

    return (
        <div className="w-[50%] h-[100vh] mt-12 rounded-md bg-[white]">
            {
                <Cards loadData={loadData} index={props.index} setIndex={props.setIndex} maxElement={props.maxElement} />
            }
        </div>
    )

}

export default HeroSection;