import { useState } from "react";

function CategoryMenu({ setCategory }) {
  const [open, setOpen] = useState(false);

  const categories = [
    "First copy",
    "Master copy",
    "Player version",
    "Retro",
    "Fan version",
    "Special Set",
    "Kids Set",
    "Other",
  ];

  return (
    <>
      {/* ===== HAMBURGER BUTTON ===== */}
      <button
        onClick={() => setOpen(true)}
        className="text-white text-2xl p-2 hover:bg-gray-800 rounded"
      >
        ☰
      </button>

      {/* ===== OVERLAY ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== SIDE PANEL ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold text-lg">Categories</h3>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-4 space-y-2">

          {/* ALL */}
          <button
            onClick={() => {
              setCategory("");
              setOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            All
          </button>

          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryMenu;
