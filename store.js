import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import cartSlice from './redux/cartSlice'
import accountSlice from './redux/accountSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartSlice,
    accountName:accountSlice
},
})

