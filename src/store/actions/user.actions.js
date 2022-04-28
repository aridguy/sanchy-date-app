// import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { constants } from "../userConstants/userConstants";


export const getOtpCode = (number) => {
    return (dispatch) => {
        dispatch({ type: constants.USER_OTP_REQUEST })
        return api.post('/account/create_totp_phone', { phone: number })
            .then(res => dispatch({ type: constants.USER_OTP_SUCCESS, payload: res }),
                err => dispatch({ type: constants.USER_OTP_FAILURE, payload: err })
            )
    }
}
export const verifyOtpCode = (data) => {
    return (dispatch) => {
        dispatch({ type: constants.USER_OTP_VERIFY_REQUEST })
        return api.post('/account/verify_totp_phone', data)
            .then(res => dispatch({ type: constants.USER_OTP_VERIFY_SUCCESS, payload: res }),
                err => dispatch({ type: constants.USER_OTP_VERIFY_FAILURE, payload: err })
            )
    }
}
export const userSignup = (data) => {
    return (dispatch) => {
        dispatch({ type: constants.USER_SIGNUP_REQUEST });
        return api.post('/account/lender', data)
            .then(res => dispatch({ type: constants.USER_SIGNUP_SUCCESS, payload: res }),
                err => dispatch({ type: constants.USER_SIGNUP_FAILURE, payload: err })
            )
    }
}
export const userLogin = (userDetails) => {
    return (dispatch) => {
        dispatch({ type: constants.USER_LOGIN_REQUEST });
        return api.post('/account/lender-login', userDetails)
            .then(
                res => {
                    let { data } = res;
                    dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: data });
                    localStorage.setItem('mtdLender', JSON.stringify(res));
                },
                err => dispatch({ type: constants.USER_LOGIN_FAILURE, payload: { err } })
            )
    }
}
export const dashboardData = () => {
    return (dispatch) => {
        dispatch({ type: constants.DASHBOARD_DATA_REQUEST });
        return api.get('/account/lender-dashboard')
            .then(
                res => {
                    let { data } = res;
                    dispatch({ type: constants.DASHBOARD_DATA_SUCCESS, payload: data });
                },
                err => dispatch({ type: constants.DASHBOARD_DATA_FAILURE, payload: err })
            )
    }
}
export const createLoanOffer = (data) => {
    return (dispatch) => {
        dispatch({ type: constants.CREATE_LOAN_OFFER_REQUEST });
        return api.post('/loan/loan-packages', data)
            .then(res => dispatch({ type: constants.CREATE_LOAN_OFFER_SUCCESS, payload: res }),
                err => dispatch({ type: constants.CREATE_LOAN_OFFER_FAILURE, payload: err })
            )
    }
}