import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sliderPlay: true
}

const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        getSliderValue: (state, action) => {
            state.sliderPlay = action.payload
        }
    }
})

export const { getSliderValue } = sliderSlice.actions;
export default sliderSlice.reducer;