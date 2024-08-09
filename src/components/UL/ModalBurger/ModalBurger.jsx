// import React from 'react';
// import css from "./ModalBurger.module.css";
// import { RiCloseLine } from "react-icons/ri";
// import AppNav from '../../AppNav/AppNav';
// import UserMenu from '../../UserMenu/UserMenu';

// export default function ModalBurger({ handleModalClose }) {
//   const handleCloseModal = () => {
//     handleModalClose();
//   };

//   return (
//     <div className={css.fixedOverlay} onClick={handleCloseModal}>
//       <div className={css.modalContainer} onClick={e => e.stopPropagation()}>
//         <button className={css.btnClose} type="button" onClick={handleCloseModal}>
//           <RiCloseLine className={css.riCloseLine}/>
//         </button>
//         <AppNav isModalOpen={true} closeModal={handleModalClose} />
//         <UserMenu isModalOpen={true} />
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import css from "./ModalBurger.module.css";
import { RiCloseLine } from "react-icons/ri";
import AppNav from '../../AppNav/AppNav';
import UserMenu from '../../UserMenu/UserMenu';

export default function ModalBurger({ handleModalClose }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleCloseModal = () => {
    handleModalClose();
  };

  const handleUserMenuOpen = () => {
    setShowUserMenu(true);
  };

  const handleUserMenuClose = () => {
    setShowUserMenu(false);
    handleCloseModal();
  };

  return (
    <div className={css.fixedOverlay} onClick={handleCloseModal}>
      <div className={css.modalContainer} onClick={e => e.stopPropagation()}>
        <button className={css.btnClose} type="button" onClick={handleCloseModal}>
          <RiCloseLine className={css.riCloseLine} />
        </button>
        {!showUserMenu ? (
          <>
            <AppNav isModalOpen={true} closeModal={handleCloseModal} />
            <UserMenu isModalOpen={true} onUserMenuOpen={handleUserMenuOpen} />
          </>
        ) : (
          <UserMenu isModalOpen={true} handleModalClose={handleUserMenuClose} />
        )}
      </div>
    </div>
  );
}
