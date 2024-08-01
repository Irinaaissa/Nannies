import React from 'react';
import css from "./ModalBurger.module.css";
import { RiCloseLine } from "react-icons/ri";
import AppNav from '../../AppNav/AppNav';

export default function ModalBurger({ handleModalClose }) {

  const handleCloseModal = () => {
    handleModalClose();
  };

  return (
    <div className={css.fixedOverlay} onClick={handleModalClose}>
      
        <div className={css.modalContainer}>
        
          <button className={css.btn} type="button" onClick={handleCloseModal}>
            <RiCloseLine />
          </button>
          <AppNav />
        </div>
      
    </div>
  );
}
