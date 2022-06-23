import React from 'react'


const Recipe = ({title,image,occasions}) => {
  return (
    <div className='bg-white rounded-lg h-[300px] w-64 flex flex-col m-4 '>
        <div className='flex-col justify-center items-center'>
        <h1 className='ml-2 dark:text-black text-[15px] font-semibold'>{title}</h1>
        <p className='ml-6 text-[15px] font-semibold'>{occasions}</p>
        </div>
        <div className='p-[4px]'>
        <img className='mt-[20px] rounded w-54 h-54' src={image} alt="" />
        </div>
        
    </div>
  )
}

export default Recipe