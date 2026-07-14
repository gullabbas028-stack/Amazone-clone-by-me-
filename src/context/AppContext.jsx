// context/AppContext.js
import { createContext, useContext, useMemo, useState } from "react";
const Ctx = createContext(null);
export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [searchDept, setSearchDept] = useState("All Departments");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    const safeItem = item || { id: "item", title: "Amazon item", price: "0.00" };
    setCartItems(prev => {
      const existing = prev.find(entry => entry.id === safeItem.id);
      if (existing) {
        return prev.map(entry => entry.id === safeItem.id ? { ...entry, quantity: entry.quantity + 1 } : entry);
      }
      return [...prev, { ...safeItem, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.flatMap(item => {
      if (item.id !== id) return [item];
      const updatedQty = item.quantity + delta;
      return updatedQty > 0 ? [{ ...item, quantity: updatedQty }] : [];
    }));
  };

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);
  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0), [cartItems]);
  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <Ctx.Provider value={{
      cartItems,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      subtotal,
      shipping,
      tax,
      total,
      searchDept,
      setSearchDept,
      searchQuery,
      setSearchQuery,
      mobileMenuOpen,
      setMobileMenuOpen,
      cartOpen,
      setCartOpen,
    }}>
      {children}
    </Ctx.Provider>
  );
}
export function useApp() { return useContext(Ctx); }
