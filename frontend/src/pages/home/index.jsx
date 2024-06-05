import { useEffect, useState } from "react";
import Banner from "../../components/banner/index";
import "./style.css";
import Product from "../../components/product/index";
import Favorie from "../../components/favorie/index";
function Home({ searchTerm, favorites, setFavorites, cart, setCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/datas.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading products:", error));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFavoriteToggle = (product) => {
        if (favorites.some((fav) => fav.id === product.id)) {
            setFavorites(favorites.filter((fav) => fav.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    const handleAddToCart = (product) => {
        setCart([...cart, product]); // Ajouter le produit au panier
    };

    return (
        <div>
            <Banner />
            <div className="products">
                {filteredProducts.map((product) => (
                    <Product
                        key={product.id}
                        imageURL={product.imageUrl}
                        title={product.title}
                        price={product.price}
                        product={product}
                        onFavoriteToggle={() => handleFavoriteToggle(product)}
                        isFavorite={favorites.some(
                            (fav) => fav.id === product.id
                        )}
                        onAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </div>
            <Favorie favorites={favorites} handleAddToCart={handleAddToCart} />
        </div>
    );
}

export default Home;
