import React from 'react'

export default function ExampleWraperTop() {
  return (
    <div className={`flex flex-col bg-cover h-10 sm:m-auto sm:h-[100px] sm:w-[1280px] bg-contain`} style={{backgroundImage: `url(${require('../../assets/bg-wool-light-top.png')})`}}/>
  )
}
