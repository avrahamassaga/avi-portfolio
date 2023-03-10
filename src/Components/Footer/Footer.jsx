import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#161616] text-white h-28 gap-5 z-40'>
        <div className='flex items-center justify-center gap-8'>
            <AiFillGithub size={30}/>
            <AiFillLinkedin size={30}/>
            <AiFillInstagram size={30}/>
        </div>
        <p>Ⓒ האתר נפנה ע"י אברהם אסגה</p>
    </div>
  )
}
