import { useState } from "react";

function ShirtCard({ shirt, onDelete, onEdit, isAdmin }) {
  const [showImage, setShowImage] = useState(false);

  // ✅ BUY BUTTON → WhatsApp
  const handleBuy = () => {
    const message = `Hi, I want to buy:

${shirt.name}
${shirt.description}
Price: ₹${shirt.price}

Product Image:
${shirt.image}`;

    const phone = "919082405767"; // 🔥 change if needed

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* ===== IMAGE MODAL (BIG VIEW) ===== */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
        >
          <img
            src={shirt.image}
            alt={shirt.name}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* ===== CARD ===== */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-1 duration-300">

        {/* ===== PRODUCT IMAGE ===== */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
          <img
            src={shirt.image || "/placeholder.png"}
            alt={shirt.name || "product"}
            loading="lazy"
            onClick={() => setShowImage(true)}
            className="
              w-full h-64
              object-contain
              cursor-pointer
              hover:scale-105
              transition duration-300
              p-4
            "
          />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="p-4">

          {/* NAME */}
          <h3 className="font-bold text-lg text-gray-800 dark:text-white">
            {shirt.name}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {shirt.description}
          </p>

          {/* ===== SIZE CHART ===== */}
          {shirt.size && shirt.size.length > 0 && (
            <div className="mt-2 text-sm text-blue-600 font-medium">
              Sizes: {Array.isArray(shirt.size)
                ? shirt.size.join(", ")
                : shirt.size}
            </div>
          )}

          {/* ===== CATEGORY ===== */}
          {shirt.category && (
            <div className="text-xs text-gray-400 mt-1">
              {shirt.category}
            </div>
          )}

          {/* ===== PRICE + BUY BUTTON ===== */}
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
                px-5 py-2
                text-sm font-semibold
                rounded-lg
                whitespace-nowrap
                hover:bg-gray-800
                transition
              "
            >
              Buy Now
            </button>
          </div>

          {/* ===== ADMIN BUTTONS ===== */}
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
    </>
  );
}

export default ShirtCard;
