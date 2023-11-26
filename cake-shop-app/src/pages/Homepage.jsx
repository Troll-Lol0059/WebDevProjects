import { useState } from "react";
import Card from "../components/Card";

function Homepage(props){
    const products = props.data;
    const [isLiked,setLiked] = useState([]);

    return(
        <div className="grid grid-cols-4 mx-auto w-[84%] gap-2">
            {
                products.map( (product,key)=> (
                    <Card products={product} key={product.id} isLiked={isLiked} setLiked={setLiked} />
                 ) )
            }
        </div>
    )
}

export default Homepage;