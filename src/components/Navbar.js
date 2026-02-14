import { Link } from "react-router-dom";
import logo from "../Assets/Logo.jpg";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT — LOGO + NAME */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
          />

          <h1 className="text-white font-bold text-lg md:text-2xl tracking-wide">
            The Jersey Collection
          </h1>
        </div>

        {/* RIGHT — MENU */}
        <nav className="flex gap-6 text-white font-medium">
          <Link to="/" className="hover:text-gray-300">Store</Link>
          <Link to="/admin" className="hover:text-gray-300">Admin</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
