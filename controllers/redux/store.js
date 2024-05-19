import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./slices/favourite";
import userSlice from "./slices/user";

export default store = configureStore({
    reducer: {
        favourite: favouriteSlice,
        user: userSlice,
    },
})