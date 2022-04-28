import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'

const initialState = {
    userData: {},
    otpNumber: '',
    otpSuccess: null
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
      addUserData:(state, action) =>{
        state['userData'] = action.payload;
      }
    },
    extraReducers(builder) {
        builder
          .addCase(getOtpCode.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(getOtpCode.fulfilled, (state, action) => {
            state.otpSuccess = state.otpMessage(action.payload);
            state.status = 'success'
          })
          .addCase(getOtpCode.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          }
          )
    }
  })

  export const getOtpCode = createAsyncThunk('otp/getOtp', async (data) => {
    const response = await api.post('/account/create_totp_phone', {phone: data})
    return response.data
  })

  export const { addUserData } = signupSlice.actions
  export default signupSlice.reducer;