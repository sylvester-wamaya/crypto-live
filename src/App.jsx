/* eslint-disable */
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import CoinCard from "./components/CoinCard"




function App() {




  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<CoinCard />} />
      </Routes>

    </>
  )
}

export default App
