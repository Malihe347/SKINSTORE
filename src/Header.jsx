import { useCart } from './CartContext'; 
function Header() {
  const { cartCount } = useCart(); 

  return (
    // ... داخل JSX جایی که آیکون سبد خرید هست:
    <span>{cartCount}</span> 
  );
}