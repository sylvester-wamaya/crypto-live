/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

const CoinBanner = ({color, icon, name, symbol}) => {

  return (
   
      <Link to={`${symbol}`} style={{width:'100%', height:'50vw', backgroundColor:`${color + '50'}`, backgroundImage:`url(${icon})`,backgroundSize:'contain'}}>{name}</Link>
   
  )
}

export default CoinBanner
