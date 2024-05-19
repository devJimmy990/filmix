const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            fName: "",
            lName: "",
            email: "",
            phone: "",
            age: 0,
            isLogged: false
        },
    },
    reducers: {
        setUserData: (state, action) => {
            state.user = {
                ...action.payload,
                isLogged: true
            }
        },
        resetUserData: (state, action) => {
            state.user = {
                uid: "",
                name: "",
                email: "",
                phone: "",
                age: 0,
                isLogged: false
            };
        },
    }
});


export default userSlice.reducer
export const { setUserData, resetUserData } = userSlice.actions