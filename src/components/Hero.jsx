import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../CartContext"

const products = [
  { name: "Gentle Cleanser", price: "$24", image: "/img/img02.jpg" },
  { name: "Daily Moisturizer", price: "$28", image: "/img/img03.jpg" },
  { name: "Glow Serum", price: "$32", image: "/img/img08.jpg" },
  { name: "Minimalist Serum", price: "$30", image: "/img/img05.jpg" },
];

function Hero() {
  const { addToCart } = useCart();
  return (
    <>
      <section className="px-4 md:px-10 mt-4 mt-1">
        <div className="relative [w-full] sm:h-[450px]  md:h-[380px] overflow-hidden rounded-xl">
          <img
            src="/img/img01.jpg"
            alt="Skincare products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
            <a
              href="/products"
              className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white bg-white/10 backdrop-blur-md border border-white/30 rounded-full transition-all hover:bg-white/30 hover:scale-105"
            >
              Explore Products
            </a>
            <p className="text-white text-xs md:text-sm mt-2 font-medium">
              Click the button to view products.
            </p>
          </div>
        </div>
      </section>

      {/* بخش محصولات */}
      <section className="px-4 md:px-10 mt-10 md:mt-5 mb-16">
        <div className="mb-5">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Featured Products</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Explore our best-selling skincare essentials.</p>
        </div>

        {/* گرید محصولات: در موبایل 2 ستونه (grid-cols-2)، در تبلت/دسکتاپ 4 ستونه (lg:grid-cols-4) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.name} className="group bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
              <div className="relative overflow-hidden rounded-lg bg-gray-50">
                {/* تنظیم ارتفاع تصویر متناسب با سایز صفحه برای جلوگیری از کشیدگی */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-36 sm:h-44 md:h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full
                    hover:bg-gray-300 hover:text-black transition">
                  <ShoppingBag size={14} />
                </button>
              </div>
              <div className="mt-2.5 px-1">
                <h3 className="text-xs sm:text-sm font-medium text-gray-800 truncate">{product.name}</h3>
                <p className="mt-0.5 text-xs font-semibold text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
