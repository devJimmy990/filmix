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
        setUserData: (state, action) => {
            state.user = {
                uid: "",
                fName: "Muhammed",
                lName: "Gamal",
                email: "jimmy99r@gmail.com",
                phone: "01289223643",
                age: 25,
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