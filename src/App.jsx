/* eslint-disable */
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import CoinCard from "./components/CoinCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCoins, filterCoins, getTotal } from "./redux/coins/coinsSlice"




function App() {

const dispatch = useDispatch()
dispatch(getTotal())

const {coins} = useSelector((store)=>store.coins)


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {
          coins.map((coin)=>(
            <Route path={`${coin.symbol}`} element={<CoinCard/>}  key={coin.symbol}/>
          ))
        }
       
      </Routes>

    </>
  )
}

export default App
