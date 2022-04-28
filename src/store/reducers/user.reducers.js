import { constants } from "../userConstants/userConstants";

// const initialState = {userDetails: ''};

export const userLogin = (state = {}, action) => {
    switch (action.type) {
        case constants.USER_LOGIN_REQUEST:
            return { ...state, loginRequest: true };
        case constants.USER_LOGIN_SUCCESS:
            return {
                ...state, userDetails: action.payload, loginRequest: false
            }
        case constants.USER_LOGIN_FAILURE:
            return {
                ...state, loginError: action.payload, loginRequest: false
            }
        default:
            return state;
    }
}
export const otpMessage = (state = { otpRequested: null, otpMessage: null, otpFail: false }, action) => {
    switch (action.type) {
        case constants.USER_OTP_REQUEST:
            return { otpMessage: false, otpRequested: true }
        case constants.USER_OTP_SUCCESS:
            return { otpRequest: false, otpMessage: action.payload }
        case constants.USER_OTP_FAILURE:
            return { otpRequest: false, otpFail: action.payload }
        default:
            return state;
    }
}
export const verifyOtpReducer = (state = { verifyRequested: null, verifySuccess: null, verifyFail: null }, action) => {
    switch (action.type) {
        case constants.USER_OTP_VERIFY_REQUEST:
            return {
                ...state,
                verifyRequested: true
            }
        case constants.USER_OTP_VERIFY_SUCCESS:
            return {
                ...state,
                verifySuccess: action.payload,
                verifyRequested: false
            }
        case constants.USER_OTP_VERIFY_FAILURE:
            return {
                ...state,
                verifyFail: action.payload,
                verifyRequested: false
            }

        default:
            return state;
    }
}
export const dashboardData = (state = { dshDataRequest: null, dshData: null, dshDataFail: false }, action) => {
    switch (action.type) {
        case constants.DASHBOARD_DATA_SUCCESS:
            return { dshDataRequest: true, dshData: action.payload }
        case constants.DASHBOARD_DATA_FAILURE:
            return { dshDataRequest: true, dshDataFail: action.payload }
        default:
            return state;
    }
}
export const signupData = (state = { signupRequest: null, signupSuccess: null, signupFail: false }, action) => {
    switch (action.type) {
        case constants.USER_SIGNUP_REQUEST:
            return { signupRequest: true }
        case constants.USER_SIGNUP_FAILURE:
            return { signupFail: action.payload }
        case constants.USER_SIGNUP_SUCCESS:
            return { signupSuccess: action.payload }
        default:
            return state;
    }
}
export const createOffer = (state = { createOfferRequest: null, createOfferSuccess: null, createOfferFail: false }, action) => {
    switch (action.type) {
        case constants.CREATE_LOAN_OFFER_REQUEST:
            return { createOfferRequest: true }
        case constants.CREATE_LOAN_OFFER_FAILURE:
            return { createOfferFail: action.payload }
        case constants.CREATE_LOAN_OFFER_SUCCESS:
            return { createOfferSuccess: action.payload }
        default:
            return state;
    }
}