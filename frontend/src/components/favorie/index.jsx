import "./style.css";
import Product from "../../components/product/index";

function Favorie({ favorites, handleAddToCart, setFavorites }) {
    const handleRemoveFromFavorites = (productId) => {
        setFavorites(favorites.filter((fav) => fav.id !== productId));
    };

    return (
        <div className="favorites-container">
            <h2>Produits favoris</h2>
            <div className="favorites">
                {favorites.map((product) => (
                    <div key={product.id} className="favorite-product">
                        <Product
                            imageURL={product.imageUrl}
                            title={product.title}
                            price={product.price}
                            product={product}
                            showFavoriteButton={false}
                            showRemoveButton={true}
                            isFavoritePage={true}
                        />
                        <button
                            className="add-button"
                            onClick={() => {
                                handleAddToCart(product);
                                handleRemoveFromFavorites(product.id);
                            }}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Favorie;
