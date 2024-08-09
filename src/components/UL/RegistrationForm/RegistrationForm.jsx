import css from "./RegistrationForm.module.css";
export default function RegistrationForm() {
    return (
        <div className={css.registrationFormContainer}>

            <h2 className={css.textRegistration}>Registration</h2>

            <p className={css.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
            <form className={css.registrationForm}>
                <div className={css.registrationInput}>

                    <input className={css.inputForm} type="text" id="username" name="username" required placeholder="Name" />
                
                <div>

                    <input  className={css.inputForm} type="email" id="email" name="email" required placeholder="Email" />
                </div>
                <div>

                    <input className={css.inputForm} type="password" id="password" name="password" required placeholder="Password" />
                </div>
                <button className={css.buttonColor} type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}