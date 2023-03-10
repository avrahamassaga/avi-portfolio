import React, {useEffect} from 'react'
import {BsTelegram,BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { hover } from '@testing-library/user-event/dist/hover'
export default function ConnectMe(props) {

  useEffect(() => {
    props.setPage(1)
  },[])


    const connectLink = (link) => {
        switch(link) {
            case 'TL':
              window.open('https://t.me/Namer23')
              break;
            case 'WA':
              window.open('https://wa.me/972535325179')
              break;
            case 'MA':
              window.open('https://mail.google.com/mail/?view=cm&fs=1&to=assagaavi@gmail.com')
              break;
            default:
              console.log('Unknown');
          }
    }
  return (
    <div className='flex flex-col items-center justify-center sm:justify-start sm:m-auto gap-5 pt-10 px-5 sm:w-[650px] sm:h-screen'>
        <div className='text-2xl font-bold text-white'>
            <p>אפשר ליצור איתי קשר ב:</p>
        </div>
        <div className='flex items-center justify-center border border-white p-5 gap-10 bg-white w-full text-[#2c3e50]'>
            <div className='flex flex-col items-center justify-center gap-2 '>
            <BsTelegram className='hover:cursor-pointer' size={40} color={'#222523'} onClick={() =>connectLink('TL')}/>
            <p>טלגרם</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
            <BsWhatsapp className='hover:cursor-pointer' size={40} color={'#222523'} onClick={() =>connectLink('WA')}/>
            <p>וואטסאפ</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
            <AiOutlineMail className='hover:cursor-pointer' size={40} color={'#222523'} onClick={() =>connectLink('MA')}/>
            <p>אימייל</p>
            </div>
        </div>
        <div className='text-2xl text-white'>
            <p>או להשאיר פרטים כאן</p>
        </div>
        <div className='flex flex-col gap-5 w-full mb-5 bg-white/50 p-4 border border-white'>
            <label>שם פרטי:</label>
            <input className='bg-gray-100 p-2 w-full border border-gray-300 bg-white' type={'text'} placeholder={'שם פרטי'}/>
            <label>טלפון:</label>
            <input className='bg-gray-100 p-2 w-full border border-gray-300 bg-white' type={'text'} placeholder={'טלפון'}/>
            <label>הודעה:</label>
            <textarea className='bg-gray-100 p-2 w-full border border-gray-300 bg-white' placeholder='הודעה'/>
            <div className='flex items-center gap-5'>
                <button className='w-[100px] h-8 bg-[#509046] text-white font-bold'>שלח</button>
                <p>תודה, ההודעה נשלחה</p>
            </div>
        </div>
    </div>
  )
}
