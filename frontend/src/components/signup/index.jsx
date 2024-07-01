import { useState } from "react";
import useAuthStore from "../../services/authService";
import "./style.css";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, error } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>CRÉEZ UN COMPTE</h2>
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
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        INSCRIVEZ-VOUS
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
