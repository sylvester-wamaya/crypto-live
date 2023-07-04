/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';

const CoinCard = () => {
  const { selectedCoin, coins } = useSelector((store) => store.coins)
  console.log(selectedCoin)
  const coinArray = coins.filter((coin)=> coin.uuid === selectedCoin)
  const coin = coinArray[0]
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  console.log(coin)
if(!coin){
  return <p>Loading...</p>
}
 
      return (
        <div style={{ width: '300px', height: '300px', backgroundColor: `${coin.color + '50'}` }}>
          <img style={{ width: '30%', height: 'auto' }} src={coin.iconUrl} />
          <p>Name: {coin.name} <span>{coin.symbol}</span></p>
          <p>{new Date().toLocaleString()}</p>
          <p>Rank: #{coin.rank}</p>
          <p>Current price: {formatter.format(coin.price)}</p>
          <p> Change: {coin.change}%</p>
          <p>Market Cap: {formatter.format(coin.marketCap)}</p>
          <p>Listed Date: {new Date(coin.listedAt * 1000).toLocaleString("en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}</p>

        </div>
      )
    




}

export default CoinCard
