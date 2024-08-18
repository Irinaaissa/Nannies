import { createSelector } from 'reselect';


export const selectFilterParams = createSelector(
    (state) => state.filters.sort,
    (state) => state.filters.query,
    (sort, query) => ({
      sort: {
        field: Object.keys(sort)[0] || 'name',
        order: Object.values(sort)[0] === 1 ? 'asc' : 'desc',
      },
      query,
    })
  );

// Інші селектори
export const selectFilter = (state) => state.filters.filter;
export const selectSortParam = (state) => state.filters.sort;
export const selectQueryParams = (state) => state.filters.query;
export const selectFiltersState = (state) => state.filters;
