import css from './Block.module.css';

export default function Block(){
    return(
        <div className={css.block}>
            <button className={css.buttonBlock}>

            </button>
            <div className={css.textBlock}>
<p className={css.text}>Experienced nannies</p>
<p className={css.number}> 15,000</p>
</div>
        </div>
    )
}