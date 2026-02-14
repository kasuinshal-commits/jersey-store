function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search jerseys..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

export default SearchBar;
