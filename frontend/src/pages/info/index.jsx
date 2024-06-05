import "./style.css";
import Map from "../../components/map/index";

function Info() {
    const openingHours = [
        { day: "Lundi", hours: "10h00 - 19h00" },
        { day: "Mardi", hours: "10h00 - 19h00" },
        { day: "Mercredi", hours: "10h00 - 19h00" },
        { day: "Jeudi", hours: "10h00 - 19h00" },
        { day: "Vendredi", hours: "10h00 - 19h00" },
        { day: "Samedi", hours: "10h00 - 18h00" },
        { day: "Dimanche", hours: "Fermé" },
    ];

    return (
        <div className="info-page">
            <h2>Notre Magasin</h2>
            <p>Adresse: 15 Rue Étienne Dolet, Pontault-Combault, France</p>
            <Map />
            <h3>Horaires d'ouverture</h3>
            <ul>
                {openingHours.map((hour, index) => (
                    <li key={index}>
                        {hour.day} : {hour.hours}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Info;
