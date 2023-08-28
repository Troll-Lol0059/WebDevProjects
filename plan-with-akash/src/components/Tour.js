import data from "../Data";
import Card from "./Card";

function Tour({tours,removeTour}) {

    return (
        <div className="container">
            <h1 className="appHeading">Plan With Akash</h1>
            <div className="cardContainer">
                {
                    tours.map((eachData) => {
                        return <Card key={eachData.id} {...eachData} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tour;