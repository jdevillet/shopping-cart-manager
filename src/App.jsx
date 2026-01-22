import Header from "./component/Header";
import Product from "./component/Product";
import Shop from "./component/Shop";
import { PRODUCTS } from "./data/products";

const App = () => {
  return (
    <div className="app-container mx-10 mt-4">
      <Header />
      <Shop>
        {" "}
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </div>
  );
};

export default App;
