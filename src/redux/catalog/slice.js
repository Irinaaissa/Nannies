import { createSlice } from '@reduxjs/toolkit';
import { fetchNanniesPage
   } from './operations';

const nanniesSlice = createSlice({
    name: "nannies",
    initialState: {
       items: [], 
       loading: false,
        error: null,
        perPage: 4,
        currentPage: 1,
        filter: "all", 
    },
    reducers: {
        incrementPage(state) {
            
            state.currentPage++;
        },
        resetPage(state) {
            state.currentPage = 1;
            state.items = [];
        },
        setPage(state, action) {
            state.currentPage = action.payload;
        },
        resetItems(state) {
            state.items = [];
        },
        setFilter(state, action) {
          
          state.filter = action.payload; // Оновлюємо filter
      },
    },
    extraReducers: (builder) =>
      builder
        .addCase(fetchNanniesPage.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(fetchNanniesPage.fulfilled, (state, action) => {
          state.loading = false;
         
          const newItems = action.payload.filter(
              newItem => !state.items.some(item => item.id === newItem.id)
          );
          state.items = [...state.items, ...newItems];
      })
        .addCase(fetchNanniesPage.rejected, (state, action) => {
          c
          state.error = true;
          state.loading = false;
        })
        
        
  });

  export const nanniesReducer = nanniesSlice.reducer;
  export const {
    setPage, incrementPage, resetItems, resetPage,setFilter
  } = nanniesSlice.actions;
