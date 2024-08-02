import { NavLink } from "react-router-dom";
import css from "./AppNav.module.css";
import clsx from "clsx";

// Функція для визначення класу активного елемента меню
const classItem = ({ isActive }) => {
  return clsx(css.item, isActive && css.active);
};

export default function AppNav({ isModalOpen }) {
  console.log("isModalOpen:", isModalOpen);
  // Вибір класу в залежності від значення isModalOpen
  const navClassName = isModalOpen ? css.modalNav : css.nav;

  return (
    <nav className={clsx(navClassName)}>
      <NavLink className={classItem} to="/">
        Home
      </NavLink>
      <NavLink className={classItem} to="/nannies">
        Nannies
      </NavLink>
      <NavLink className={classItem} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
}
