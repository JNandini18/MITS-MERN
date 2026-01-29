// // useEffect(()=>{
// //      //side effect code
// // },[dependence])


import React, { useEffect, useState } from 'react'
import Login from '../Auth/Login'

const UseEffect = () => {
    const [count,setCount]=useState(0)
    const [value,setValue]=useState(0)
    useEffect(()=>{
        console.log("useEffect mounted");
        
    },[count,value])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>Inc</button>
    </div>
  )
}

export default UseEffect



// import React, {useEffect, useState} from 'react'
// import Login from './Auth/Login'

//   const UseEffect = () => {
//     const [count,setCount]=useState(0)
//     const [value,setValue]=useState(0)
//     const handleIncrement =()=>{
//       setCount((count)=>count+1)
//       setCount((count)=>count+1)
//       setCount((count)=>count+1)
//     }
//     useEffect(()=>{
//         console.log("useEffect Mounted");
//     })
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={handleIncrement}>inc</button>
//         <h1>{count}</h1>
//         <button onClick={()=>setValue(value+1)}>inc</button>
//       </div>    )
//   }
  
//   export default UseEffect