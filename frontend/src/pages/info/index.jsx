import "./style.css";
import Map from "../../components/map/index";
function Info() {
    return (
        <div className="info-page">
            <h2>Notre Magasin</h2>
            <p>Adresse: 15 Rue Étienne Dolet, Pontault-Combault, France</p>
            <Map />
        </div>
    );
}

export default Info;
