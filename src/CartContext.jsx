import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    showNotification(`"${product.name}" added to bag!`);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

 
  const cartCount = cartItems.length;

  return (
  
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
      
      {notification && (
        <div className="fixed bottom-5 right-5 bg-green-950 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          {notification}
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
