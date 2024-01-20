import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    // const[count,setCount]=useState(0)
    useEffect(()=>{
     const fetchData= async()=>{
        const api= await fetch("https://jsonplaceholder.typicode.com/todos")
        const result= await api.json();
        console.table(result);

        fetchData();
        


     }
    },[])
    
  return (
    <div>
        {/* <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button> */}
    </div>
  )
}

export default UseEffectHook