import { Link } from "react-router-dom";
import "./style.css";

function Product({ imageURL, title, price }) {
    return (
        <div className="product">
            <Link to="/Product">
                <img src={imageURL} alt={title} className="product-img" />
                <button className="icon-button heart">
                    <i className="fa-regular fa-heart icon"></i>{" "}
                </button>
                <div className="product-title">{title}</div>
                <div className="product-icons">
                    <div className="product-price">{price} €</div>
                    <button className="icon-button">
                        <i className="fa-solid fa-plus icon"></i>{" "}
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Product;
