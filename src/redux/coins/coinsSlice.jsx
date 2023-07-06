
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const url = 'https://api.coinranking.com/v2/coins'

const initialState = {
    coins: [],
    isLoading : false,
    error: null,
    selectedCoin: null,
    filteredCoins: [],
    summary: {
        totalCoins:0,
        totalMarketCap:0
    }
}

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async()=>{
try
    {    
    const res = await fetch(url)
    const resData = await res.json()
    return resData.data.coins
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
        },
         getTotal:(state)=>{
                 let sumCoins = 0
                 let sumMarketCap = 0
                 for(let i = 0; i<state.filteredCoins.length; i++){
                   sumCoins += 1
                   sumMarketCap += state.filteredCoins[i].marketCap*1
               }
                 state.summary.totalCoins = sumCoins
                 state.summary.totalMarketCap = sumMarketCap
             },
            filterCoins:(state, action)=>{
                state.filteredCoins = state.coins.filter((coin) => coin.name.toLowerCase().includes(action.payload.toLowerCase()) || coin.symbol.toLowerCase().includes(action.payload.toLowerCase()))
                },
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
            filteredCoins: action.payload,
            isLoading: false
        }))
        .addCase(fetchCoins.rejected, (state, action)=>({
            ...state,
            error: action.error.message,
            isLoading: false
        }))
    }

})
export const {viewDetail, filterCoins, getTotal} = coinsSlice.actions
export default coinsSlice.reducer