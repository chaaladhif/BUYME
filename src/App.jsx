import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Footer from "./components/footer/index";
import Product from "./components/product/index";
import Login from "./pages/login/index";
import Info from "./pages/info/index";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product" element={<Product />} />
                <Route path="/store-info" element={<Info />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
