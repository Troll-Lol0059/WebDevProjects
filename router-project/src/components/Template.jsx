import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Template = (props) => {
    const {heading,description1,description2,formType,image,pattern} = props.data;

    return (
        <div className="text-white flex">
            <div>
                <h1>{heading}</h1>
                <div>{description1}</div>
                <div>{description2}</div>

                <div>
                    {
                        formType === "login" ? <LoginForm /> : <SignUpForm />
                    }
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-[white] h-[0.10rem] w-[5rem]"></div> 
                    <div>OR</div>
                    <div className="bg-[white] h-[0.10rem] w-[5rem]"></div> 
                </div>

                <div>
                    Sign Up with Google
                </div>

            </div>

            <div>
                <img src={image} alt="login img" height={378} width={400} loading="lazy"/>
                <img src={pattern} alt="pattern" height={378} width={400} loading="lazy"/>
            </div>
        </div>
    )
}

export default Template;
