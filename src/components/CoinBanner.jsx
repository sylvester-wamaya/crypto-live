/* eslint-disable */
import React from 'react'

const CoinCard = ({color, icon, name}) => {

  return (
   
      <a  href='#' style={{width:'100%', height:'50vw', backgroundColor:`${color + '50'}`, backgroundImage:`url(${icon})`,backgroundSize:'contain'}}>{name}</a>
   
  )
}

export default CoinCard
