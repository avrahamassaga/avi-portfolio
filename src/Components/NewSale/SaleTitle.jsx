import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function SaleTitle(props) {
  const { setIsBroken, isBroken } = props;
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[50px]">קוביות המזל</p>
        {!isBroken ? (
          <div
            onClick={() => setIsBroken(false)}
            className="sm:cursor-pointer w-56 rounded-full h-8 bg-gradient-to-r from-[#44306f] to-[#5761ba]  gap-2 flex items-center justify-center"
          >
            ✨<p>נפצו את הקוביה</p>✨
          </div>
        ) : (
          <div
            onClick={() => setIsBroken(false)}
            className="sm:cursor-pointer w-56 rounded-full h-8 bg-gradient-to-r from-[#44306f] to-[#5761ba]  gap-2 flex items-center justify-center"
          >
            💫
            <p>הגרל מחדש</p>
            💫
          </div>
        )}
        {/* {!isBroken ? <p className='text-xl mt-3'>וקבלו מסר</p> : null} */}
      </div>
    </div>
  );
}
