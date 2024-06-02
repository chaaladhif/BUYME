import { useEffect, useState } from "react";
import Banner from "../../components/banner";
import "./style.css";
//import datas from "../../services/datas.json";
import Product from "../../components/product";
function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/datas.json") // Assurez-vous que le chemin est correct
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading products:", error));
    }, []);

    return (
        <div>
            <Banner />
            <div className="products">
                {products.map((product) => (
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

export default Home;
