import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">The Jersey Collection</h2>
          <h6>Founded By Talha Ansari</h6>
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

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/the.jersey.collection1?igsh=MXN1NXJpM2xmM2UyZw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer hover:text-green-400" />
          </a>

          {/* FACEBOOK */}
          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="cursor-pointer hover:text-green-400" />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://chat.whatsapp.com/HwtDRFTc09f9HvgZfag61a?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com/YOUR_CHANNEL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="cursor-pointer hover:text-green-400" />
          </a>

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
