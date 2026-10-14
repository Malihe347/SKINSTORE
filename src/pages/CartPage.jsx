import { useCart } from "../CartContext";
import { X, Plus, Minus } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-green-950">Your Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10">
                    <p className="text-gray-500 mb-4">Your cart is currently empty.</p>
                    <Link
                        to="/products"
                        className="bg-green-950 text-white px-6 py-2 rounded text-sm hover:bg-green-900 transition-colors duration-300 mt-2.5"
                    >
                        Add to Cart
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-4 w-full">
                            <div>
                                <span className="font-medium text-green-950 block">{item.name}</span>
                                <p className="text-gray-600 text-sm">{item.price}</p>
                            </div>

                            {/* کنترل تعداد */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded border-gray-300">
                                    <button 
                                        onClick={() => updateQuantity(index, -1)}
                                        className="p-1.5 hover:bg-gray-100 text-gray-600 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="px-3 text-sm font-medium">{item.quantity || 1}</span>
                                    <button 
                                        onClick={() => updateQuantity(index, 1)}
                                        className="p-1.5 hover:bg-gray-100 text-gray-600 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-500 hover:text-red-700 p-2 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* بخش قیمت کل */}
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-300 text-lg font-semibold">
                        <span className="text-gray-800">Total Price:</span>
                        <span className="text-green-950">${totalPrice.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="mt-4 bg-green-950 text-white px-6 py-3 rounded-lg w-full text-sm font-medium hover:bg-green-900 transition-colors duration-300 shadow-md"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
