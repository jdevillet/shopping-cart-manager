import Header from "./component/Header";
import Product from "./component/Product";
import Shop from "./component/Shop";
import { PRODUCTS } from "./data/products";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <div className="app-container mx-10 mt-4">
      <CartContextProvider>
        <Header />
        <Shop>
          {" "}
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </div>
  );
};

export default App;
// Moadl cart a faire
