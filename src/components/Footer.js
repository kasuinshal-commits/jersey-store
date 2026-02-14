import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">The Jersey Collection</h2>
          <p className="text-gray-400 mt-3">
            Premium Football Jerseys for true fans.
          </p>

          {/* ⭐ HAPPY CUSTOMERS */}
          <div className="mt-6">
            <p className="text-3xl font-bold text-green-400">20K+</p>
            <p className="text-gray-400">Happy Customers</p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Why We’re Different</h3>

          <ul className="space-y-2 text-gray-400">
            <li>✔ Free Shipping on Orders</li>
            <li>✔ Fast & Secure Delivery</li>
            <li>✔ High Quality Printing & Stitching</li>
            <li>✔ Custom Name & Number Printing</li>
            <li>✔ Exclusive Jersey Collection</li>
            <li>✔ Latest Club & National Team Jerseys</li>
            <li>✔ Wide Range of Football Jerseys</li>
            <li>✔ 100% Authentic Jerseys</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-green-400" />
            <FaFacebook className="cursor-pointer hover:text-green-400" />
            <FaTwitter className="cursor-pointer hover:text-green-400" />
            <FaYoutube className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-400">
        © 2026 The Jersey Collection
      </div>
    </footer>
  );
}

export default Footer;
