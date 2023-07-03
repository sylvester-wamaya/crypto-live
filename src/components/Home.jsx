import React, { useEffect, useState } from 'react'
import CoinCard from './CoinCard'


const Home = () => {
    const [coins, setCoins] = useState([])
useEffect(()=>{
    const fetchData = async()=>{
        try{
    const response = await fetch('https://api.coinranking.com/v2/coins')
    const resdata = await response.json()
    const coinsData = await resdata.data.coins

    setCoins(coinsData)
    }
catch(err){
    console.log(err)
}}
fetchData()
},[setCoins])
console.log(coins)
  return (
    <div>
      {
coins.map((coin)=>(
  <CoinCard color={coin.color} icon={coin.iconUrl} name={coin.name}/> 
    
    
))
      }
    </div>
  )
}

export default Home
