import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import "./style.css";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    // Fonction de validation du mot de passe
    const isValidPassword = (password) => {
        const passwordRegex =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(password);
    };

    // Fonction de validation de l'e-mail
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError("");
        setPasswordError("");

        if (!isValidEmail(email)) {
            setEmailError("Veuillez entrer une adresse e-mail valide.");
            return;
        }
        if (!isValidPassword(password)) {
            setPasswordError(
                "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre."
            );
            return;
        }
        try {
            // Vérifie si l'e-mail existe déjà dans la base de données
            const emailExists = await checkEmailExists(email);
            if (emailExists) {
                setEmailError(
                    "Cet e-mail est déjà utilisé par un autre compte."
                );
                return;
            }

            const response = await register(email, password);
            if (response.user) {
                setSuccessMessage(
                    "Inscription réussie ! Vous pouvez maintenant vous connecter."
                );
                setTimeout(() => {
                    navigate("/login");
                }, 2000); // Redirige après 2 secondes
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    const checkEmailExists = async (email) => {
        try {
            const response = await fetch("/api/auth/check-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                const data = await response.json();
                return data.exists;
            } else {
                console.error(
                    "Error checking email existence:",
                    response.statusText
                );
                return false;
            }
        } catch (error) {
            console.error("Error checking email existence:", error);
            return false;
        }
    };
    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>CRÉEZ UN COMPTE</h2>
                <form onSubmit={handleSubmit}>
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
                        {emailError && (
                            <span className="error-message">{emailError}</span>
                        )}
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
                        {passwordError && (
                            <span className="error-message">
                                {passwordError}
                            </span>
                        )}
                    </div>
                    <button type="submit" className="signup-button">
                        INSCRIVEZ-VOUS
                    </button>
                </form>
                {successMessage && (
                    <p className="success-message">{successMessage}</p>
                )}
            </div>
        </div>
    );
}

export default Signup;
