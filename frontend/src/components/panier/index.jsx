import "./style.css";
import Product from "../product/index";
function Panier({ cart, setCart }) {
    const handleIncreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const handleDecreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <div className="cart-container">
            <h2>Panier</h2>
            <div className="cart">
                {cart
                    .reduce((acc, curr) => {
                        const existingItem = acc.find(
                            (item) => item.id === curr.id
                        );
                        if (existingItem) {
                            existingItem.quantity += curr.quantity;
                        } else {
                            acc.push({ ...curr });
                        }
                        return acc;
                    }, [])
                    .map((product) => (
                        <div key={product.id}>
                            <Product
                                imageURL={product.imageUrl}
                                title={product.title}
                                price={product.price}
                                product={product}
                                showFavoriteButton={false}
                                showAddButton={false}
                                showRemoveButton={false}
                            />
                            <p>Quantité : {product.quantity}</p>
                            <button
                                onClick={() =>
                                    handleIncreaseQuantity(product.id)
                                }
                            >
                                +
                            </button>
                            <button
                                onClick={() =>
                                    handleDecreaseQuantity(product.id)
                                }
                            >
                                -
                            </button>
                        </div>
                    ))}
            </div>
            <button className="add-to-cart-button">Terminer ma commande</button>
        </div>
    );
}

export default Panier;
