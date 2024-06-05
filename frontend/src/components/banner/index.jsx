import { useState } from "react";
import "./style.css";
import FemmeMenu from "../dropdowns/femmeMenu";
import HommeMenu from "../dropdowns/hommeMenu";
import BebeMenu from "../dropdowns/bebeMenu";
import EnfantMenu from "../dropdowns/enfantMenu";
import BeauteMenu from "../dropdowns/beauteMenu";
function Banner() {
    const [showFemmeMenu, setShowFemmeMenu] = useState(false);
    const [showHommeMenu, setShowHommeMenu] = useState(false);
    const [showBebeMenu, setShowBebeMenu] = useState(false);
    const [showEnfantMenu, setShowEnfantMenu] = useState(false);
    const [showBeauteMenu, setShowBeauteMenu] = useState(false);
    const toggleFemmeMenu = () => {
        setShowFemmeMenu(!showFemmeMenu);
    };

    const toggleHommeMenu = () => {
        setShowHommeMenu(!showHommeMenu);
    };
    const toggleEnfantMenu = () => {
        setShowEnfantMenu(!showEnfantMenu);
    };

    const toggleBebeMenu = () => {
        setShowBebeMenu(!showBebeMenu);
    };
    const toggleBeauteMenu = () => {
        setShowBeauteMenu(!showBeauteMenu);
    };
    return (
        <div className="banner">
            <div className="categories">
                <a href="#femme" onClick={toggleFemmeMenu}>
                    Femme
                </a>
                {showFemmeMenu && <FemmeMenu />}

                <a href="#homme" onClick={toggleHommeMenu}>
                    Homme
                </a>
                {showHommeMenu && <HommeMenu />}

                <a href="#bebe" onClick={toggleBebeMenu}>
                    Bébé
                </a>
                {showBebeMenu && <BebeMenu />}

                <a href="#enfant" onClick={toggleEnfantMenu}>
                    Enfant
                </a>
                {showEnfantMenu && <EnfantMenu />}

                <a href="#beaute" onClick={toggleBeauteMenu}>
                    Beauté
                </a>
                {showBeauteMenu && <BeauteMenu />}
            </div>
            {/* <div className="banner-image">
                <img src={banner} alt="Bannière" />
    </div>*/}
        </div>
    );
}

export default Banner;
