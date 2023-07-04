/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const url = 'https://api.coinranking.com/v2/coins'

const initialState = {
    coins: [],
    isLoading : false,
    error: null
}

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async()=>{
try
    {    
    const res = await fetch(url)
    const resData = await res.json()
    //const coinsData = await resData.data.coins
    return resData.data.coins
    }catch(err){
        return err.messege
    }
})



const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

    },
    extraReducers(build){
        build
        .addCase(fetchCoins.pending, (state)=>({
            ...state,
            isLoading: true
        }))
        .addCase(fetchCoins.fulfilled, (state, action)=>({
            ...state,
            coins: action.payload,
            isLoading: false
        }))
        .addCase(fetchCoins.rejected, (state, action)=>({
            ...state,
            error: action.error.message,
            isLoading: false
        }))
    }

})

export default coinsSlice.reducer