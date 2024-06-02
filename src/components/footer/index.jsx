import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>SUIVEZ-NOUS</h3>
                <ul>
                    <li>
                        <a href="#tiktok">TIKTOK</a>
                    </li>
                    <li>
                        <a href="#instagram">INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="#facebook">FACEBOOK</a>
                    </li>
                    <li>
                        <a href="#pinterest">PINTEREST</a>
                    </li>
                    <li>
                        <a href="#youtube">YOUTUBE</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>ENTREPRISE</h3>
                <ul>
                    <li>
                        <a href="#qui-sommes-nous">QUI SOMMES-NOUS ?</a>
                    </li>
                    <li>
                        <a href="#magasin">MAGASIN</a>
                    </li>
                    <li>
                        <a href="#rejoignez-nous">REJOIGNEZ-NOUS</a>
                    </li>
                    <li>
                        <a href="#mentions-legales">MENTIONS LÉGALES</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>POLITIQUES</h3>
                <ul>
                    <li>
                        <a href="#politique-de-confidentialite">
                            POLITIQUE DE CONFIDENTIALITÉ
                        </a>
                    </li>
                    <li>
                        <a href="#conditions-achat">CONDITIONS D´ACHAT</a>
                    </li>
                    <li>
                        <a href="#parametres-cookies">PARAMÈTRES DES COOKIES</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
