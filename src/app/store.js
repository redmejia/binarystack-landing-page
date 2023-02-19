import { configureStore } from "@reduxjs/toolkit";
import joinSlice from "../redux/auth/join/joinSlice";
import signinSlice from "../redux/auth/signin/signinSlice";

export default configureStore({
    reducer :{
        join : joinSlice,
        signin : signinSlice,
    }
})