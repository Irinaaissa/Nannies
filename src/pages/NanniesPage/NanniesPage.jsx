import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nannies from "../../components/Nannies/Nannies";
import css from "./NanniesPage.module.css";
import Filters from "../../components/UL/Filters/Filters";
import { selectFilter } from '../../redux/filters/selectors'; // Селектор для фільтра
import { setFilter } from '../../redux/filters/slice'; // Дія для оновлення фільтра

export default function NanniesPage() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  useEffect(() => {
    // Ви можете тут виконати додаткові дії, якщо потрібно
  }, [filter, dispatch]);

  return (
    <div className={css.container}>
      <Filters currentFilter={filter} onFilterChange={handleFilterChange} />
      <Nannies />
    </div>
  );
}
