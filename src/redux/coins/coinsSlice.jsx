
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const url = 'https://api.coinranking.com/v2/coins'

const initialState = {
    coins: [],
    isLoading : false,
    error: null,
    selectedCoin: null,
    summary: {}
}

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async()=>{
try
    {    
    const res = await fetch(url)
    const resData = await res.json()
    return resData.data
    }catch(err){
        return err.messege
    }
})



const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        viewDetail:(state, action)=>{
            state.selectedCoin = action.payload
        }
    },
    extraReducers(build){
        build
        .addCase(fetchCoins.pending, (state)=>({
            ...state,
            isLoading: true
        }))
        .addCase(fetchCoins.fulfilled, (state, action)=>({
            ...state,
            coins: action.payload.coins,
            summary: action.payload.stats,
            isLoading: false
        }))
        .addCase(fetchCoins.rejected, (state, action)=>({
            ...state,
            error: action.error.message,
            isLoading: false
        }))
    }

})
export const {viewDetail} = coinsSlice.actions
export default coinsSlice.reducer