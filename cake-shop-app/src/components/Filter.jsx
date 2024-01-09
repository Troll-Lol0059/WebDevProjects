import React from 'react';

function Filter( {category,setCategories} ) {
  return (
    <div className='w-[80%] flex mx-auto justify-center mt-2 py-8 gap-4 items-center'>
        <div className='flex py-4 border bg-slate-400 rounded-md justify-center items-center'>
            <div className={`${category === 'all' ? "text-red-600" : ""} border-r px-6 cursor-pointer hover:underline`}
            onClick={ () => setCategories("all") }>All</div>
            <div  className={`${category === 'Chocolate' ? "text-red-600" : ""} border-r px-6 cursor-pointer hover:underline`}
            onClick={ () => setCategories("Chocolate") }>Chocolate</div>
            <div  className={`${category === 'Fruit' ? "text-red-600" : ""} border-r px-6 cursor-pointer hover:underline`}
            onClick={ () => setCategories("Fruit") }>Fruit</div>
            <div  className={`${category === 'Vanilla' ? "text-red-600" : ""} border-r px-6 cursor-pointer hover:underline`}
            onClick={ () => setCategories("Vanilla") }>Vanilla</div>
            <div  className={`${category === 'Butterscotch' ? "text-red-600" : ""} px-6 cursor-pointer hover:underline`}
            onClick={ () => setCategories("Butterscotch") }>Butterscotch</div>
        </div>
    </div>
  )
}

export default Filter