function Footer() {
  return (
    <footer className="mt-5 bg-green-950 text-white px-10 py-2 border-2 border-white/10 rounded-lg gap-y-2 mb-3 mx-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-start">
          <div className="flex flex-col space-y-4 pt-2 mt-1 mb-0.5">
            <p className="text-2xl font-bold tracking-wider">LUNA</p>
            <p className="text-sm text-gray-400 max-w-250px hidden md:block">
              Simple skincare for everyday life. We believe in purity and effectiveness.
            </p>

            <div className="flex space-x- pt-2 hidden sm:none">
              {/* Instagram */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* آیکون تلفن  */}
              {/* آیکون تلفن اصلاح شده */}
              <a href="tel:+989123456789" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 0 2.81 12.84 12.84 0 0 0-.7 2.81 2 2 0 0 1-2 1.72z"></path>
                </svg>
              </a>

            </div>
          </div>

          {/* ستون لینک‌ها */}
          <div className="flex flex-col space-y-4 hidden md:block">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="/products" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* ستون خبرنامه */}
          <div>
            <div className="space-y-4 mt-3">
            <h3 className="text-lg font-bold text-white sm:flex-row tracking-wider">Stay Updated</h3>
          </div>
            <div className="flex mt-2 justify-center md:justify-start">
                <form className="flex items-center w-full max-w-[150px] ">
                
                <label htmlFor="email" className="sr-only">
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  className="bg-white/5 border border-white/5 rounded-l-md px-4 py-1 text-sm focus:outline-none w-full text-white placeholder-gray-300"
                />
              </form>
              <button className="bg-white text-black px-4 py-0.5 rounded-r-md text-sm font-medium hover:bg-gray-200 transition-colors focus:outline-none w-[60px]">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* کپی رایت */}
        <div className="mt-5 pt-3 border-t border-white/5 flex flex-col items-center text-xs text-gray-500">
          <p>© 2026 Luna Skincare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;