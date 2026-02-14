import Navbar from "./Navbar";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import WhatsAppChat from "./WhatsAppChat";


function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Why Choose Us (ABOVE FOOTER) */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
      <WhatsAppChat />


    </div>
  );
}

export default Layout;
