import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './feature/SignupSlice';
export const appStore = configureStore({
    reducer: {
    signup: signupReducer,
    }
})

