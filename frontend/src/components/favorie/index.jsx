import "./style.css";
import Product from "../../components/product/index";

function Favorie({ favorites, handleAddToCart }) {
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
                        product={product}
                        showFavoriteButton={false}
                        showRemoveButton={true}
                        onAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorie;
