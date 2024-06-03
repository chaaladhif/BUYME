import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
const Navbar = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setSearchTerm(e.target.value); // Mettez à jour le terme de recherche dans Home
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
                    <Link to="Info">
                        {/* <i className="fa-solid fa-location-dot"></i>*/}
                        <p>Magasin</p>
                    </Link>
                    <Link to="Login">
                        {/*<i className="fa-solid fa-user"></i>*/}
                        <p>Se connecter</p>
                    </Link>
                    <Link to="Favorie">
                        {/*<i className="fa-solid fa-heart"></i>*/}
                        <p>Favorie</p>
                    </Link>
                    <Link to="/Panier">
                        {/*<i className="fa-solid fa-store"></i>*/}
                        <p>Panier</p>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
