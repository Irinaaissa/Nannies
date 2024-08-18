import css from "./ReviewsCard.module.css";
import spritePath from '../../../assets/react.svg';


export default function ReviewsCard({ reviewer = '', rating = 0, comment = '' }) {

    const firstLetter = reviewer.charAt(0).toUpperCase();
    return (
        <div className={css.card}>
            <div className={css.avatarCard}>
                <div className={css.avatarContainer}>
                    <div className={css.avatar}>
                        {firstLetter}
                    </div>
                </div>
                <div className={css.reviewerDetails}>
                    <p className={css.reviewer}>{reviewer}</p>
                    <p>
                        <svg
                            className={css.icon}
                            width="16"
                            height="16"
                            aria-label="btn icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <use href={`${spritePath}#icon1-star`} />
                        </svg>
                        {rating}
                    </p>
                    
                </div>
            </div>
            <p className={css.comment}>{comment}</p>
            
        </div>
    );
}
