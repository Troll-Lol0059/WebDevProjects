import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Homepage(props) {
    const products = props.data;
    const [isLiked, setLiked] = useState([]);
    const [category,setCategories] = useState("all");
    
    const filteredProducts = category === "all" ? products :
        products.filter( (product) => product.flavour === category );

    return (
        <div className="mx-auto w-[100%] flex flex-col items-center">
            <Filter  category={category} setCategories={setCategories} />
            <div className="grid grid-cols-4 mx-auto w-[84%] gap-2">
                {
                    filteredProducts.map((product, key) => (
                        <Card products={product} key={product.id} isLiked={isLiked} setLiked={setLiked} />
                    ))
                }
            </div>
        </div>
    )
}

export default Homepage;