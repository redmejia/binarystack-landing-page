import { configureStore } from "@reduxjs/toolkit";
import joinSlice from "../redux/auth/join/joinSlice";
import signinSlice from "../redux/auth/signin/signinSlice";
import courseSlice from "../redux/course/courseSlice";

export default configureStore({
    reducer :{
        join : joinSlice,
        signin : signinSlice,
        course : courseSlice,
    }
})