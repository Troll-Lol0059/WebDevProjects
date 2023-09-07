import Cards from "./Cards";

const HeroSection = (props) => {

    const wholeData = [props.wholeData[0]];

    return (
        <div className="w-[50%] h-[100vh] mt-12 rounded-md bg-[white]">
            {
                wholeData.map( (eachData)=> {
                    return <Cards eachData={eachData} />
                })
            }
        </div>
    )

}

export default HeroSection;