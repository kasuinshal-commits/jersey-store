function ShirtCard({ shirt, onDelete, onEdit, isAdmin }) {

  // ✅ BUY BUTTON → WhatsApp
  const handleBuy = () => {
    const message = `Hi, I want to buy:

${shirt.name}
${shirt.description}
Price: ₹${shirt.price}

Product Image:
${shirt.image}`;

    const phone = "919082405767"; // 🔥 change to your WhatsApp number

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl">

      {/* PRODUCT IMAGE */}
      <img
        src={shirt.image || "/placeholder.png"}
        alt={shirt.name || "product"}
        loading="lazy"
        className="w-full h-64 object-contain bg-gray-100 dark:bg-gray-800"
      />

      {/* CONTENT */}
      <div className="p-4">

        {/* NAME */}
        <h3 className="font-bold text-lg text-gray-800 dark:text-white">
          {shirt.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {shirt.description}
        </p>

        {/* PRICE + BUY BUTTON (MOBILE SAFE) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-2">

          {/* PRICE */}
          <p className="font-bold text-green-600 text-lg">
            ₹{shirt.price}
          </p>

          {/* BUY BUTTON */}
          <button
            onClick={handleBuy}
            className="
              bg-black text-white
              w-full sm:w-auto
              px-4 py-2
              text-sm
              rounded-lg
              whitespace-nowrap
              hover:bg-gray-800
              transition
            "
          >
            Buy Now
          </button>

        </div>

        {/* ADMIN BUTTONS */}
        {isAdmin && (
          <div className="flex gap-2 mt-4">

            <button
              onClick={() => onEdit(shirt)}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(shirt.id)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
            >
              Delete
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default ShirtCard;
