const Card = (props) => {

    const { id, title, price, description, image } = props.products;
    let descriptionString = description.substring(0, 50) + " ....";

    return (
        <div className="flex flex-col items-center px-4 py-3 border-[3px] border-solid
         border-black min-h-[385px] rounded-2xl mt-12 shadow-none 
         hover:scale-105 transition duration-300 ease-in cursor-pointer ">

            <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                {title}
            </div>

            <div className="w-40 text-gray-400 font-normal text-[0.75rem] text-left mb-2 h-[3.25rem] 
            mt-2">
                {
                    descriptionString
                }
            </div>

            <div className="h-[180px]">
                {
                    <img src={image} alt="product pic" className="w-full h-full bg-contain" />
                }
            </div>

            <div className="flex items-center w-full justify-between mt-8">
                <div className="text-[green]">
                    $ {price}
                </div>

                <div className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 cursor-pointer
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in">
                    ADD TO CART
                </div>
            </div>

        </div>
    )

}

export default Card;