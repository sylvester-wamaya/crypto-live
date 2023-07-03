/* eslint-disable */
import React, { useEffect, useState } from 'react'
import CoinCard from './CoinBanner'


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
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
  return (
    <>
    {
      coins.map((coin)=>{
        if(coins.indexOf(coin)===0){
          return         <div style={{width:'300px', height:'300px', backgroundColor:`${coin.color + '50'}`}}>
           <img style={{width:'30%', height:'auto'}} src={coin.iconUrl}/>
           <p>Name: {coin.name}</p> 
            <p>Rank: #{coin.rank}</p>
            <p>Current price: {formatter.format(coin.price)}</p>
            <p> Change: {coin.change}%</p>
            <p>Market Cap: {formatter.format(coin.marketCap)}</p>
            <p>Listed Date: {new Date(coin.listedAt*1000).toLocaleString("en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })}</p>

            </div>
        }

      })
    }

    <div className='grid'>
      { /*
coins.map((coin)=>(
  <CoinCard color={coin.color} icon={coin.iconUrl} name={coin.name} key={coin.uuid}/> 
    
    
))
*/ }
    </div> 
    </>
  )
}

export default Home
