import { createSlice } from "@reduxjs/toolkit";

const joinSlice = createSlice({
    name: 'join',
    initialState: {
        isRegister : false, 
        newStudent: {
            plan: {
                planId : 0,
                planPay: "",
                planType: "",
                planPrice: 0,
            },
            // student info
            student: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                cardName: "",
                cardNumber: "",
                cardCvv: "",
            }
        }
    },
    reducers: {
        joinBS: (state, action) => {
            state.newStudent = action.payload
        },
        authStatus : (state, action) => {
            state.isRegister = action.payload.isRegister
        }
    }
})

export default joinSlice.reducer;

const { joinBS, authStatus } = joinSlice.actions;

export const addnewStudent = (info) => (dispatch)=> {
    dispatch(joinBS(info))
}

// new student jon binary stack
export const changeAuthNewStudent = (auth) => (dispatch) => {
    dispatch(authStatus(auth))
}