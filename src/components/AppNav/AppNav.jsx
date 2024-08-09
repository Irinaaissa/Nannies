// import { NavLink } from "react-router-dom";
// import css from "./AppNav.module.css";
// import clsx from "clsx";

// const classItem = ({ isActive }) => {
//   return clsx(css.item, isActive && css.active);
// };

// export default function AppNav({ isModalOpen, closeModal }) {
//   const navClassName = isModalOpen ? css.modalNav : css.nav;

//   const handleClick = () => {
//     if (isModalOpen) {
//       closeModal();
//     }
//   };

//   return (
//     <nav className={clsx(navClassName)}>
//       <NavLink className={classItem} to="/" onClick={handleClick}>
//         Home
//       </NavLink>
//       <NavLink className={classItem} to="/nannies" onClick={handleClick}>
//         Nannies
//       </NavLink>
//       <NavLink className={classItem} to="/favorites" onClick={handleClick}>
//         Favorites
//       </NavLink>
//     </nav>
//   );
// }

import { NavLink } from "react-router-dom";
import css from "./AppNav.module.css";
import clsx from "clsx";

const classItem = ({ isActive }) => {
  return clsx(css.item, isActive && css.active);
};

export default function AppNav({ isModalOpen, closeModal }) {
  const navClassName = isModalOpen ? css.modalNav : css.nav;

  const handleClick = () => {
    if (isModalOpen) {
      closeModal();
    }
  };

  return (
    <nav className={clsx(navClassName)}>
      <NavLink className={classItem} to="/" onClick={handleClick}>
        Home
      </NavLink>
      <NavLink className={classItem} to="/nannies" onClick={handleClick}>
        Nannies
      </NavLink>
      <NavLink className={classItem} to="/favorites" onClick={handleClick}>
        Favorites
      </NavLink>
    </nav>
  );
}
