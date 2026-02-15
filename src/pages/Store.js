import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import ShirtCard from "../components/ShirtCard";
import SearchBar from "../components/SearchBar";
import Testimonials from "../components/Testimonials";

function Store({ category }) {
  const [shirts, setShirts] = useState([]);
  const [search, setSearch] = useState("");

  // ⭐ PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const shirtsPerPage = 8;

  useEffect(() => {
    fetchShirts();
  }, []);

  const fetchShirts = async () => {
    const snap = await getDocs(collection(db, "shirts"));
    setShirts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  // ================= FILTER =================
  const filteredShirts = shirts.filter(shirt => {
    const matchSearch =
      !search ||
      shirt.name?.toLowerCase().includes(search.toLowerCase()) ||
      shirt.description?.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      !category || shirt.category === category;

    return matchSearch && matchCategory;
  });

  // ================= PAGINATION =================
  const indexOfLast = currentPage * shirtsPerPage;
  const indexOfFirst = indexOfLast - shirtsPerPage;
  const currentShirts = filteredShirts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredShirts.length / shirtsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl mb-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]"></div>

        <div className="relative p-16 md:p-20 text-center backdrop-blur-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            The Jersey Collection
          </h1>

          <div className="mt-10 max-w-2xl mx-auto">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="rounded-3xl p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black shadow-inner">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentShirts.length > 0 ? (
            currentShirts.map(shirt => (
              <ShirtCard key={shirt.id} shirt={shirt} />
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No jerseys found.
            </p>
          )}
        </div>

        {/* ===== PAGINATION ===== */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-10">

            {/* PREV */}
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Prev
            </button>

            {/* PAGE NUMBERS */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* NEXT */}
            <button
              onClick={() =>
                setCurrentPage(p => Math.min(p + 1, totalPages))
              }
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </button>

          </div>
        )}

      </div>

      <div className="mt-16">
        <Testimonials />
      </div>

    </div>
  );
}

export default Store;
