import React from 'react'
import { useForm } from 'react-hook-form';


function SearchBar() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }

    


  return (
    <form className='w-[80%] flex mx-auto justify-center mt-6 gap-4 items-center'
    onSubmit={handleSubmit(submitHandler)}>
        <input type='text'
        name='searchBar'
        className='input h-[45px]'
        placeholder='Search Cakes' 
        {...register('searchBar',{required:true})}
        />
        {errors.SearchBar && (<span className='mt-2'>
            Please Enter serach query in input box
        </span>)}

        <button type='submit' className='px-4 py-2 rounded-md border
            hover:bg-blue-50'>
            Search
        </button>
    </form>
  )
}

export default SearchBar