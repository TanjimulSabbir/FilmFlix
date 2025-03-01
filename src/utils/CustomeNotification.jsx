import toast from "react-hot-toast";

export const showFancyToast = (message = "Oops! Something went wrong.") => {
  toast(
    (t) => (
      <div className="flex items-center space-x-3">
        <span className="text-lg">🚀</span>
        <div>
          <p className="font-semibold">{message}</p>
          <p className="text-sm text-gray-500">
            We're working hard to improve this feature! Thanks for your
            patience. 🙌
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-auto px-2 py-1 text-sm bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    ),
    {
      duration: 5000,
      style: {
        background: "#1E293B",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px",
      },
    }
  );
};
