import React from "react";
import { me, logo } from "../../Data.js";

import { useNavigate } from "react-router-dom";
export default function Head() {
  const navigate = useNavigate()
  return (
    <div className={`flex flex-col bg-cover sm:m-auto sm:h-[550px] sm:w-[1280px]`} style={{backgroundImage: `url(${require('../../assets/minc-head.png')})`}}>
      <div className="flex flex-col items-center h-[320px] sm:h-full">
        <div className="w-full h-full  flex flex-col items-center justify-between pt-8 px-8 text-white sm:pt-[100px] sm:h-full">
            <div>
              <img className="sm:w-[950px]" src={logo} alt={'logo'}/>          
              <div className="flex justify-center jutify-center sm:text-[32px]">
                <p>מפתח אתרים</p>
                -
                <p>מפתח תוכנה</p>
                -
                <p>עיצוב ותכנון</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="relative flex items-center justify-center">
              <button onClick={() => navigate('/connect')} className="bg-[#509046] border-t-[#7fbd4e] border-t-4 border-b-[#3e7329] border-b-4  w-28 h-10 z-10 font-bold text-xl">דברו איתי</button>
              <span className="animate-ping absolute inline-flex h-8 w-[80px] bg-white opacity-[80%] z-0"></span>
              </span>
              <img className="w-[150px] transition-all duration-600 ease-out active:w-[180px] sm:w-[250px]" src={me} alt="me" />
            </div>
        </div>
      </div>
    </div>
  );
}
