import { useCart } from "../CartContext";
import { X } from "lucide-react";
import { Link } from 'react-router-dom';

export default function CartPage() {
    const { cartItems, removeFromCart } = useCart();

    const handleCheckout = () => {
        alert("Redirecting to secure payment gateway... 💳");
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-5">Your Shopping Cart</h1>

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
                        <div key={index} className="flex justify-between items-center border-b py-2 w-full max-w-md mx-auto">
                            <div>
                                <span className="font-medium">{item.name}</span>
                                <p className="text-gray-500 text-sm">{item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="text-red-500 hover:text-red-700 p-2"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={handleCheckout}
                        className="mt-6 bg-green-950 text-white px-4 py-2 rounded w-fit text-sm mx-auto block"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
