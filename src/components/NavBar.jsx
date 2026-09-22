import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) => 
    isActive 
      ? "text-sm font-bold text-black border-b-2 border-black pb-1" 
      : "text-sm text-gray-500 hover:text-black transition";

  return (
    <nav className="relative flex items-center justify-between px-4 py-4 md:px-10 md:py-6">
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold">LUNA</Link>

      {/* Desktop Menu - فقط در دسکتاپ دیده می‌شود */}
      <div className="hidden md:flex gap-10">
        <NavLink to="/" end className={navLinkStyle}>Home</NavLink>
        <NavLink to="/products" className={navLinkStyle}>Products</NavLink>
        <NavLink to="/about" className={navLinkStyle}>About</NavLink>
        <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
      </div>

      {/* Right side (Desktop) */}
      <div className="hidden md:flex items-center gap-3">
        <button className="rounded-full p-2 hover:bg-gray-100"><ShoppingBag size={20} /></button>
        <Link to="/products" className="rounded-md bg-green-950 px-5 py-2 text-sm text-white hover:opacity-80">Shop Now</Link>
      </div>

      {/* Mobile Menu Button - */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown*/}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden z-50 shadow-sm">
          <NavLink to="/" end className={navLinkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={navLinkStyle} onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/about" className={navLinkStyle} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkStyle} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <Link to="/products" className="mt-2 text-center rounded-md bg-green-950 py-2 text-sm text-white" onClick={() => setIsOpen(false)}>Shop Now</Link>
        </div>
      )}
    </nav>
  );
}
