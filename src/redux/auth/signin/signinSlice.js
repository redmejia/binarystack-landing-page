import { createSlice } from "@reduxjs/toolkit";


const signinSlice = createSlice({
    name: 'signin',
    initialState: {
        isSignin: false,
        studentSignin: {
            // signin : false, 
            email: '',
            password: ''
        }
    },

    reducers: {
        signinBS: (state, action) => {
            state.studentSignin = action.payload
        },
        signinAuth: (state, action) => {
            state.isSignin = action.payload.isSignin
        }
    }
})

export default signinSlice.reducer;

const { signinBS, signinAuth } = signinSlice.actions;

export const signinCredential = (auth) => (dispatch) => {
    dispatch(signinBS(auth))
}
export const changeSigninAuthStatus = (auth) => (dispatch) => {
    dispatch(signinAuth(auth))
}