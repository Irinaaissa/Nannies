import css from "./Appointment.module.css";
import React from 'react';
import { RiCloseLine } from "react-icons/ri";

export default function Appointment({ handleModalClose }) {
    const handleCloseModal = () => {
        handleModalClose();
    };

    return (
        <div className={css.container}>
            <div className={css.modal} onClick={handleCloseModal}>
                <div className={css.modalContainer} onClick={(e) => e.stopPropagation()}>
                    <button className={css.btnClose} type="button" onClick={handleCloseModal}>
                        <RiCloseLine className={css.riCloseLine} />
                    </button>
                    <div className={css.textContainer}>
                        <h3 className={css.title}>Make an appointment with a babysitter</h3>
                        <p className={css.text}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
                    </div>

                    <button className={css.btn}>Send</button>
                </div>
            </div>
        </div>
    );
}
