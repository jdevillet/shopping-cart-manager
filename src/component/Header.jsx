import { useContext, useRef } from "react";
import CartIcon from "./CartIcon";
import CartModal from "./CartModal";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const modalRef = useRef();
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <CartModal ref={modalRef} />
      <header className="flex items-center w-full justify-between border-b-2">
        <h2 className="text-2xl font-bold">Junk Store</h2>
        <CartIcon
          onClick={() => modalRef.current?.open()}
          totalItems={totalItems}
        />
      </header>
    </>
  );
};

export default Header;
