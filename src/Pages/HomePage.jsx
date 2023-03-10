import React,{useEffect, useState} from 'react'
import Head from '../Components/Head/Head'
import SaleTitle from '../Components/NewSale/SaleTitle'
import Sentence from '../Components/Sentence/Sentence'
import ServiceContainer from '../Components/ServicesList/ServiceContainer'
import MinecraftCube from '../Components/minecraftCube/minecraftCube'
import Example from '../Components/Examples/Example'
import ExampleWraper from '../Components/Examples/ExampleWraperTop'
import ExampleWraperDown from '../Components/Examples/ExampleWraperDown'
export default function HomePage(props) {
  const [isBroken, setIsBroken] = useState(false);
  useEffect(() => {
    props.setPage(0)
  },[])
  
  return (
    <div className=''>
        <Head/>
        <ServiceContainer/>
        <SaleTitle setIsBroken={setIsBroken} isBroken={isBroken}/>
        <MinecraftCube isBroken={isBroken} setIsBroken={setIsBroken}/>
        <ExampleWraper/>
        <Example/>
        <ExampleWraperDown/>
        <Sentence/>
        
    </div>
  )
}
