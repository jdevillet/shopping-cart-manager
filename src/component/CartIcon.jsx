import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/cart-context";

const CartIcon = () => {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <button className="cursor-pointer relative">
      <FaShoppingCart size={20} />
      {totalItems > 0 && (
        <p
          className="absolute top-2 -right-3 bg-red-500 text-white text-xs rounded-full 
      min-w-4.5 h-5 px-1 flex items-center justify-center border border-white font-bold"
        >
          {totalItems}
        </p>
      )}
    </button>
  );
};

export default CartIcon;
