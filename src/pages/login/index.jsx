import "./style.css";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>ACCÉDEZ À VOTRE COMPTE</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">MOT DE PASSE</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <Link
                            to="/forgot-password"
                            className="forgot-password-link"
                        >
                            Avez vouz oublié votre mot de passe?
                        </Link>
                    </div>
                    <button type="submit" className="login-button">
                        SE CONNECTER
                    </button>
                </form>
            </div>{" "}
            <div className="login-info">
                <p>BESOIN DE CRÉER UN COMPTE ?</p>
                <Link to="/signup" className="signup-link">
                    INSCRIVEZ-VOUS
                </Link>
            </div>
        </div>
    );
}

export default Login;
