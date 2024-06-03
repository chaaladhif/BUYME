import { useEffect, useState } from "react";
import Banner from "../../components/banner/index";
import "./style.css";
import Product from "../../components/product/index";

function Home({ searchTerm }) {
    // Ajoutez searchTerm en prop
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/datas.json") // Assurez-vous que le chemin est correct
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading products:", error));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Banner />
            <div className="products">
                {filteredProducts.map((product) => (
                    <Product
                        key={product.id} // Utilisez un identifiant unique
                        imageURL={product.imageUrl}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
