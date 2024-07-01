import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../services/authService";
import "./style.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>ACCÉDEZ À VOTRE COMPTE</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="error">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">MOT DE PASSE</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <Link
                            to="/forgot-password"
                            className="forgot-password-link"
                        >
                            Avez-vous oublié votre mot de passe?
                        </Link>
                    </div>
                    <button type="submit" className="login-button">
                        SE CONNECTER
                    </button>
                </form>
            </div>
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
