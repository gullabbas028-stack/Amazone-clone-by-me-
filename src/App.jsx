// App.js
import React, { useEffect, useState } from "react";
import { AppProvider, useApp } from "./context/AppContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import "./index.css";

function AppShell() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQuantity, subtotal, shipping, tax, total } = useApp();
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") || "home";
    setActivePage(hash);
  }, []);

  useEffect(() => {
    const onHashChange = () => setActivePage(window.location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <HomePage activePage={activePage} />
      <Footer />

      {cartOpen && (
        <div className="cart-drawer" role="dialog" aria-label="Shopping Cart">
          <div className="cart-drawer-header">
            <h3>Shopping Cart</h3>
            <button type="button" className="cart-close-btn" onClick={() => setCartOpen(false)}>✕</button>
          </div>

          <div className="cart-drawer-body">
            {cartItems.length === 0 ? (
              <p className="cart-empty">Your Amazon cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    {item.image ? <img src={item.image} alt={item.title} /> : <span>📦</span>}
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-price">${Number(item.price).toFixed(2)}</div>
                    <div className="cart-qty-row">
                      <button type="button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <button type="button" className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart-drawer-footer">
            <div className="cart-summary-row"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
            <div className="cart-summary-row"><span>Shipping</span><strong>${shipping.toFixed(2)}</strong></div>
            <div className="cart-summary-row"><span>Tax</span><strong>${tax.toFixed(2)}</strong></div>
            <div className="cart-summary-row total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button type="button" className="checkout-btn">Proceed to checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
