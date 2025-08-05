import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    SetId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { SetId } = commonSlice.actions;
export default commonSlice.reducer;
