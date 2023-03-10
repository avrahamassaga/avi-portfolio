import React from 'react'
import { example1, example2 } from '../../Data.js'
export default function Example() {
  return (
    <div className={`flex flex-col  items-center gap-10 bg-cover sm:m-auto sm:w-[1280px] bg-contain`} style={{backgroundImage: `url(${require('../../assets/bg-wool-light.png')})`}}>
        <div className='flex flex-col sm:flex-row '>
            <div className='flex flex-row-reverse gap-8 p-8'>
                <div className='flex flex-col gap-5'>
                    <p className='font-bold text-[#22211a] text-3xl'>קורס זילוף</p>    
                    <p className='text-[#222523]'>דף נחיתה לקורס זילוף, איפיון האתר, הזמנת קורס, תשלום וטופס יצירת קשר</p>
                    <button className="bg-[#509046] border-t-[#7fbd4e] border-t-4 border-b-[#3e7329] border-b-4  w-28 h-10 z-10 font-bold text-white text-xl">כניסה לאתר</button>
                </div>
                <img className='h-[300px]' src={example1} alt='phone'/>
            </div>
            <div className='flex sm:flex-row-reverse gap-8 p-8'>
                <div className='flex flex-col gap-5'>
                    <p className='font-bold text-[#22211a] text-3xl'>אתר לחברת מיזוג</p>    
                    <p className='text-[#222523]'>אתר בית לחברת מיזוג, חנות, פורום, בלוג ומערכת ניהול</p>
                    <button className="bg-[#509046] border-t-[#7fbd4e] border-t-4 border-b-[#3e7329] border-b-4  w-28 h-10 z-10 font-bold text-white text-xl">כניסה לאתר</button>
                </div>
                <img className='h-[300px]' src={example2} alt='phone'/>
            </div>
        </div>
    </div>
  )
}
