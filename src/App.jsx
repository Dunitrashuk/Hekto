import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/nav/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/product" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
