import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

function Product({
    imageURL,
    title,
    price,
    onFavoriteToggle,
    isFavorite,
    product,
    onAddToCart,
    onRemoveFromCart,
    showFavoriteButton = true,
    showAddButton = true,
    showRemoveButton = false,
}) {
    return (
        <div className="product">
            <Link to="/Product">
                <img src={imageURL} alt={title} className="product-img" />
            </Link>
            {showFavoriteButton && (
                <button
                    className={
                        isFavorite
                            ? "icon-button heart clicked"
                            : "icon-button heart"
                    }
                    onClick={onFavoriteToggle}
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
                {showAddButton && (
                    <button
                        className="icon-button"
                        onClick={() => onAddToCart(product)}
                    >
                        <i className="fa-solid fa-plus icon"></i>
                    </button>
                )}
                {showRemoveButton && (
                    <button
                        className="icon-button"
                        onClick={() => onRemoveFromCart(product)}
                    >
                        <i className="fa-solid fa-minus icon"></i>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Product;
