import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./slices/favourite";

export default store = configureStore({
    reducer: {
        favourite: favouriteSlice,
    },
})