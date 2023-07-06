
import coinsReducer, { fetchCoins } from "../redux/coins/coinsSlice"
 let state = null
test('test coins reducer for pending', ()=>{    
    state = coinsReducer(undefined, fetchCoins.pending())
    expect(state.isLoading).toBe(true)
})
test('test coins reducer for fulfilled', ()=>{   
    state = coinsReducer(undefined, fetchCoins.fulfilled())
    expect(state.isLoading).toBe(false)
})
test('test coins reducer for rejected', ()=>{    
    state = coinsReducer(undefined, fetchCoins.rejected())
    expect(state.isLoading).toBe(false)
})