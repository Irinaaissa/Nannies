export const selectNannies = (state) => state.nannies.items;
export const selectLoading = (state) => state.nannies.loading ;
export const selectError = (state) => state.nannies.error ;
export const selectCurrentPage = (state) => state.nannies.currentPage ;
export const selectPerPage = (state) => state.nannies.perPage ;
export const selectTotalItems = (state) => state.nannies.totalItems;
export const selectTotalPages = (state) => state.nannies.totalPages;
export const selectFavoriteIds=(state)=>state.nannies.favorites;
// export const selectCatalogs =(state) => state.catalogs.items;