import {configureStore} from '@reduxjs/toolkit'
import coinsReducer from '.coins/coinsSlice.jsx'

const store = configureStore({
    reducer: {
        coins: coinsReducer
    }
})