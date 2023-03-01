import { createSlice } from "@reduxjs/toolkit";


const courseSlice = createSlice({
    name: 'course',
    initialState: {
        add: true,
        plan: {
            course: [],
            // myCourse : []
        },
        course: []
    },
    reducers: {
        purchaseCourse: (state, action) => {
            state.plan.course.push(action.payload)
        },
        loadCourse: (state, action) => {
            // console.log("this action", action.payload);
            // console.log("this is state ",state.plan.course);
            // const t = state.plan.course.filter(course => course.courseId === action.payload)
            // console.log("this is t ",t);
            state.plan.course.filter(course => course.courseId === action.payload)
            // state.course = state.plan.course.filter(course => course.courseId === action.payload)
        }
    }
})


export default courseSlice.reducer;

const { purchaseCourse, loadCourse } = courseSlice.actions;

export const addAndPurchaseCourse = (course) => (dispatch) => {
    dispatch(purchaseCourse(course))
}

export const loadCourseById = (id) => (dispatch) => {
    console.log("the id ", id);
    dispatch(loadCourse(id))
}
