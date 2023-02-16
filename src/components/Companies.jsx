import React from 'react'

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'> 
    <div className='md:max-w-[1480px] m-auto  max-w-[600px]'>
        <h2 className='text-center text-2xl font-bold text-[#536E96]'>Trusted By Over 25000 Teams Around The World</h2>
        <p className='text-center text-[#536E96] text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, voluptates.</p>
        <div className='flex justify-center py-8 md:gap-8'>
            <img src="/assets/company-logo-1.png" alt="" />
            <img src="/assets/company-logo-2.png" alt="" />
            <img src="/assets/company-logo-3.png" alt="" />
            <img src="/assets/company-logo-4.png" alt="" />
            
        </div>
    </div>
    </div>
  )
}

export default Companies