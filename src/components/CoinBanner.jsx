/* eslint-disable */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { viewDetail } from '../redux/coins/coinsSlice'
import { RxExternalLink } from 'react-icons/rx'

const CoinBanner = ({color, icon, name, id}) => {
const dispatch = useDispatch()
  return (
   
      <Link to='detail' onClick={()=>dispatch(viewDetail(id)) } style={{ backgroundColor:`${color + '50'}`, backgroundImage:`url(${icon})`}} className='banner'><div className='ban-content'><p>{name}</p><span><RxExternalLink/></span></div></Link>
   
  )
}

export default CoinBanner
