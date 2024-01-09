import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function Homepage(props) {
    const products = props.data;
    const [isLiked, setLiked] = useState([]);

    return (
        <div className="mx-auto w-[100%] flex flex-col items-center">
            <SearchBar />
            <div className="grid grid-cols-4 mx-auto w-[84%] gap-2">
                {
                    products.map((product, key) => (
                        <Card products={product} key={product.id} isLiked={isLiked} setLiked={setLiked} />
                    ))
                }
            </div>
        </div>
    )
}

export default Homepage;