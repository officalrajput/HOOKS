import React, { useReducer } from 'react'

const UseReducers = () => {
    let functionHandler=(state,action)=>{
        switch(action.type){
            case "INCRESE":
                return {count:state.count+1};
            case "DECRESE":
                return {count:state.count-1}
                default:
                    return state;
            
        }

    }
    const[state,dispatch]=useReducer(functionHandler,{count:0})

  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:"INCRESE"})}>+</button>
        <button onClick={()=>dispatch({type:"DECRESE"})}>-</button>
    </div>
  )
}

export default UseReducers;