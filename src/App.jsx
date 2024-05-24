import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FooterComp from "./components/Footer";
import NavbarComp from "./components/Navbar";
import Home from "./pages/Home";
import Steps from "./pages/Steps";
import Shop from "./pages/Shop";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavbarComp />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/steps" element={<Steps />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
        <FooterComp />
      </CartContextProvider>
    </div>
  );
}

export default App;
