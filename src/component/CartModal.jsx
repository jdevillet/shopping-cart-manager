import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import showToast from "./ShowToast";

const CartModal = forwardRef(function Modal(props, ref) {
  const { items, addItemsToCart, updateItemQuantity, resetCart } =
    useContext(CartContext);

  const dialogRef = useRef();
  const emptyCart = items.length === 0;

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
    close: () => {
      if (dialogRef.current) {
        dialogRef.current?.close();
      }
    },
  }));
  const handleClose = () => {
    dialogRef.current?.close();
  };
  const handleCheckout = () => {
    if (totalPrice === 0) {
      alert("Your cart is empty!");
      return;
    }

    showToast();

    dialogRef.current?.close();
    resetCart();
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  return createPortal(
    <dialog
      ref={dialogRef}
      className="rounded-lg shadow-2xl p-8 w-96 backdrop:bg-black/50 border border-gray-200 fixed inset-0 m-auto max-h-screen"
    >
      <p className="text-2xl font-bold mb-6 text-gray-800">
        Your Shopping Cart
      </p>

      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {emptyCart ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold text-lg text-gray-800 mr-4">
                ${item.price * item.quantity}
              </p>
              <div className="flex gap-2">
                <button
                  className="cursor-pointer px-2 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded font-bold transition"
                  onClick={() => addItemsToCart(item.id)}
                >
                  +
                </button>
                <button
                  className="cursor-pointer px-2 py-1 bg-black hover:bg-gray-900 text-white rounded font-bold transition"
                  onClick={() => updateItemQuantity(item.id, -1)}
                >
                  -
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {!emptyCart && (
        <div className="text-center mb-6 font-bold text-xl border-t pt-4">
          <p>Total: ${totalPrice}</p>
        </div>
      )}

      <form method="dialog" className="flex gap-2">
        <button
          type="button"
          className="cursor-pointer flex-1 px-4 py-2 bg-white text-black hover:text-white hover:bg-black border-2 border-black rounded font-semibold transition duration-300"
          onClick={handleClose}
        >
          Keep Shopping
        </button>
        {!emptyCart && (
          <button
            type="button"
            className="cursor-pointer flex-1 px-4 py-2 bg-black hover:bg-white text-white hover:text-black border-2 border-black rounded font-semibold transition duration-300"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        )}
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;
