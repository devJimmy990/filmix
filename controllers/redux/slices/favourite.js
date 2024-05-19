const { createSlice } = require("@reduxjs/toolkit");

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        favourites: [],
    },
    reducers: {
        addFavourite: (state, action) => {
            state.favourites.push(action.payload);
        },
        removeFavourite: (state, action) => {
            state.favourites = state.favourites.filter(
                (favourite) => favourite.id !== action.payload
            );
        },
        clearFavourite: (state, action) => {
            state.favourites = [];
        },
        toggleFavourite: (state, action) => {
            if (state.favourites.length === 0)
                state.favourites.push(action.payload);
            else {
                const index = state.favourites.findIndex(
                    (favourite) => favourite.id === action.payload.id);
                index !== -1 ?
                    state.favourites.splice(index, 1)
                    : state.favourites.push(action.payload);
            }
        },
    }
});


export default favouriteSlice.reducer
export const { addFavourite, removeFavourite, toggleFavourite, clearFavourite } = favouriteSlice.actions