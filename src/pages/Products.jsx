import { useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { useCart } from "../CartContext"; 

const products = [
    { name: "Gentle Cleanser", description: "A gentle cleanser for everyday use.", price: "$24", image: "/img/img02.jpg" },
    { name: "Daily Moisturizer", description: "Lightweight hydration for soft skin.", price: "$28", image: "/img/img03.jpg" },
    { name: "Glow Serum |Abib|", description: "A simple serum for a natural glow.", price: "$32", image: "/img/img08.jpg" },
    { name: "Minimalist Serum", description: "Nourishing oil for your daily routine.", price: "$30", image: "/img/img05.jpg" },
    { name: "Minimalist Production", description: "Simple and gentle care for your everyday routine.", price: "$32", image: "/img/img06.jpg" },
    { name: "Event Out production", description: "A simple skincare product for your daily routine.", price: "$32", image: "/img/img07.jpg" },
    { name: "Glowly skin", description: "A simple skincare product for your daily routine.", price: "$32", image: "/img/img14.jpg" },
    { name: "Good Filling", description: "A simple skincare product for your daily routine.", price: "$32", image: "/img/img15.jpg" },
];

function Products() {
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className="pt-3 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10">
                {products.map((product) => (
                    <div key={product.name} className="group border border-gray-100 rounded-2xl p-3 bg-white">
                        <div 
                            className="relative overflow-hidden rounded-xl cursor-pointer" 
                            onClick={() => setSelectedProduct(product)}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="mt-2 px-1">
                            <h2 
                                className="text-base font-medium cursor-pointer hover:underline"
                                onClick={() => setSelectedProduct(product)}
                            >
                                {product.name}
                            </h2>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.description}</p>
                            <div className="mt-2 flex items-center justify-between">
                                <p className="text-sm font-medium">{product.price}</p>
                                <button 
                                    onClick={() => addToCart(product)} 
                                    className="flex items-center gap-2 p-1.5 transition hover:bg-gray-200 rounded-lg"
                                >
                                    <ShoppingBag size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* products detail modal*/}
            {selectedProduct && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" 
                    onClick={() => setSelectedProduct(null)}
                >
                    <div 
                        className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                  
                        <button 
                            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition z-10" 
                            onClick={() => setSelectedProduct(null)}
                        >
                            <X size={20} />
                        </button>

                       {/* //Modal picture// */}
                        <div className="w-full h-64 bg-gray-100">
                            <img 
                                src={selectedProduct.image} 
                                alt={selectedProduct.name} 
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        {/* products information*/}
                        <div className="p-6">
                            <span className="text-xs font-semibold tracking-wider text-green-800 uppercase bg-green-50 px-2.5 py-1 rounded-full">
                                Skincare
                            </span>
                            
                            <h2 className="text-2xl font-bold text-green-950 mt-3">{selectedProduct.name}</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">{selectedProduct.price}</p>
                            
                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                {selectedProduct.description}
                            </p>

                         
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        addToCart(selectedProduct);
                                        setSelectedProduct(null);
                                    }}
                                    className="bg-green-950 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-900 transition-colors duration-300 flex items-center justify-center gap-2 w-full shadow-md"
                                >
                                    <ShoppingBag size={18} />
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Products;
