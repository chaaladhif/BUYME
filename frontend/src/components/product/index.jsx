import { Link } from "react-router-dom";
import "./style.css";

function Product({
    imageURL,
    title,
    price,
    onFavoriteToggle,
    isFavorite,
    product,
    showFavoriteButton = true,
    isFavoritePage = false,
}) {
    return (
        <div
            className={`product ${
                isFavoritePage ? "favorite-product-style" : ""
            }`}
        >
            {" "}
            <Link to={`/product/${product.id}`}>
                <img src={imageURL} alt={title} className="product-img" />
            </Link>
            {showFavoriteButton && (
                <button
                    className={
                        isFavorite
                            ? "icon-button heart clicked"
                            : "icon-button heart"
                    }
                    onClick={() => onFavoriteToggle(product)} // Appelle la fonction pour ajouter ou retirer le produit des favoris
                >
                    <i
                        className={
                            isFavorite
                                ? "fa-solid fa-heart icon"
                                : "fa-regular fa-heart icon"
                        }
                    ></i>
                </button>
            )}
            <div className="product-title">{title}</div>
            <div className="product-icons">
                <div className="product-price">{price} €</div>
            </div>
        </div>
    );
}

export default Product;
