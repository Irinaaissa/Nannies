import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b63f03b5ae2d11eb665c74.mockapi.io";

export const fetchNanniesPage = createAsyncThunk(
  "nannies/fetchAll",
  async ({ perPage, currentPage, filterParams }, thunkAPI) => {
    try {
      const sortField = Object.keys(filterParams.sort)[0] || 'name';
      const sortOrder = Object.values(filterParams.sort)[0] === 1 ? 'asc' : 'desc';
      
      const response = await axios.get("/nannies", {
        params: {
          limit: perPage,
          page: currentPage,
          // Параметри фільтрації
          ...filterParams.query,
          // Сортування
          sortBy: sortField,
          order: sortOrder
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);