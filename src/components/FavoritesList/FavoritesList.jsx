import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from "./FavoritesList.module.css";
import { selectNannies, selectFavoriteIds } from '../../redux/catalog/selectors';

import NanniesCard from '../NanniesCard/NanniesCard';

export default function FavoritesList() {
    const favoriteIds = useSelector(selectFavoriteIds);
    const catalogs = useSelector(selectNannies);

    const favoriteCards = catalogs.filter(card => favoriteIds.includes(card.id));

    return (
        <div className={css.favoritesContainer}>
            <ul className={css.list}>
                {favoriteCards.length > 0 ? (
                    favoriteCards.map(card => (
                        <li className={css.item} key={card.id}>
                            <NanniesCard {...card} />
                        </li>
                    ))
                ) : (
                    <Link to="/nannies" className={css.carContainer}>
 <span className={css.accent}>Favorites are not selected, return to the catalog to select!</span></Link> 
                    
                )}
            </ul>
        </div>
    );
}