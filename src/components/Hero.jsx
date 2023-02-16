import React from 'react'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'> 
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]'>
    <div className='flex flex-col justify-start gap-4'>
        <p className='py-2 text-2xl text-[#20B486] font-medium'>Start To Success</p>
        <h2 className='md:leading-[72px] py-2 md:text-7xl text-5xl font-semibold'>Access To <span className='text-[#20B486]'>5000+</span> Courses From <span className='text-[#20B486]'>300</span> Instructor & Institutions</h2>
        <p className='py-4 text-lg text-gray-600'>Various Version Envolved Over The Years</p>
        <form className='bg-white border max-w-[700px] p-4 shadow-lg rounded-md flex justify-between' action="">
            <input className='bg-white' type="text" placeholder='What you want to learn'/>
        </form>
    </div>
    <img src="/assets/heroImg.png" className='md:order-last order-first' />
    </div>

    </div>
  )
}

export default Hero