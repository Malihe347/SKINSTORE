import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('luna_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('luna_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // تابع کمکی برای تبدیل قیمت به عدد
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const num = parseFloat(price.replace(/[^0-9.]/g, ''));
      return isNaN(num) ? 0 : num;
    }
    return 0;
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => (item.id && item.id === product.id) || item.name === product.name
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1
        };
        return updated;
      }
      
      return [...prev, { ...product, quantity: 1 }];
    });
    
    showNotification(`"${product.name}" added to bag!`);
  };

  const updateQuantity = (index, delta) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const currentQty = updated[index].quantity || 1;
      const newQty = currentQty + delta;
      
      if (newQty > 0) {
        updated[index] = { ...updated[index], quantity: newQty };
      }
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parsePrice(item.price);
    return total + (itemPrice * (item.quantity || 1));
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, totalPrice, addToCart, removeFromCart, updateQuantity, clearCart }}>
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
