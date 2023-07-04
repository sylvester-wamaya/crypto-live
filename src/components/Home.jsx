/* eslint-disable */
import React, { useEffect, useState } from 'react'
import CoinBanner from './CoinBanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins } from '../redux/coins/coinsSlice'



const Home = () => {
  const [search, setSearch] = useState('')
  const { coins, isLoading, error } = useSelector((store) => store.coins)
  const dispatch = useDispatch()
  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins())
    }
  }, [dispatch, coins])
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))
if(isLoading){
  return <h2>Loanding...</h2>
}
else if(!filteredCoins){
  return <h3>Oops no Coins!!!</h3>
}
else if(error){
  return <p>{error}</p>
}
  return (
    <>
      <div className='input'>
        <label>Search: </label>
      <input type='text' name='name' placeholder='Enter a coin...' onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className='grid'>

        {
          filteredCoins.map((coin) => (
            <CoinBanner color={coin.color} icon={coin.iconUrl} name={coin.name} symbol={coin.symbol} id={coin.uuid} key={coin.uuid} />


          ))
        }
      </div>
    </>
  )
}

export default Home 
