import { configureStore } from '@reduxjs/toolkit'
import { createOffer, otpMessage, dashboardData, verifyOtpReducer, signupData } from "./reducers/user.reducers";
import signupReducer from './feature/loginSlice';
export const appStore = configureStore({
    reducer: {
    signup: signupReducer,
    otpMessage,
    verifyOtp: verifyOtpReducer,
    dashboardData,
    signupData,
    createOffer
    }
})

