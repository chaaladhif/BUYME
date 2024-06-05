import "./style.css";
import Product from "../product/index";
function Panier({ cart, setCart }) {
    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

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
                        product={product}
                        onRemoveFromCart={() =>
                            handleRemoveFromCart(product.id)
                        } // Passer l'id du produit
                        showFavoriteButton={false}
                        showAddButton={false}
                        showRemoveButton={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default Panier;
