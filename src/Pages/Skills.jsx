import React,{useEffect} from 'react'
import { FaPython, FaReact, FaCss3Alt, FaNode, FaJava } from 'react-icons/fa'
import { SiJavascript, SiSqlite, SiMongodb } from 'react-icons/si'
import SkillBox from '../Components/SkillBox/SkillBox'
import {pythonText,nodeJsText,javaText,reactText,javaScriptText,cssText,sqlLiteText,mongoDbText} from '../Components/SkillBox/data'
export default function Skills(props) {

  useEffect(() => {
    props.setPage(2)
  },[])

  const iconsSize = 50
  
  return (
    <div className='p-8  text-white sm:w-[650px] sm:m-auto'>
        <div className='flex justify-center w-full text-2xl font-bold'>
            <p>יכולות טכנולוגיות:</p>
        </div>
        <SkillBox icon={<FaPython size={iconsSize} color={'#509046'}/>} title={'PYTHON'} subtext={pythonText} skill={80}/>
        <SkillBox icon={<FaNode size={iconsSize} color={'#509046'}/>} title={'NODE JS'} subtext={nodeJsText} skill={80}/>
        <SkillBox icon={<FaJava size={iconsSize} color={'#509046'}/>} title={'JAVA'} subtext={javaText} skill={60}/>
        <SkillBox icon={<FaReact size={iconsSize} color={'#509046'}/>} title={'REACT'} subtext={reactText} skill={90}/>
        <SkillBox icon={<SiJavascript size={iconsSize} color={'#509046'}/>} title={'JAVA SCTIPT'} subtext={javaScriptText} skill={90}/>
        <SkillBox icon={<FaCss3Alt size={iconsSize} color={'#509046'}/>} title={'CSS'} subtext={cssText} skill={80}/>
        <SkillBox icon={<SiSqlite size={iconsSize} color={'#509046'}/>} title={'SQL LITE'} subtext={sqlLiteText} skill={80}/>
        <SkillBox icon={<SiMongodb size={iconsSize} color={'#509046'}/>} title={'MONGO DB'} subtext={mongoDbText} skill={80}/>
    </div>
  )
}
