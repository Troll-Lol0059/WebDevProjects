import { useState } from "react";

function Card({ id,name, info, image, price ,removeTour}){
    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}`;

    function handleReadmore(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            {/* For Image */}
            <div className="cardImageContainer">
                <img src={image} alt="cant load" className="cardImage"/>
            </div>

            <div className="infoContainer">
                <div className="tourPrice">{price}</div>
                <div className="cityName">{name}</div>

                {/* Handling Readmore Here */}
                <div className="tourInfo">
                    {description}
                    {/* changing span status here */}
                    <span className="readMore" onClick={handleReadmore}> 
                        {readmore ? ` Show Less`: ` Read More` + "...."}
                    </span>
                </div>

                <div className="btnDiv">
                <button className="notIntrestedButton" onClick={() => removeTour(id)}>Not Intrested</button>
                </div>
            </div>
        </div>
    )
}

export default Card;