import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ totalItems, onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer relative">
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
