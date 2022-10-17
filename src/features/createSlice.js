import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
    name: "room",
    initialState: {value: {name: "", checkindate:"", checkoutdate:""}},
    reducers: {
        setRoom: (state, action) => {
                state.value = action.payload
        }
    }
})

export const {setRoom} = roomSlice.actions

export default roomSlice.reducer