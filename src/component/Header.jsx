import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center w-full justify-between border-b-2">
      <h2 className="text-2xl font-bold">Junk Store</h2>
      <p>
        <button className="cursor-pointer">
          <FaShoppingCart />
        </button>
      </p>
    </header>
  );
};

export default Header;
