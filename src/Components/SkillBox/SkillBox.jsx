import React from 'react'

export default function SkillBox(props) {
  return (
    <div className='mt-2'>
    <div className='flex flex-col gap-2 backdrop-blur-sm bg-white p-2'>
        <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-5'>
            {props.icon}
            <p className={'text-[#509046] font-bold'}>{props.title}</p>
        </div>
        <div className='w-48 h-px bg-[#222523]'/>
        </div>
        <p className='text-[#222523]'>{props.subtext}</p>
    </div>
</div>
  )
}
