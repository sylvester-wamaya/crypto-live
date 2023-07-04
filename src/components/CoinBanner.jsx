/* eslint-disable */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { viewDetail } from '../redux/coins/coinsSlice'

const CoinBanner = ({color, icon, name, id}) => {
const dispatch = useDispatch()
  return (
   
      <Link to='detail' onClick={()=>dispatch(viewDetail(id)) } style={{width:'100%', height:'50vw', backgroundColor:`${color + '50'}`, backgroundImage:`url(${icon})`,backgroundSize:'contain'}}>{name}</Link>
   
  )
}

export default CoinBanner
