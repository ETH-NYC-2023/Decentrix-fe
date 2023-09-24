import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state,action) => {
        console.log('sfkvjnfejv')
        console.log(action.payload)
      state.items.push(action.payload)
    },
    removefromcart: (state, action) => {
        const index = state.items.indexOf(action.payload);
        state.items.splice(index,1)
    },
  },
})

export const { addtocart, removefromcart } = cartSlice.actions
export default cartSlice.reducer