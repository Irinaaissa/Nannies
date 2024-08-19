import { createSlice } from "@reduxjs/toolkit";

// Функція для отримання параметрів сортування
const getSortParam = (filter) => {
  let sort = {}; // Змінено на let для можливості змінювати об'єкт
  switch (filter) {
    case "a":
      sort = { name: 1 };
      break;
    case "z":
      sort = { name: -1 };
      break;
    case "popular":
      sort = { rating: -1 };
      break;
    case "not":
      sort = { rating: 1 };
      break;
    default:
      sort = { name: 1 }; // За замовчуванням, сортування за іменем у зростаючому порядку
      break;
  }
  return sort;
};

// Функція для отримання параметрів фільтрації
const getQueryParams = (filter) => {
  let query = {}; // Змінено на let для можливості змінювати об'єкт
  switch (filter) {
    case "greater":
      query = { price_per_hour: { $gt: 10 } };
      break;
    case "less":
      query = { price_per_hour: { $lt: 10 } };
      break;
    default:
      query = {}; // Порожній об'єкт за замовчуванням
      break;
  }
  return query;
};

// Створення слайсу фільтрів
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: "a",
    query: {},
    sort: { name: 1 }, // Значення за замовчуванням для сортування
  },
  reducers: {
    // Редуктор для оновлення фільтрів
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.sort = getSortParam(action.payload); // Оновлюємо параметри сортування
      state.query = getQueryParams(action.payload); // Оновлюємо параметри фільтрації
    },
  },
});

// Експортуємо дії та редуктор
export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;