import React from 'react'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
        <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src="./assets/avatar.png" alt="" />
          <div>
            <h1>Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>
        </div>
          <img className='h-8' src="./assets/quotationMark.png" alt="" />
        </div>
        <div className='py-8'>
          <h3 className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dicta ipsum laudantium eius, tempore nostrum non aliquam est mollitia. Hic odio sint autem ut neque, soluta ipsum nobis fugiat? Facilis, placeat! Incidunt qui tempora fugit beatae nisi iure ea nesciunt quae? At, debitis illum! Recusandae impedit sapiente cupiditate accusamus debitis?</h3>
        </div>
    </div>
  )
}

export default FeedbackCard