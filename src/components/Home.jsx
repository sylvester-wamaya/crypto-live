/*eslint-disable */
import { useEffect, useState } from 'react'
import CoinBanner from './CoinBanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins, filterCoins } from '../redux/coins/coinsSlice'
import { formatter } from './CoinCard'



const Home = () => {
  const { coins, isLoading, error, filteredCoins, summary } = useSelector((store) => store.coins)
  const dispatch = useDispatch()
  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins())
    }
  }, [dispatch, coins])


  function sumCoin(){let sumCoins = 0
  for(let i = 0; i<state.filteredCoins.length; i++){
       sumCoins += 1
   }
      state.summary.totalCoins = sumCoins
 }
  console.log(summary)

if(isLoading){
  return <h2>Loanding...</h2>
}
if(error){
  return <p>{error}</p>
}
  return (
    <>

    {
      Object.keys(summary).length !== 0 ? (
      <div className='summary'>
        <p>Total coins: <span>{summary.totalCoins > 0 ? summary.totalCoins.toLocaleString("en-US") : 0}</span></p>
        <p>Total Market cap: <span>{formatter.format(summary.totalMarketCap)}</span></p>
      </div>
      ) : ''
}
<div className='input'>
      <input type='text' name='name' placeholder='type to search...' onChange={(e) =>( 
        dispatch(filterCoins(e.target.value))
        )} />
      </div>
      {
         filteredCoins.length === 0 ? <h3>Oops no Coins!!!</h3> : (
        
      <div className='grid'>

        {
          filteredCoins.map((coin) => (
            <CoinBanner color={coin.color} icon={coin.iconUrl} name={coin.name} symbol={coin.symbol} id={coin.uuid} key={coin.uuid} />


          ))
        }
      </div>)
      }
    </>
  )
}

export default Home 
