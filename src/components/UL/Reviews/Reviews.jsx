import ReviewsList from "../ReviewsList/ReviewsList";
import css from "./Reviews.module.css";

export default function Reviews({ reviews  }) {
    console.log("Reviews data:", reviews); // Додаємо логування тут
    return (
        <div className={css.container}>
            <ReviewsList reviews={reviews} />
            <button>Make an appointment</button>
        </div>
    );
}
