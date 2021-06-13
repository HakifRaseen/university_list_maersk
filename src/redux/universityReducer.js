import { createSlice } from "@reduxjs/toolkit";
const universityReducer = createSlice({
  name: "universityList",
  initialState: [],
  reducers: {
    create: {
      reducer(state, { payload }) {
        state.push({ universityList: payload.universityList });
      },
      prepare(list) {
        return {
          payload: {
            universityList: list,
          },
        };
      },
    },
  },
});
const { actions, reducer } = universityReducer;
export const { create } = actions;
export default reducer;
