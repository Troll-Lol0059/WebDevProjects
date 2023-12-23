import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';


const LandingPage = () => {
    const { register,handleSubmit } = useForm();

    return(
        <div className="flex flex-col">
            <div>
                Hello World
            </div>

            <button>
                <NavLink to={"/shop"}>
                    Click to Shop
                </NavLink>
            </button>

            <section className="flex flex-col justify-center items-center gap-2">
                <div>
                    Have a query ? Contact Us !
                </div>

                <form className="flex flex-col gap-4">
                    <div>
                        Please fill the below details and we will be happy to help you:
                    </div>

                    <div className="flex w-[80%]">
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text" name="firstName" {...register("firstName")}  className="w-[50%]"/>
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" name="lastName" {...register("lastName")} className="w-[55%]"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Email ID: </label>
                        <input type="email" name="email" {...register("email")}/>
                    </div>

                    <div>
                        <label htmlFor="contactNumber">Contact Number: </label>
                        <input type="tel" name="contactNumber" {...register("contactNumber")}/>
                    </div>

                    <input type="submit" value="Submit Details" className="cursor-pointer bg-red-500 mx-auto my-6"/>

                </form>

            </section>

        </div>
    )
}

export default LandingPage;