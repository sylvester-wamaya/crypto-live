
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

    {
      Object.keys(summary).length !== 0 ? (
      <div className='summary'>
        <p>Total coins: <span>{summary.total.toLocaleString("en-US")}</span></p>
        <p>Total Market cap: <span>{formatter.format(summary.totalMarketCap)}</span></p>
      </div>
      ) : ''
}
<div className='input'>
      <input type='text' name='name' placeholder='Type to search...' onChange={(e) => setSearch(e.target.value)} />
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
