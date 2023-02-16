import React, { useState } from 'react'

const Navbar = () => {

    const [toggle,settoggle]=useState(false)
    const handleClick= ()=> settoggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <img src="/assets/logo.svg" className='h-[25px]' />


        <div className='hidden md:flex items-center'>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className='hidden md:flex'>

            <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                <img src="/assets/lock.svg" />
                Login</button>
            <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Sign Up</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
            <img src={"/assets/hamburgerMenu.svg"} alt="" />
        </div>


        </div>
        
        <div>
            <ul className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
                <li className='p-4 hover:bg-gray-100'>Home</li>
                <li className='p-4 hover:bg-gray-100'>Support</li>
                <li className='p-4 hover:bg-gray-100'>Platform</li>
                <li className='p-4 hover:bg-gray-100'>About</li>
                <li className='p-4 hover:bg-gray-100'>Pricing</li>
                <div className='flex flex-col gap-4 my-4'>
                <button className='border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
                <img src="/assets/lock.svg" />
                Login</button>
                <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up</button>
                </div>
            </ul>
        </div>

    </div>
  )
}

export default Navbar