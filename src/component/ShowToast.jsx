import toast from "react-hot-toast";

const showToast = () =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-custom-enter" : "animate-custom-leave"
      } max-w-sm w-full pointer-events-auto flex`}
    >
      <div className="flex-1 rounded-xl bg-white shadow-lg ring-1 ring-black/10 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-linear-to-r from-gray-50 to-gray-100">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black">
            <span className="text-white text-lg">✓</span>
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              Your order is in!
            </p>
            <p className="mt-1 text-xs text-gray-600">
              We&apos;re getting everything ready. You&apos;ll receive a
              confirmation shortly.
            </p>
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-2 text-gray-400 hover:text-gray-700 transition"
          >
            <span className="sr-only">Close</span>✕
          </button>
        </div>

        <div className="h-1 w-full bg-gray-200">
          <div className="h-full w-full bg-black animate-[shrink_4s_linear_forwards]" />
        </div>
      </div>
    </div>
  ));

export default showToast;
