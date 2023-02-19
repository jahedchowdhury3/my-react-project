import React from 'react'
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'

const Achivement = () => {
  return (
    <div className='w-full bg-white py-24'> 
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]'>
    <div className='flex flex-col justify-center'>
        
        <h2 className='md:leading-[72px] text-3xl font-bold'>Our <span className='text-[#20B486]'>Achievement</span></h2>
        <p className='text-lg text-gray-600'>Various Version Envolved Over The Years</p>
        <div className='grid grid-cols-2 py-16'>
        <div className='py-6 flex'>
            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
            <SlGraduation 
            size={30}
            style={{colour:'#1A9068'}}
            />
            </div>
            <div className='px-3'>
                <h1 className='text-2xl font-semibold'>300</h1>
                <p className='text-[#6D737A]'>Instructor</p>
            </div>
        </div>
        <div className='py-6 flex'>
            <div className='p-4 bg-[#f6dabd] rounded-xl'>
            <FiVideo 
            size={30}
            style={{colour:'#FFC27A'}}
            />
            </div>
            <div className='px-3'>
                <h1 className='text-2xl font-semibold'>10,000+</h1>
                <p className='text-[#6D737A]'>Videos</p>
            </div>
        </div>
        <div className='py-6 flex'>
            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
            <SlGraduation 
            size={30}
            style={{colour:'#1A9068'}}
            />
            </div>
            <div className='px-3'>
                <h1 className='text-2xl font-semibold'>20,000+</h1>
                <p className='text-[#95bfef]'>Students</p>
            </div>
        </div>
        <div className='py-6 flex'>
            <div className='p-4 bg-[#bbdfd3] rounded-xl'>
            <IoIosPeople 
            size={30}
            style={{colour:'#1A9068'}}
            />
            </div>
            <div className='px-3'>
                <h1 className='text-2xl font-semibold'>1,00,000</h1>
                <p className='text-[#6D737A]'>User</p>
            </div>
        </div>
        </div>
       
    </div>
    <img src="/assets/achievement.png" className='m-auto md:order-last order-first' />
    </div>

    </div>
  )
}

export default Achivement