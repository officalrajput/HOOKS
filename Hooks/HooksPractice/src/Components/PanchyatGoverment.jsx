import React, { useContext } from 'react'
import MyContext from './Context/MyContext'

const PanchyatGoverment = () => {
  let data=useContext(MyContext)
  return (
    <div>PanchyatGoverment
        <h1>{data.yojana.narega}</h1>
        <h2>{data.yojana.work}</h2>
        <h3>{data.yojana.pansion}</h3>
    </div>
  )
}

export default PanchyatGoverment