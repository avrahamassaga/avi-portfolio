import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";


import { useNavigate } from "react-router-dom";
const classNames = require('classnames');

export default function NavBar(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()
  const openPage = (path) =>{
    navigate(path)
    setOpenMenu(false)
  }
  return (
    <div className="flex flex-col w-full sticky top-0 z-40 bg-[#101110]">
      <div className="p-3 flex flex-row-reverse justify-end w-full gap-5">
        <div className="sm:flex gap-5 text-xl hidden">
          <p className={classNames("cursor-pointer hover:text-[#7fbd4e]", props.pageNum == 0 ? 'text-[#509046]': 'text-white' )} onClick={() =>openPage('/')}>דף בית</p>
          <p className={classNames("cursor-pointer hover:text-[#7fbd4e]", props.pageNum == 3 ? 'text-[#509046]': 'text-white' )}>פרויקטים</p>
          <p className={classNames("cursor-pointer hover:text-[#7fbd4e]", props.pageNum == 5 ? 'text-[#509046]': 'text-white' )}>לקוחות</p>
          <p className={classNames("cursor-pointer hover:text-[#7fbd4e]", props.pageNum == 2 ? 'text-[#509046]': 'text-white' )} onClick={() =>openPage('/skills')}>טכנולוגיות</p>
          <p className={classNames("cursor-pointer hover:text-[#7fbd4e]", props.pageNum == 1 ? 'text-[#509046]': 'text-white' )} onClick={() =>openPage('/connect')}>צור קשר</p>
        </div>
        <div className="menu-btn text-white sm:hidden">
          {!openMenu ? (
            props.pageNum == 0 ?
            <HiOutlineMenu size={30} onClick={() => setOpenMenu(!openMenu)} />
            : <IoIosArrowForward size={30} onClick={() => openPage('/')}/>
          ) : (
            <HiOutlineMenuAlt3
              size={30}
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
      </div>
      {openMenu ? (
        <div className="relative block sm:hidden">
          <div
            className={`absolute z-50 top-0 h-screen bg-black ${openMenu? 'menu-animation-open': 'menu-animation-close'}`}
          >
            <div className="flex flex-col items-center justify-center gap-10 text-3xl mt-10 text-white w-full">
              <p className="hover:text-[#509046]" onClick={() =>openPage('/')}>דף בית</p>
              <p className="hover:text-[#509046]">תיק עובודות</p>
              <p className="hover:text-[#509046]">לקוחות</p>
              <p className="hover:text-[#509046]" onClick={() =>openPage('/skills')}>טכנולוגיות</p>
              <p className="hover:text-[#509046]" onClick={() =>openPage('/connect')}>צור קשר</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
