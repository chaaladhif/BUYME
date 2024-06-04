import "./style.css";
import Product from "../../components/product/index";

function Panier({ cart }) {
    return (
        <div className="cart-container">
            <h2>Panier</h2>
            <div className="cart">
                {cart.map((product) => (
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

export default Panier;
