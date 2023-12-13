import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const formHandler = async (data) => {
        try {
            console.log(data);

            const options = {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            const response = await fetch("http://localhost:4000/api/v1/createUser", options);
            console.log(response);

            navigate('/');
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-black h-[100vh] w-[100vw] text-gray-400 p-8 capitalize'>
            <div>
                <p>Welcome to SignUp Page</p>
                <p>Please fill all the details beolow to create an account</p>
            </div>

            <form onSubmit={handleSubmit(formHandler)} >
                <div className='py-4'>
                    <label htmlFor='name'>Full Name: </label>
                    <input type='text' name='name' {...register("name")} />
                </div>

                <div className='py-4'>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' {...register("email")} />
                </div>

                <div className='py-2'>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' {...register("password")} />
                </div>

                <div className='py-2'>
                    <label htmlFor='confirmpassword'>Confirm Password: </label>
                    <input type='password' name='confirmpassword' {...register("confirmpassword")} />
                </div>

                <div className='py-2'>
                    <label htmlFor='role'>Role: </label>
                    <input type='text' name='role' {...register("role")} />
                </div>

                <button type='submit' className='px-4 py-1 bg-indigo-800 rounded-md mt-4 mx-20'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
