import React from 'react'

const Recipe = ({title,image,mealType}) => {
  return (
    <div className='bg-white rounded-lg h-30 w-64 flex flex-col m-4 '>
        <div className='flex-col justify-center items-center'>
        <h1 className='ml-6 text-[18px] font-bold'>{title}</h1>
        <p className='ml-6 text-[15px] font-semibold'>{mealType}</p>
        </div>
        <div className='p-[4px]'>
        <img className='mt-[2px] rounded-full w-54 h-54' src={image} alt="" />
        
        </div>
        
    </div>
  )
}

export default Recipe