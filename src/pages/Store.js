import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ShirtCard from "../components/ShirtCard";
import SearchBar from "../components/SearchBar";
import Testimonials from "../components/Testimonials";

function Store() {
  const [shirts, setShirts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchShirts();
  }, []);

  const fetchShirts = async () => {
    const snap = await getDocs(collection(db, "shirts"));
    setShirts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  // FILTER
  const filteredShirts = shirts.filter(shirt =>
    shirt.name?.toLowerCase().includes(search.toLowerCase()) ||
    shirt.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden rounded-3xl mb-12 shadow-2xl">

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800"></div>

        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]"></div>

        {/* Content */}
        <div className="relative p-16 md:p-20 text-center backdrop-blur-lg">

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The Jersey Collection
          </h1>

          <p className="text-gray-300 mt-4 text-lg md:text-xl">
            Premium Football Jerseys for True Fans
          </p>

          {/* SEARCH BAR */}
          <div className="mt-10 max-w-2xl mx-auto">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

        </div>
      </div>

      {/* ================= PRODUCT GALLERY ================= */}
      <div className="rounded-3xl p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black shadow-inner">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Jerseys
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredShirts.length > 0 ? (
            filteredShirts.map(shirt => (
              <ShirtCard
                key={shirt.id}
                shirt={shirt}
                isAdmin={false}
              />
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No jerseys found.
            </p>
          )}
        </div>

      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="mt-16">
        <Testimonials />
      </div>

    </div>
  );
}

export default Store;
