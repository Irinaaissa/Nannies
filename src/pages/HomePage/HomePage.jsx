import css from "./HomePage.module.css";
import { GoArrowUpRight } from "react-icons/go";
import Block from "../../components/UL/Block/Block";
import { Link, NavLink } from "react-router-dom";
export default function HomePage() {
    return (
        <div className={css.container}>
            <div className={css.homePage}>
                <div className={css.textContainer}>
                    <h1 className={css.textH}>Make Life Easier for the Family:</h1>
                    <p className={css.text}>Find Babysitters Online for All Occasions</p>
                    <div className={css.started}>
                        <NavLink to="/nannies" >
                            <span className={css.span}>Get started</span>
                            <GoArrowUpRight className={css.icon} />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className={css.homePageImg}>
                <Block />
            </div>
        </div>
    )
}