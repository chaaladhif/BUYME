import "./style.css";

function CartProduct({ product, onRemoveFromCart }) {
    return (
        <div className="cart-product">
            <img
                src={product.imageUrl}
                alt={product.title}
                className="cart-product-img"
            />

            <div className="cart-product-title">{product.title}</div>
            <div className="product-icons">
                <div className="cart-product-price">{product.price} €</div>
                <button
                    className="icon-button"
                    onClick={() => onRemoveFromCart(product.id)}
                >
                    <i className="fa-solid fa-minus icon"></i>
                </button>
            </div>
        </div>
    );
}

export default CartProduct;
