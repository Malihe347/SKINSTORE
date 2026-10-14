import { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        clearCart();
        setTimeout(() => {
            navigate('/products');
        }, 4000);
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-10">
                <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg shadow-md text-center max-w-md">
                    <h2 className="text-xl font-bold mb-2">Payment Successful! 🎉</h2>
                    <p className="text-sm">Thank you for your purchase from LUNA. Your skincare order is on its way!</p>
                    <p className="text-xs text-gray-500 mt-4">Redirecting to products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto p-10">
            <h1 className="text-2xl font-bold mb-6 text-green-950">Checkout / Payment Gateway</h1>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h2 className="font-semibold text-lg mb-3 text-green-950">Order Summary</h2>
                <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>Total Items:</span>
                    <span>{cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2 text-green-950">
                    <span>Total Amount:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input 
                        type="text" 
                        required 
                        placeholder="1234 5678 9012 3456" 
                        maxLength="19"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-950" 
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input 
                            type="text" 
                            required 
                            placeholder="MM/YY" 
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-950" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV2</label>
                        <input 
                            type="password" 
                            required 
                            placeholder="123" 
                            maxLength="4"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-950" 
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-green-950 text-white px-6 py-3 rounded-lg w-full text-sm font-medium hover:bg-green-900 transition-colors duration-300 shadow-md"
                >
                    Pay Now (${totalPrice.toFixed(2)})
                </button>
            </form>
        </div>
    );
}
