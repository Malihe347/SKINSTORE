import { useCart } from './CartContext'; 
function Header() {
  const { cartCount } = useCart(); 

  return (
    
    <span>{cartCount}</span> 
  );
}