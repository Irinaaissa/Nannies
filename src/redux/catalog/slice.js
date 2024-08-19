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
        filter: "a", 
        favorites: [],
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
      addToFavorite(state, action) {
        const nannyId = action.payload;
        state.favorites.push(nannyId);
        
    },
    deleteFromFavorite(state, action) {
        const nannyId = action.payload;
        state.favorites = state.favorites.filter(id => id !== nannyId);
        
    }
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
       
          state.error = true;
          state.loading = false;
        })
        
        
  });

  export const nanniesReducer = nanniesSlice.reducer;
  export const {
    setPage, incrementPage, resetItems, resetPage,setFilter,addToFavorite,deleteFromFavorite
  } = nanniesSlice.actions;