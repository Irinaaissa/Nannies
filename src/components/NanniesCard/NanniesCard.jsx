import css from "./NanniesCard.module.css";
import { calculateAge } from "../UL/Helpers/price";
import Reviews from "../UL/Reviews/Reviews";
import { useState } from "react";
import spritePath from '../../assets/react.svg';
import { addToFavorite, deleteFromFavorite } from '../../redux/catalog/slice'; 
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteIds } from "../../redux/catalog/selectors";

export default function NanniesCard({ id, name, avatar_url, birthday, experience, kids_age, characters, education, about, reviews, location, rating, price_per_hour }) {
    const [readMore, setReadMore] = useState(false);
    const age = calculateAge(birthday);
    const handleReadMore = () => {
        setReadMore(true); 
    };
    const dispatch = useDispatch();
    const favoriteIds = useSelector(selectFavoriteIds);
    const isFavorite = favoriteIds.includes(id);

    const handleClick = () => {
        if (isFavorite) {
            dispatch(deleteFromFavorite(id));
        } else {
            dispatch(addToFavorite(id));
        }
    };
    return (
        <div className={css.container}>
            <img src={avatar_url} alt={`Avatar of ${name}`} className={css.avatar} />
            <div className={css.details}>
                <div className={css.containerName}>
                    <h3 className={css.name}>{name}</h3>
                    <ul className={css.containerInfo}>
                        <li className={css.location}><svg
                            className={css.icon}
                            width="16"
                            height="16"
                            aria-label="btn icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <use href={`${spritePath}#map-pin`} />
                        </svg>
                            {location}  </li>
                        <li className={css.location}> <svg
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
                            {rating}</li>
                            <li className={css.location}>Price/1 <span className={css.spanPrice}>{price_per_hour} $</span> </li>

                    </ul>
                    <button onClick={handleClick} className={css.iconButton}>
                            <svg
                                className={`${css.icon} ${isFavorite ? css.favorite : ''}`}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <use href={`${spritePath}#icon-heart1`} />
                            </svg>
                        </button>
                </div>
                <ul className={css.detailsList}>
                    <li className={css.list}>Age: <span className={css.spanAge}>{age}</span></li>
                    <li className={css.list}>Experience: <span className={css.spanList}>{experience}</span></li>
                    <li className={css.list}>Kids age: <span className={css.spanList}>{kids_age}</span></li>
                    <li className={css.list}>Characters: <span className={css.spanList}>{characters.join(', ')}</span></li>
                    <li className={css.list}>Education: <span className={css.spanList}>{education}</span></li>
                </ul>
                <p className={css.text}>{about}</p>

                {readMore && <Reviews reviews={reviews} />}
                {!readMore && (
                    <button className={css.readMore} onClick={handleReadMore}>
                        Read more
                    </button>
                )}
            </div>

        </div>
    );
}
