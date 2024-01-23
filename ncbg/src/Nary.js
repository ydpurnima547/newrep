import React from "react";
import { useState } from "react";

function Nary() {
    let [count,setCount] = useState('0');

const incre = ()=>{
    setCount((count)=>count+1)
} 
const decre = ()=>{
    setCount((count)=>count-1)
}
  return (
    <>
    <h5>Count{count}</h5>
    <button onClick={incre}>increment</button>
    <button onClick={decre}>decrement</button>
    </>
  )
}

export default Nary