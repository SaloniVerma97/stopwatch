import React, { useEffect, useState } from 'react'
import './Stopwatch.css';
 

function Stopwatch() {

const[second,setSecond]=useState(0)
const[minute,setMinute]=useState(0)
const[hour,setHour]=useState(0)

var timer;

useEffect(()=>{

timer=setInterval(()=>{

setSecond(second+1)

if(second===59){
    setMinute(minute+1)
    setSecond(0)
}
if(minute===59){
    setHour(hour+1)
    setMinute(0)
}
},1000)

return()=>clearInterval(timer)

})

const restart=()=>{
setSecond(0)
setMinute(0)
setHour(0)
}

const stop=()=>{

clearInterval(timer)
}
const start=()=>{
    setSecond(second+1)
}



    return (
    <div className='timer'>
        <div className='container'>
            <div className='timer_container'>
                <h1 className='h1'>{minute<10? "0"+minute:minute}:{second<10?"0"+second:second}:{hour<10?"0"+hour:hour}</h1>

                {/* <button className='start' onClick={start}>start</button> */}
                <button className='restart' onClick={restart}>Restart</button>
                <button className='stop' onClick={stop}>stop</button>
                <button className='start' onClick={start}>start</button>

            </div>
        </div>
    </div>
  )
}

export default Stopwatch;
