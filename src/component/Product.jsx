import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ id, name, price, description }) => {
  const { addItemsToCart } = useContext(CartContext);
  return (
    <article className="product flex flex-col h-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl border transition-all">
      <div className="product-content flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xl mb-3 line-clamp-2">{name}</h3>
          <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        </div>
        <p className="product-price text-2xl font-bold text-black mb-6">
          ${price}
        </p>
      </div>
      <button
        className=" cursor-pointer mt-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all font-medium w-full"
        onClick={() => addItemsToCart(id)}
      >
        Add to cart
      </button>
    </article>
  );
};

export default Product;
