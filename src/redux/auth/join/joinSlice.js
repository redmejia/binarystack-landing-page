import { createSlice } from "@reduxjs/toolkit";

const joinSlice = createSlice({
    name: 'join',
    initialState: {
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
        }
    }
})

export default joinSlice.reducer;

const { joinBS } = joinSlice.actions;

export const addnewStudent = (info) => (dispatch)=> {
    dispatch(joinBS(info))
}