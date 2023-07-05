
import { useEffect, useState } from 'react'
import CoinBanner from './CoinBanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins } from '../redux/coins/coinsSlice'
import { formatter } from './CoinCard'



const Home = () => {
  const [search, setSearch] = useState('')
  const { coins, isLoading, error, summary } = useSelector((store) => store.coins)
  console.log(summary)
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
if(error){
  return <p>{error}</p>
}
  return (
    <>
      <div className='input'>
      <input type='text' name='name' placeholder='Enter a coin...' onChange={(e) => setSearch(e.target.value)} />
      <div>
        <p>Total coins: {formatter.format(summary.total)}</p>
        <p>Total Market cap:  {formatter.format(summary.totalMarketCap)}</p>
      </div>
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
