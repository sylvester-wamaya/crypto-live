/* eslint-disable */
import React from 'react'

const CoinCard = ({color, icon, name}) => {
  return (
   
      <div style={{width:'100px', height:'100px', backgroundColor:`${color}`, backgroundImage:`url(${icon})`,backgroundSize:'contain'}}>{name}</div>
   
  )
}

export default CoinCard
