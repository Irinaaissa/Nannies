import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import NanniesList from "../NanniesList/NanniesList";
import css from "./Nannies.module.css";
import {
  selectPerPage,
  selectCurrentPage,
  selectNannies,
  selectError,
  selectLoading,
} from '../../redux/catalog/selectors';
import { selectFilterParams } from '../../redux/filters/selectors';
import { fetchNanniesPage } from '../../redux/catalog/operations';
import { incrementPage } from '../../redux/catalog/slice';

export default function Nannies() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const filterParams = useSelector(selectFilterParams);

  const fetchData = useCallback(() => {
    dispatch(fetchNanniesPage({
      perPage,
      currentPage,
      filterParams
    }));
  }, [dispatch, perPage, currentPage, filterParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  const nannies = useSelector(selectNannies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <NanniesList nannies={nannies} />
      {!loading && nannies.length > 0 && (
        <button onClick={handleLoadMore} className={css.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
}