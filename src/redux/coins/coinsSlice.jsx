/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    coins: [],
    isLoading : false,
}
const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

    }

})

export default coinsSlice.reducer