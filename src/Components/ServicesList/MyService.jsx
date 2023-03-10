import React from "react";

export default function Services(props) {
  return (
    <div
    className={`flex flex-col p-5 h-full items-center justify-center sm:w-[450px]`}
    >
      <div className="flex items-start bg-white p-5 justify-between w-full">
        <div className={'text-gray-700 flex flex-col items-start'}>
          <p className="font-bold text-2xl text-[#3c8625]">{props.title}</p>
          <div className="w-[250px]">
            <p className="text-[#222523]">{props.subTitle}</p>
          </div>
          
        </div>
        <div className="w-[120px] sm:m-2 ">
          <img className="w-full sm:w-[90px]" src={props.img} alt="img" />
        </div>
      </div>
      {/* {props.last ? null : <div className="w-48 block sm:hidden h-0.5 bg-[#50a7c2] rounded-full mt-8"/>} */}
      
    </div>
  );
}
