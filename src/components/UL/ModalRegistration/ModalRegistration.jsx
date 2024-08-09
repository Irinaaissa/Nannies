
import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import css from './ModalRegistration.module.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';


export default function ModalRegistration({ handleModalClose }) {
    const handleCloseModal = () => {
        handleModalClose();
    };

    return (
        <div className={css.containerLogIn} onClick={handleCloseModal}>
            <div className={css.modalContainer} onClick={(e) => e.stopPropagation()}>
                <button className={css.btnClose} type="button" onClick={handleCloseModal}>
                    <RiCloseLine className={css.riCloseLine} />
                </button>
                <RegistrationForm />
            </div>
        </div>
    );
}
