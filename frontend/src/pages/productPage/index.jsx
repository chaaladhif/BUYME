import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
function ProductPage({ cart, setCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Ajout d'un état pour la quantité
    const handleAddToCart = () => {
        const cartItem = { ...product, quantity };
        setCart([...cart, cartItem]);
    };
    useEffect(() => {
        console.log("Fetching product with ID:", id);
        fetch("/datas.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);
                const foundProduct = data.find(
                    (item) => item.id.toString() === id
                );
                console.log("Found product:", foundProduct);
                setProduct(foundProduct);
            })
            .catch((error) => console.error("Error loading product:", error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-container">
            <img
                src={product.imageUrl}
                alt={product.title}
                className="product-image"
            />
            <div className="product-description">
                <h1>{product.title}</h1>
                <p>{product.price} €</p>
                <p>{product.description}</p>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                    className="product-number"
                />
                <button
                    onClick={handleAddToCart}
                    className="add-to-cart-button"
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}

export default ProductPage;
