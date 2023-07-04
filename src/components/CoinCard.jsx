/* eslint-disable */
import React from 'react'

const CoinCard = () => {
    const {coins} = useSelector((store)=>store.coins)

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
   
        coins.map((coin)=>{
        if(coins.indexOf(coin)===0){
          return   (      
          <div style={{width:'300px', height:'300px', backgroundColor:`${coin.color + '50'}`}}>
           <img style={{width:'30%', height:'auto'}} src={coin.iconUrl}/>
           <p>Name: {coin.name} <span>{coin.symbol}</span></p> 
           <p>{new Date().toLocaleString()}</p>
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
            )
        }

      })
   
   
  
}

export default CoinCard
