import Card from "../compnents/Card";

function Homepage(props){
    const products = props.data;

    return(
        <div className="grid grid-cols-4 mx-auto w-[84%] gap-4">
            {
                products.map( (product,key)=> (
                    <Card products={product} id={key} />
                 ) )
            }
        </div>
    )
}

export default Homepage;