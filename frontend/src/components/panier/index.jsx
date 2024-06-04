import "./style.css";
import CartProduct from "../cardproduct/index";
function Panier({ cart, setCart }) {
    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    return (
        <div className="cart-container">
            <h2>Panier</h2>
            <div className="cart">
                {cart.map((product) => (
                    <CartProduct
                        key={product.id}
                        product={product}
                        onRemoveFromCart={handleRemoveFromCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Panier;
