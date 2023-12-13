import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {register,handleSubmit} = useForm();

    const formHandler = async(data) =>{
      try{
        console.log(data);

        const options = { 
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }  

        const response = await fetch("http://localhost:4000/api/v1/login", options);
        console.log(response);
      }
      catch(error){
        console.log(error);
      }
  }

  return (
    <div className='bg-black h-[100vh] w-[100vw] text-gray-400'>
      <form onSubmit={ handleSubmit(formHandler)} >
        <div className='py-4'>
          <label htmlFor='username'>Username: </label>
          <input type='text' name='username' {...register("username")} />
        </div>

        <div className='py-2'>
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' {...register("password")} />
        </div>

        <button type='submit' className='px-4 py-1 bg-indigo-800 rounded-md mt-4 mx-20'>
            Submit
        </button>

      </form>
    </div>
  );
}

export default LoginPage;