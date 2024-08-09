import { useState } from "react";
import css from "./UserMenu.module.css";
import RegistrationForm from "../UL/RegistrationForm/RegistrationForm";
import ModalLogIn from "../UL/ModalLogIn/ModalLogIn";
import ModalRegistration from "../UL/ModalRegistration/ModalRegistration";

export default function UserMenu({ isModalOpen }) {
  const [activeForm, setActiveForm] = useState(null);

  const handleLoginOpen = () => {
    setActiveForm('login');
  };

  const handleRegistrationOpen = () => {
    setActiveForm('registration');
  };

  const handleClose = () => {
    setActiveForm(null);
  };

  const menuClassName = isModalOpen ? css.modalUserMenu : css.userMenu;
  const buttonClassName = isModalOpen ? css.buttonColor : css.buttonColorTablet;

  return (
    <div className={menuClassName}>
      <button
        className={`${buttonClassName} ${activeForm === 'login' ? css.activeButton : ''}`}
        type="button"
        onClick={handleLoginOpen}
      >
        Log In
      </button>
      <button
        className={`${buttonClassName} ${activeForm === 'registration' ? css.activeButton : ''}`}
        type="button"
        onClick={handleRegistrationOpen}
      >
        Registration
      </button>
      {activeForm === 'login' && (
        <div className={css.formContainer}>
          <ModalLogIn handleModalClose={handleClose} />
        </div>
      )}
      {activeForm === 'registration' && (
        <div className={css.formContainer}>
          <ModalRegistration handleModalClose={handleClose} />
        </div>
      )}
    </div>
  );
}
