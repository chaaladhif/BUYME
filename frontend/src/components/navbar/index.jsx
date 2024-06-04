import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
const Navbar = ({ setSearchTerm, cart, setCart }) => {
    const [inputValue, setInputValue] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartCount, setCartCount] = useState(0); // État pour le nombre de produits dans le panier
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifiez si l'utilisateur est connecté au chargement du composant
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        // Mettez à jour l'état de connexion lorsque l'utilisateur se déconnecte ou se connecte
        const user = JSON.parse(localStorage.getItem("user"));
        setIsLoggedIn(!!user);
    }, [isLoggedIn]); // Écoutez les changements de l'état de connexion

    useEffect(() => {
        // Mettez à jour cartCount avec le nombre de produits dans le panier
        setCartCount(cart.length);
    }, [cart]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setSearchTerm(e.target.value); // Mettez à jour le terme de recherche dans Home
    };

    const handleLogout = () => {
        // Déconnectez l'utilisateur
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <>
            <div className="promo-bar">
                <p>50%* sur le 2ème sur toute la collection été !</p>
            </div>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <p>BUYME</p>
                </Link>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="RECHERCHER"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="nav-links">
                    <Link to="/Info">
                        <p>Magasin</p>
                    </Link>
                    {isLoggedIn ? (
                        <p onClick={handleLogout} style={{ cursor: "pointer" }}>
                            Se déconnecter
                        </p>
                    ) : (
                        <Link to="/login">
                            <p>Se connecter</p>
                        </Link>
                    )}
                    <Link to="/Favorie">
                        <p>Favorie</p>
                    </Link>
                    <Link to="/Panier">
                        <p>Panier ({cartCount})</p>{" "}
                        {/* Afficher le nombre de produits dans le panier */}
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
