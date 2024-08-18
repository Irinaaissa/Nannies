import { useSelector } from 'react-redux';
import NanniesCard from "../NanniesCard/NanniesCard";
import css from "./NanniesList.module.css";

export default function NanniesList({ nannies }) {
  
   
    return (
        <div className={css.nanniesList}>
            <ul className={css.list}>
                {nannies.map(nanny => (
                    <li className={css.item} key={nanny.id}>
                        <NanniesCard {...nanny} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
