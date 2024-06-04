import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import Product from "./components/product/index";
import Login from "./pages/login/index";
import Info from "./pages/info/index";
import Signup from "./components/signup/index";
import Panier from "./components/panier/index";
import Favorie from "./components/favorie/index";
function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [favorites, setFavorites] = useState([]); // Initialisez avec une liste vide
    const [cart, setCart] = useState([]); // Initialisez avec une liste vide pour le panier

    return (
        <Router>
            <Navbar setSearchTerm={setSearchTerm} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            searchTerm={searchTerm}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            cart={cart}
                            setCart={setCart}
                        />
                    }
                />
                <Route
                    path="/Favorie"
                    element={<Favorie favorites={favorites} />}
                />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product" element={<Product />} />
                <Route path="/Info" element={<Info />} />
                <Route path="/Panier" element={<Panier cart={cart} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
