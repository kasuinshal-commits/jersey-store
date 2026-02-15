import { Link } from "react-router-dom";
import logo from "../Assets/Logo.jpg";
import CategoryMenu from "./CategoryMenu";

function Navbar({ setCategory }) {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">

          {/* LEFT — MENU + LOGO + NAME */}
          <div className="flex items-center gap-3">

            {/* 3 DASH MENU */}
            <CategoryMenu setCategory={setCategory} />

            {/* LOGO */}
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 md:w-12 md:h-12 rounded-lg object-cover"
            />

            {/* STORE NAME */}
            <h1 className="text-white font-bold text-base md:text-2xl leading-tight">
              The Jersey Collection
            </h1>

          </div>

          {/* RIGHT MENU */}
          <nav className="flex gap-4 md:gap-6 text-white text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-gray-300">
              Store
            </Link>

            <Link to="/admin" className="hover:text-gray-300">
              Admin
            </Link>
          </nav>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
