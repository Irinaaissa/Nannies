import LogInForm from '../LogInForm/LogInForm';
import css from './ModalLogIn.module.css';
import { RiCloseLine } from 'react-icons/ri'; 

export default function ModalLogIn({ handleModalClose }) {
    const handleCloseModal = () => {
        handleModalClose();
    };

    return (
        <div className={css.containerLogIn} onClick={handleCloseModal}>
            <div className={css.modalContainer} onClick={(e) => e.stopPropagation()}>
                <button className={css.btnClose} type="button" onClick={handleCloseModal}>
                    <RiCloseLine className={css.riCloseLine} />
                </button>
                <LogInForm />
            </div>
        </div>
    );
}
