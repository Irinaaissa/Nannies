import css from "./LogInForm.module.css";
export default function LogInForm() {
    return (
        <div className={css.containerLogInForm}>

            <h2 className={css.textLogIn}>Log In</h2>

            <p className={css.text}>
            Welcome back! Please enter your credentials to access your account and continue your babysitter search.
                </p>
            <form className={css.logInForm}>
                <div className={css.logInInput}>

                
                <div>

                    <input className={css.inputForm} type="email" id="email" name="email" required placeholder="Email" />
                </div>
                <div>

                    <input className={css.inputForm} type="password" id="password" name="password" required placeholder="Password" />
                </div>
                <button className={css.buttonColor} type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}