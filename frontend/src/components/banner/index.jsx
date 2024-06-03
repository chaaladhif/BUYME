import "./style.css";
import banner from "../../assets/banner.webp";
function Banner() {
    return (
        <div className="banner">
            <div className="categories">
                <a href="#femme">Femme</a>
                <a href="#homme">Homme</a>
                <a href="#bebe">Bébé</a>
                <a href="#enfant">Enfant</a>
                <a href="#beaute">Beauté</a>
            </div>
            {/* <div className="banner-image">
                <img src={banner} alt="Bannière" />
    </div>*/}
        </div>
    );
}

export default Banner;
