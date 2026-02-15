function SidebarFilter({ selected, setSelected }) {
    const categories = [
      "Football jersey",
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
      <div className="bg-white shadow rounded-xl p-5 sticky top-24">
        <h3 className="font-bold text-lg mb-4">Categories</h3>
  
        <div className="space-y-2">
          <button
            onClick={() => setSelected("")}
            className={`block w-full text-left px-3 py-2 rounded ${
              selected === "" ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            All
          </button>
  
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`block w-full text-left px-3 py-2 rounded ${
                selected === cat
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default SidebarFilter;
  