import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-white py-24'> 
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[720px]:grid-cols-2 gap-8 max-w-[600px]'>
        <div className='col-span-2'>
        <img src="/assets/logo.svg" className='h-[25px]' />
        <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
        <h3 className='py-2 text-[#6D737A]'>Call : 018-0000-0000</h3>
        <h3 className='py-2 text-[#6D737A]'>Lorem ipsum dolor sit amet.</h3>
        <h3 className='py-2 text-[#6D737A]'>Email : example@gmail.com</h3>
        <div className='flex gap-4 py-4'>
        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookSquare size={25} style={{color:'#4DC39E'}} /></div>
        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookSquare size={25} style={{color:'#4DC39E'}} /></div>
        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookSquare size={25} style={{color:'#4DC39E'}} /></div>
        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookSquare size={25} style={{color:'#4DC39E'}} /></div>
       
        </div>
        </div>

        <div>
            <h3 className='text-2xl font-bold'>Explore</h3>
            <ul className='py-6 text-[#6D737A]'>
                <li className='py-2'>Home</li>
                <li className='py-2'>About</li>
                <li className='py-2'>Course</li>
                <li className='py-2'>Blog</li>
                <li className='py-2'>Contact</li>
            </ul>
        </div>
        <div>
            <h3 className='text-2xl font-bold'>Category</h3>
            <ul className='py-6 text-[#6D737A]'>
                <li className='py-2'>Design</li>
                <li className='py-2'>Development</li>
                <li className='py-2'>Marketing</li>
                <li className='py-2'>Bussiness</li>
                <li className='py-2'>Life Style</li>
            </ul>
        </div>
        <div className='max-[720px]:col-span-2'>
        <h3 className='text-2xl font-bold'>Subscribe</h3>
        <h3 className='py-2 text-[#6D737A]'>Lorem ipsum dolor sit amet.</h3>
        <form className='py-4' action="">
            <input className='bg-[#F2F3F4] p-4 w-full rounded' type="text" placeholder='Email Here' />
            <button className='max-[720px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium'>Subscribe Now</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Footer