import Header from "./component/Header";
import Product from "./component/Product";
import Shop from "./component/Shop";
import { PRODUCTS } from "./data/products";
import CartContextProvider from "./context/CartContextProvider";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="app-container mt-4 w-full max-w-7xl px-4">
        <Toaster
          position="bottom-right"
          reverseOrder={true}
          toastOptions={{
            duration: 8000,
            removeDelay: 1000,
          }}
        />
        <CartContextProvider>
          <Header />
          <Shop>
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <Product {...product} />
              </li>
            ))}
          </Shop>
        </CartContextProvider>
      </div>
    </div>
  );
};

export default App;
