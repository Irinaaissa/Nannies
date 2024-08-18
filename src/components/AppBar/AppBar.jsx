import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppNav from "../AppNav/AppNav";
import css from "./AppBar.module.css";
import ModalBurger from "../UL/ModalBurger/ModalBurger";
import { TfiAlignCenter } from "react-icons/tfi";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const [isModalActive, setModalActive] = useState(false);
  const location = useLocation(); // Отримуємо поточний шлях
  const isHomePage = location.pathname === "/";

  const handleModalOpen = () => {
    setModalActive(true);
  };
  
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <header className={`${css.headerContainer} ${!isHomePage ? css.accentContainer : ""}`}>
      <div className={`${css.header} ${!isHomePage ? css.accentColor : ""}`}>
        <h2>Nanny.Services</h2>
        <button className={css.iconButton} type="button" onClick={handleModalOpen}>
          <TfiAlignCenter className={css.icon} />
        </button>
        <AppNav isModalOpen={isModalActive} closeModal={handleModalClose} />
        <UserMenu isModalOpen={isModalActive} handleModalClose={handleModalClose}/>
      </div>
      {isModalActive && <ModalBurger handleModalClose={handleModalClose} />}
    </header>
  );
}
