/* eslint-disable */
import React, { useEffect, useState } from 'react'
import CoinCard from './CoinBanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins } from '../redux/coins/coinsSlice'



const Home = () => {
  const [search, setSearch] = useState('')
   const {coins} = useSelector((store)=>store.coins)
   const dispatch = useDispatch()
 useEffect(()=>{
    if(coins.length === 0){
      dispatch(fetchCoins())
    }
 },[dispatch, coins])
 const filteredCoins = coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase())||coin.symbol.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
  <input type='text' name='name' placeholder='search a coin...' onChange={(e)=>setSearch(e.target.value)}/>
    <div className='grid'>
   
      { 
filteredCoins.map((coin)=>(
  <CoinCard color={coin.color} icon={coin.iconUrl} name={coin.name} symbol={coin.symbol} key={coin.uuid}/> 
    
    
))
 }
    </div> 
    </>
  )
}

export default Home 
