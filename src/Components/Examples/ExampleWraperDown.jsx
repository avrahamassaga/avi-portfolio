import React from 'react'

export default function ExampleWraperDown() {
  return (
    <div className={`flex flex-col mb-[150px] bg-cover h-10 sm:m-auto sm:h-[100px] sm:w-[1280px] bg-contain`} style={{backgroundImage: `url(${require('../../assets/bg-wool-light-down.png')})`}}/>
  )
}
