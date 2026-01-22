import CartIcon from "./CartIcon";

const Header = ({ cart }) => {
  return (
    <header className="flex items-center w-full justify-between border-b-2">
      <h2 className="text-2xl font-bold">Junk Store</h2>
      <CartIcon cart={cart} />
    </header>
  );
};

export default Header;
