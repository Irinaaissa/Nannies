import { useState } from "react";
import ReviewsList from "../ReviewsList/ReviewsList";
import css from "./Reviews.module.css";
import Appointment from "../Appointment/Appointment";

export default function Reviews({ reviews  }) {
    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };

    const handleModalClose = () => {
        setModalActive(false);
    };

    return (
        <div className={css.container}>
            <ReviewsList reviews={reviews} />
            <button className={css.button} type="button" onClick={handleModalOpen}>
                Make an appointment</button>
               { isModalActive && (<Appointment handleModalClose={handleModalClose} />)}
            
        </div>
    );
}
