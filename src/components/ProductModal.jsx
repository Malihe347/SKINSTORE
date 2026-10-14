import { X, ShoppingBag } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in duration-200">
                
                {/* دکمه بستن */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors z-10"
                >
                    <X size={20} />
                </button>

                {/* تصویر محصول */}
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {product.image ? (
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-gray-400">No Image Available</span>
                    )}
                </div>

                {/* محتوای مدال */}
                <div className="p-6">
                    <span className="text-xs font-semibold tracking-wider text-green-800 uppercase bg-green-50 px-2.5 py-1 rounded-full">
                        {product.category || 'Skincare'}
                    </span>
                    
                    <h2 className="text-2xl font-bold text-green-950 mt-3">{product.name}</h2>
                    <p className="text-xl font-semibold text-gray-800 mt-2">{product.price}</p>
                    
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                        {product.description || 'Experience the ultimate nourishment with our premium LUNA formula, designed to hydrate, revitalize, and bring out your natural skin glow.'}
                    </p>

                    {/* دکمه افزودن به سبد خرید */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                        <button
                            onClick={() => {
                                onAddToCart(product);
                                onClose();
                            }}
                            className="bg-green-950 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-900 transition-colors duration-300 flex items-center gap-2 shadow-md w-full justify-center"
                        >
                            <ShoppingBag size={18} />
                            Add to Bag
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
