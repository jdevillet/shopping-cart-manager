const Shop = ({ children }) => {
  return (
    <section id="shop">
      <h2 className="text-2xl text-center mt-4">Junk Items at Junk Prices</h2>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto"
        id="products"
      >
        {children}
      </ul>
    </section>
  );
};

export default Shop;
