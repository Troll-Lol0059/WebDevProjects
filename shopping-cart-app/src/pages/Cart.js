const Cart = ()=> {
    return(
        <div className="flex h-[85%] w-[80%] justify-center mx-auto">

            <div className="flex flex-col w-[40%]">
                
            </div>

            <div className="flex flex-col h-[100%] w-[40%] justify-between text-left pt-8">

                <div>
                    <div className="text-[#006400] text-[1.25rem]">Your Cart</div>
                    <div className="text-[#006400] text-3xl font-[900] mb-3">SUMMARY</div>
                    <div className="text-[1rem] font-bold">Total Items: X</div>
                </div>

                <div className="w-full">
                    <div className="flex gap-1 items-center mb-2">
                        <span className="text-[1.25rem]">Total Amount:  </span> 
                        <span className="text-[1.35rem] font-[900] font-sans"><b>$ 0.00</b></span>
                    </div>

                    <div className="w-[75%] bg-[#006400] text-white font-bold rounded-lg py-3 px-4
                    flex justify-center cursor-pointer">
                        Checkout Now
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;