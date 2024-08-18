import { configureStore } from "@reduxjs/toolkit";
import { nanniesReducer } from "./catalog/slice";
import filtersReducer from "./filters/slice"; // Додайте цей імпорт

const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    filters: filtersReducer, // Додайте редуктор filters
  },
});

export default store;
