import React from 'react'
import { beach } from '../../Data.js'
export default function Sentence() {
  return (
    <div className='relative flex items-center justify-center overflow-hidden h-[200px]'>
      <div className='z-10 p-2 w-[250px] rounded-md '>
        <p className='text-center text-[24px] font-bold text-white '>עוצב בהשראת המשחק מיינקראפט</p>
      </div>
      <div className='absolute'>
        <img className='brightness-[70%] left-0 top-0 w-screen' src={beach} alt='purple-beach'/>
      </div>
    </div>
  )
}
