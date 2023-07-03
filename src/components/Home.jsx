import React, { useEffect, useState } from 'react'


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
   
    <div style={{width:'100px', height:'100px', backgroundColor:`${coin.color}`, backgroundImage:`url(${coin.iconUrl})`,backgroundSize:'contain'}}>{coin.name}</div>
    
))
      }
    </div>
  )
}

export default Home
