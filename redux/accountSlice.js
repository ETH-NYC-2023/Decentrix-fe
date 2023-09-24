import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  accountAddress: "",
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    accountInfo: (state,action) => {
        console.log('sfkvjnfejv')
        console.log(action.payload)
      state.accountAddress=action.payload
    }
  },
})


export const { accountInfo } = accountSlice.actions
export default accountSlice.reducer