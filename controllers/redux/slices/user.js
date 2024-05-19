const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            uid: "",
            fName: "",
            lName: "",
            email: "",
            phone: "",
            age: 0,
            isLogged: false
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.user = { ...action.payload, isLogged: true }
        },
        resetUser: (state, action) => {
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
export const { setUser, resetUser } = userSlice.actions