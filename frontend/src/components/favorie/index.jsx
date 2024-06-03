import "./style.css";
import Product from "../../components/product/index";

function Favorie({ favorites }) {
    return (
        <div className="favorites-container">
            <h2>Produits favoris</h2>
            <div className="favorites">
                {favorites.map((product) => (
                    <Product
                        key={product.id}
                        imageURL={product.imageUrl}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorie;
