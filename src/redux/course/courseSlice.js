import { createSlice } from "@reduxjs/toolkit";


const courseSlice = createSlice({
    name: 'course',
    initialState: {
        add: true,
        plan: {
            course: [],
        },
    },
    reducers: {
        purchaseCourse: (state, action) => {
            state.plan.course.push(action.payload)
        },
       
    }
})


export default courseSlice.reducer;

const { purchaseCourse, loadCourse } = courseSlice.actions;

export const addAndPurchaseCourse = (course) => (dispatch) => {
    dispatch(purchaseCourse(course))
}

