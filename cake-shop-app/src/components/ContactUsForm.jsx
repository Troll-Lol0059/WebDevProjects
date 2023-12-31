import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import countryCode from "../../../data/countrycode.json";
// import {apiConnector} from "../../../services/apiconnector";
// import {contactusEndpoint} from "../../../services/apis";


const ContactUsForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    const handleForm = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4 mb-8">
            <div className="lg:flex justify-around w-[100%]">
                <div className="flex flex-col lg:w-[100%]">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" className="input mt-2" {...register("firstName",{required:true})} />
                    {errors.firstName && (<span className="mt-1 text-[12px] text-yellow-100">Please Enter First Name</span>)}
                </div>

                <div className="flex flex-col lg:w-[100%]">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" className="input mt-2" {...register("lastName")} />
                </div>
            </div>

            <div>
                <label htmlFor="email">Email Address: </label>
                <input type="email" name="email" className="input mt-2" {...register("email",{required:true})} />
                {errors.email && (<span className="mt-1 text-[12px] text-yellow-100">Please Enter Your Email</span>)}
            </div>

            <div>
                <label htmlFor="phone">Phone Number: </label>
                <div className="flex gap-3 justify-center mt-2">
                    <select className="bg-richblack-500 w-[20%] rounded-md text-center">
            
                               <option name="countryCode" value={"+91"} {...register("countryCode",{required:true})} >
                                    +91
                                </option>
                               <option name="countryCode" value={"+92"} {...register("countryCode",{required:true})} >
                                    +92
                                </option>
                               <option name="countryCode" value={"+93"} {...register("countryCode",{required:true})} >
                                    +93
                                </option>
        
                    </select>

                    <input type="tel" placeholder="1234567890" name="phone" className="input lg:w-[80%]" {...register("phone",
                    {required:{
                        value:true,
                        message:"Please Enter Phone Number"
                    },minLength:{value:10,message:"Please Enter a valid phone number"},
                      maxLength:{value:10,message:"Please Enter a valid phone number"}
                    }
                    )} />
                </div>
                {errors.phone && (<span className="mt-1 text-[12px] text-yellow-100">{errors.phone.message}</span>)}

            </div>

            <div className="flex flex-col">
                <label htmlFor="messageBox">Message: </label>

                <textarea name="messageBox" rows={8} cols={15} className="input mt-2" placeholder="Enter Your Mesaage Here...." {...register("messageBox",{required:true})} />
                {errors.messageBox && (<span className="mt-1 text-[12px] text-yellow-100">Please Enter Your Message</span>)}
            </div>

            <button type="submit" className="bg-yellow-50 text-black text-center text-[13px] px-6 py-3 rounded-md font-bold
                hover:scale-95 transition-all duration-200 mt-4">
                Send Message
            </button>
        </form>
    )
}

export default ContactUsForm;