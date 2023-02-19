import { createSlice } from "@reduxjs/toolkit";


const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        plan: []
    },
    reducers : {
        purchaseCourse : (state, action) => {
            state.plan.push(action.payload)
        }
    }
})

export default coursesSlice.reducer;

const { purchaseCourse } = coursesSlice.actions;

export const addAndPurchaseCourse = (course) => (dispatch) => {
    dispatch(purchaseCourse(course))
}