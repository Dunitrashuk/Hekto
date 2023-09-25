import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
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
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/product" element={<ProductDetails />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
