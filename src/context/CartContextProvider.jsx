import { useReducer } from "react";
import { PRODUCTS } from "../data/products";
import { CartContext } from "./CartContext";

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const cartCopy = [...state.items];
    const existingCartItemIndex = cartCopy.findIndex(
      (cartItem) => cartItem.id === action.payload,
    );
    const existingCartItem = cartCopy[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      cartCopy[existingCartItemIndex] = updatedItem;
    } else {
      const product = PRODUCTS.find((product) => product.id === action.payload);
      cartCopy.push({
        id: action.payload,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
    return {
      ...state,
      items: cartCopy,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const cartCopy = [...state.items];
    const existingCartItemIndex = cartCopy.findIndex(
      (cartItem) => cartItem.id === action.payload.productId,
    );
    const existingCartItem = cartCopy[existingCartItemIndex];
    const updatedProductQuantity = action.payload.amount;

    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + updatedProductQuantity,
    };

    if (updatedItem.quantity <= 0) {
      cartCopy.splice(existingCartItemIndex, 1);
    } else {
      cartCopy[existingCartItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: cartCopy,
    };
  }

  if (action.type === "RESET_ITEMS") {
    return {
      ...state,
      items: [],
    };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    },
  );
  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
        // productId: productId,
        //amount: amount, i can just get rid of both because its the same name
      },
    });
  }

  function handleResetCart() {
    shoppingCartDispatch({
      type: "RESET_ITEMS",
    });
  }
  const ctxValue = {
    items: shoppingCartState.items,
    addItemsToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    resetCart: handleResetCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
