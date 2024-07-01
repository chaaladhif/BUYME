import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import Login from "./pages/login/index";
import Info from "./pages/info/index";
import Signup from "./components/signup/index";
import Panier from "./components/panier/index";
import Favorie from "./components/favorie/index";
import ProductPage from "./pages/productPage/index";
function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]); // État pour le panier
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        setFavorites(favorites.filter((fav) => fav.id !== product.id));
    };
    return (
        <Router>
            <Navbar
                setSearchTerm={setSearchTerm}
                cart={cart}
                setCart={setCart}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            searchTerm={searchTerm}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            cart={cart}
                            setCart={setCart} // Passer cart et setCart
                        />
                    }
                />
                <Route
                    path="/Favorie"
                    element={
                        <Favorie
                            favorites={favorites}
                            handleAddToCart={handleAddToCart}
                            setFavorites={setFavorites}
                        />
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/product/:id"
                    element={<ProductPage cart={cart} setCart={setCart} />}
                />{" "}
                {/* Route dynamique */}
                <Route path="/Info" element={<Info />} />
                <Route
                    path="/Panier"
                    element={<Panier cart={cart} setCart={setCart} />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
