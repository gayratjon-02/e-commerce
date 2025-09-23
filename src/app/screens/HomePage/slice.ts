import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
  flashSales: [],
  bestSellingProducts: [],
  newProducts: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setFlashSales: (state, action) => {
      state.flashSales = action.payload;
    },

    setBestSellingProducts: (state, action) => {
      state.bestSellingProducts = action.payload;
    },

    setNewProducts: (state, action) => {
      state.newProducts = action.payload;
    },
  },
});

export const { setBestSellingProducts, setFlashSales, setNewProducts } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
