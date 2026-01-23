import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const CartModal = forwardRef(function Modal({ props }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      ref={dialogRef}
      className="rounded-lg shadow-lg p-6 w-96 backdrop:bg-black/50"
    >
      <p className="text-xl font-bold mb-4">Your Junk Cart</p>
      <form method="dialog" className="flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">+</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">-</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;
