import Navbar from "./Navbar";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import WhatsAppChat from "./WhatsAppChat";

function Layout({ children, setCategory }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* PASS CATEGORY TO NAVBAR */}
      <Navbar setCategory={setCategory} />

      <main className="flex-grow">
        {children}
      </main>

      <WhyChooseUs />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default Layout;
