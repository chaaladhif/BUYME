import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import Product from "./components/product/index";
import Login from "./pages/login/index";
import Info from "./pages/info/index";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <Router>
            <Navbar setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product" element={<Product />} />
                <Route path="/Info" element={<Info />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
