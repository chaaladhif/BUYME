import { Link } from "react-router-dom";
import "./style.css";
import map from "../../assets/map.svg";
const Navbar = () => {
    return (
        <>
            <div className="promo-bar">
                <p>50%* sur le 2ème sur toute la collection été !</p>
            </div>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <p>Shop</p>
                    <p>Me</p>
                </Link>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Rechercher un produit, un article, une idée"
                    />
                </div>
                <div className="nav-links">
                    <Link to="/Info">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Magasin</p>
                    </Link>
                    <Link to="Login">
                        <i className="fa-solid fa-user"></i>
                        <p>Se connecter</p>
                    </Link>
                    <Link to="Favorie">
                        <i className="fa-solid fa-heart"></i>
                        <p>Favorie</p>
                    </Link>
                    <Link to="/Panier">
                        <i className="fa-solid fa-store"></i>
                        <p>Panier</p>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
