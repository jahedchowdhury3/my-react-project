import React from 'react'
import CategoryCard from './CategoryCard'
import {BsVectorPen,BsCurrencyDollar} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {TfiMarkerAlt} from 'react-icons/tfi'
import {MdWork,MdAddAPhoto,MdDataExploration,MdOutlineImportantDevices,MdHealthAndSafety,MdSchool} from 'react-icons/md'
import {SiStyledcomponents,SiApplemusic} from 'react-icons/si'


const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'> 
    <div className='md:max-w-[1480px] m-auto max-w-[600px]'>
    <h2 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h2>
        <p className='text-lg text-gray-600'>Various Version Envolved Over The Years</p>
        <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
          <CategoryCard icons={<BsVectorPen size={30}/>} title={'Design'}/>
          <CategoryCard icons={<TiHtml5 size={30}/>} title={'Development'}/>
          <CategoryCard icons={<TfiMarkerAlt size={30}/>} title={'Marketing'}/>
          <CategoryCard icons={<MdWork size={30}/>} title={'Bussiness'}/>
          
          <CategoryCard icons={<SiStyledcomponents size={30}/>} title={'Life Style'}/>
          <CategoryCard icons={<MdAddAPhoto size={30}/>} title={'Photography'}/>
          <CategoryCard icons={<SiApplemusic size={30}/>} title={'Music'}/>
          <CategoryCard icons={<MdDataExploration size={30}/>} title={'Data Science'}/>

          <CategoryCard icons={<MdOutlineImportantDevices size={30}/>} title={'Personal Develop'}/>
          <CategoryCard icons={<MdHealthAndSafety size={30}/>} title={'Health & Fitness'}/>
          <CategoryCard icons={<BsCurrencyDollar size={30}/>} title={'Finance'}/>
          <CategoryCard icons={<MdSchool size={30}/>} title={'Teaching'}/>
        </div>
        </div>
        </div>
  )
}

export default Categories