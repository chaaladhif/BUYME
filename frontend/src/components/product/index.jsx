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
}) {
    return (
        <div className="product">
            <Link to="/Product">
                <img src={imageURL} alt={title} className="product-img" />
            </Link>
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
            <div className="product-title">{title}</div>
            <div className="product-icons">
                <div className="product-price">{price} €</div>
                <button className="icon-button">
                    <i className="fa-solid fa-plus icon"></i>{" "}
                </button>
            </div>
        </div>
    );
}

export default Product;