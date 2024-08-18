import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/filters/slice';
import { selectFilter } from '../../../redux/filters/selectors'; // Переконайтесь, що це правильний шлях
import css from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <div className={css.filters}>
        <p>Filters</p>
        <select value={currentFilter} onChange={handleFilterChange}>
          <option value="a">A to Z</option>
          <option value="z">Z to A</option>
          <option value="less">Less than 10$</option>
          <option value="greater">Greater than 10$</option>
          <option value="popular">Popular</option>
          <option value="not">Not popular</option>
          <option value="all">Show all</option>
        </select>
      </div>
    </div>
  );
}
