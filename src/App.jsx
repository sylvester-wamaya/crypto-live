
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import CoinCard from "./components/CoinCard"
import { useSelector } from "react-redux"




function App() {

const {coins} = useSelector((store)=>store.coins)


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {
          coins.map((coin)=>(
            <Route path={`${coin.symbol}`} element={<CoinCard />} />
          ))
        }
       
      </Routes>

    </>
  )
}

export default App
