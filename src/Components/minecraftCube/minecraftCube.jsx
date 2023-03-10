import classNames from 'classnames';
import React, { useState, useRef, useCallback } from 'react';
import {useParticles} from './ParticleComponent';
import {totem, block1, block2, block3, block4, block5, block6, motiveList} from '../../Data.js'
const MinecraftCube = (props) => {
  const {isBroken, setIsBroken} = props
  const cubeRef = useRef(null);
  const [clicks, setClicks] = useState(0);
  const [handleLast, setHandleLast] = useState(isBroken);
  const [sentence, setSentence] = useState('');
  const { containerRef, handleClick } = useParticles(handleLast);
  const block = [block1, block2, block3, block4, block5, block6]

  const random_item = useCallback((items) =>{
    if(!isBroken){
    return items[Math.floor(Math.random()*items.length)]}
  },[])

  const handleClicks = useCallback(() => {
    setClicks(clicks + 1)
    if(clicks >= 4)setHandleLast(true)
    if(clicks === 5){
        setSentence(random_item(motiveList))
        setIsBroken(true);
        setClicks(0)
        setHandleLast(false)
    }
  },[setIsBroken, clicks])


  return (
    <div onClick={handleClicks} ref={containerRef} className={classNames('container flex h-[220px] items-center justify-center relative', clicks !== 0 ? '': 'animate-pulse')}>
        <div className={classNames('w-[200px] h-[200px]  relative', isBroken ? 'hidden' : '')} >
        <img
            src={block[clicks]}
            onClick={handleClick}
            className={`w-[200px] h-[200px] active:grayscale  transition-all ease-in-out duration-[1ms] box absolute  left-[-15px] right-0 top-[-15px] border-4 border-[#222523] ${
            isBroken ? 'hidden' : ''
            }`}
            ref={cubeRef}
        />
        </div>
        <div className={classNames('flex items-center justify-center text-xl text-white gap-5 bg-[#e1e2de] p-8', !isBroken ? 'hidden' : 'flex-col')}>
            <img className='w-24' src={totem} alt='totem'/>
            <p className='text-center font-bold text-black'>"{sentence}"</p>
        </div>
    </div>
  );
};

export default MinecraftCube;
