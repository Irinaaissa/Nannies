import ReviewsCard from "../ReviewsCard/ReviewsCard";
import css from "./ReviewsList.module.css";

export default function ReviewsList({ reviews }) {
    


    return (
        <div className={css.nanniesList}>
            <ul className={css.list}>
                {reviews.map((review, index) => (
                    <li className={css.item} key={index}>
                        <ReviewsCard {...review} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
