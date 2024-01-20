import React from 'react'
import StateGoverment from './StateGoverment'
import MyStateContext from './Context/MyStateContext'

const IndianGoverment = () => {
  return (
    <MyStateContext>
    <div>
        IndianGoverment
        <StateGoverment></StateGoverment>
   

    </div>
    </MyStateContext>
  )
}

export default IndianGoverment