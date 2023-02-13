import { configureStore } from "@reduxjs/toolkit";
import joinSlice from "../redux/auth/join/joinSlice";
export default configureStore({
    reducer :{
        join : joinSlice,
    }
})