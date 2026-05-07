import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={
            <div style={{ textAlign: "center", padding: "100px 24px", color: "var(--white-muted)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--white)" }}>404</p>
              <p>Página no encontrada.</p>
              <a href="/" style={{ color: "var(--accent)", marginTop: "16px", display: "block" }}>← Volver al inicio</a>
            </div>
          } />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
