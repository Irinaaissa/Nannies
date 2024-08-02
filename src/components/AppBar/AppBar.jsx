import AppNav from "../AppNav/AppNav";
import css from "./AppBar.module.css";
import { useState } from "react";
import ModalBurger from "../UL/ModalBurger/ModalBurger";
import { TfiAlignCenter } from "react-icons/tfi";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
    console.log("Modal opened, isModalActive:", true);
  };

  const handleModalClose = () => {
    setModalActive(false);
    console.log("Modal closed, isModalActive:", false);
  };

  return (
    <header className={css.headerContainer}>
      <div className={css.header}>
        <h2>Nanny.Services</h2>
        <button className={css.iconButton} type="button" onClick={handleModalOpen}>
          <TfiAlignCenter className={css.icon} />
        </button>
        <AppNav isModalOpen={isModalActive} />
        <UserMenu />
      </div>
      {isModalActive && <ModalBurger handleModalClose={handleModalClose} />}
    </header>
  );
}
