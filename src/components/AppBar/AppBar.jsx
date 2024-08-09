
// import AppNav from "../AppNav/AppNav";
// import css from "./AppBar.module.css";
// import { useState } from "react";
// import ModalBurger from "../UL/ModalBurger/ModalBurger";
// import { TfiAlignCenter } from "react-icons/tfi";
// import UserMenu from "../UserMenu/UserMenu";

// export default function AppBar() {
//   const [isModalActive, setModalActive] = useState(false);


//   const handleModalOpen = () => {
//     setModalActive(true);
//   };
//   const handleModalClose = () => {
//     setModalActive(false);
//   };

  
//   return (
//     <header className={css.headerContainer}>
//       <div className={css.header}>
//         <h2>Nanny.Services</h2>
//         <button className={css.iconButton} type="button" onClick={handleModalOpen}>
//           <TfiAlignCenter className={css.icon} />
//         </button>
//         <AppNav isModalOpen={isModalActive} />
//         <UserMenu isModalOpen={isModalActive}/>
//       </div>
//       {isModalActive && <ModalBurger handleModalClose={handleModalClose} />}
//     </header>
//   );
// }
// 
// import React, { useState } from 'react';
// import AppNav from "../AppNav/AppNav";
// import css from "./AppBar.module.css";
// import ModalBurger from "../UL/ModalBurger/ModalBurger";
// import { TfiAlignCenter } from "react-icons/tfi";
// import UserMenu from "../UserMenu/UserMenu";
// 
// export default function AppBar() {
  // const [isModalActive, setModalActive] = useState(false);
  // const [activeForm, setActiveForm] = useState(null);
// 
  // const handleModalOpen = () => {
    // setModalActive(true);
  // };
// 
  // const handleModalClose = () => {
    // setModalActive(false);
    // setActiveForm(null);
  // };
// 
  // const handleLoginOpen = () => {
    // setActiveForm('login');
    // setModalActive(true);
  // };
// 
  // const handleRegistrationOpen = () => {
    // setActiveForm('registration');
    // setModalActive(true);
  // };
// 
  // return (
    // <header className={css.headerContainer}>
      {/* <div className={css.header}> */}
        {/* <h2>Nanny.Services</h2> */}
        {/* <button className={css.iconButton} type="button" onClick={handleModalOpen}> */}
          {/* <TfiAlignCenter className={css.icon} /> */}
        {/* </button> */}
        {/* <AppNav isModalOpen={isModalActive} closeModal={handleModalClose} /> */}
        {/* <UserMenu  */}
          // isModalOpen={isModalActive}
          // activeForm={activeForm}
          // handleLoginOpen={handleLoginOpen}
          // handleRegistrationOpen={handleRegistrationOpen}
          // handleModalClose={handleModalClose}
        // />
      {/* </div> */}
      {/* {isModalActive && ( */}
        // <ModalBurger
          // handleModalClose={handleModalClose}
          // activeForm={activeForm}
        // />
      // )}
    {/* </header> */}
  // );
// }
// 
import React, { useState } from 'react';
import AppNav from "../AppNav/AppNav";
import css from "./AppBar.module.css";
import ModalBurger from "../UL/ModalBurger/ModalBurger";
import { TfiAlignCenter } from "react-icons/tfi";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <header className={css.headerContainer}>
      <div className={css.header}>
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
