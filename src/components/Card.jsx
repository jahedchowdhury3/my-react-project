import React from 'react'
import StarRating from './StarRating'

const Card = () => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4'>
        <img src="/assets/blog-1.png" className='h-40 w-full object-cover' alt="" />

        <div className='p-5 border border-b'>
        <h1 className='py-2'>Python Programming</h1>
        <StarRating rating={4}/>
        </div>  
        <h3 className='p-5 text-xl'>$500</h3>
      <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
        HTML
      </div>
    </div>
  )
}

export default Card