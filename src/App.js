import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const[time,setTime]=useState(0)
  const[time1,setTime1]=useState(0)


  const start = () => {
    setCount(count + 1)
  }

  const data = setTimeout(start, 1000);

  const stop = () => {
    clearTimeout(data)
  }

  // const data =setTimeout(start,0);
  const reset = () => {
    clearTimeout(data)
    setCount(0)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App;

// import React from 'react'
// import Interval2 from './Interval2'

// function App() {
//   return (
//     <div>
//       <Interval2/>
      
//     </div>
//   )
// }

// export default App



