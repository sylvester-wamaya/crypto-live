/* eslint-disable */
import { Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { useEffect } from "react"
import { fetchCoins } from "./redux/coins/coinsSlice"
import { useDispatch } from "react-redux"


function App() {
  
const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(fetchCoins())
 },[dispatch])


  return (
    <>
  
    <Navbar/>
    <Home/>
  
    </>
  )
}

export default App
