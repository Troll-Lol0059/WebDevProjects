import React from "react";
import cake from "../assets/Cake.jpeg";

const Login = () => {
    // <!-- LogIN Page -->

    return (
        <div class="flex flex-row items-center justify-center bg-pink-200 w-[100vw] h-[100vh] gap-[5rem]">
            <div>
                <div>
                    <p class="font-medium text-[20px] text-[#0398d4] p-5">Customer LogIn Form</p>
                </div>

                <div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div></div>
                </div>

            </div>

            <div>
                <img src={cake} alt="cake pic" class="rounded-lg" />
            </div>
            
        </div>
    )

}

export default Login;