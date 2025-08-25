import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesSlice";

const store = configureStore({
  reducer: {
    favouritesMeals: favouritesReducer
  }
});

export default store;