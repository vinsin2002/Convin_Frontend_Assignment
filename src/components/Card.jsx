import React from 'react'
import { useState } from 'react'
import Picit from '../assets/play.png'
import Closeit from '../assets/close.png'
function Card(props) {
    const [ok, setok] = useState(true)
    const setunokhandler =()=>
    {
        setok(false);
    }
  return (
    <div className={`font-rubik flex justify-center items-center h-20 w-full rounded-lg m-2 bg-white ${!ok && 'hidden'}`}>
        {props.data}
        <a width="35" height="35" className='m-2' target="_blank" href={props.link}><img className='h-6' src={Picit}/></a>
        <button onClick={setunokhandler} ><img className=' h-6' src={Closeit} alt="" /></button>
    </div>
  )
}

export default Card