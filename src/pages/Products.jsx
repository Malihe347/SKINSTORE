import { ShoppingBag } from "lucide-react";
const products = [
    {
        name: "Gentle Cleanser",
        description: "A gentle cleanser for everyday use.",
        price: "$24",
        image: "/img/img02.jpg",
    },
    {
        name: "Daily Moisturizer",
        description: "Lightweight hydration for soft skin.",
        price: "$28",
        image: "/img/img03.jpg",
    },
    {
        name: "Glow Serum |Abib|",
        description: "A simple serum for a natural glow.",
        price: "$32",
        image: "/img/img08.jpg",
    },
    {
        name: "Minimalist Serum",
        description: "Nourishing oil for your daily routine.",
        price: "$30",
        image: "/img/img05.jpg",
    },
    {
        name: "Minimalist Production",
        description: "Simple and gentle care for your everyday routine.",
        price: "$32",
        image: "/img/img06.jpg",
    },
    {
        name: "Event Out production",
        description: "A simple skincare product for your daily routine.",
        price: "$32",
        image: "/img/img07.jpg",
    },
    {
        name: "Glowly skin",
        description: "A simple skincare product for your daily routine.",
        price: "$32",
        image: "/img/img14.jpg",
    },
    {
        name: "Good Filling",
        description: "A simple skincare product for your daily routine.",
        price: "$32",
        image: "/img/img15.jpg",
    },


];

function Products() {
    return (
        <section className="pt-3 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10">
                {products.map((product) => (
                    <div key={product.name} className="group border border-gray-100 rounded-2xl p-3 bg-white">
                        <div className="relative overflow-hidden rounded-xl">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                            />
                        </div>


                        <div className="mt-2 px-1">
                            <h2 className="text-base font-medium">
                                {product.name}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                                {product.description}
                            </p>

                            <div className="mt-2 flex items-center justify-center">
                                <p className="text-sm font-medium">{product.price}</p>
                                <button className="flex items-center gap-2 p-1.5 transition hover:bg-gray-300 rounded-lg">
                                    <ShoppingBag size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;