import { FaWhatsapp } from "react-icons/fa";

function WhatsAppChat() {
  const phoneNumber = "919082405767"; // ← replace with your number
  const message = "Hi! I want to buy a jersey.";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3 z-50">

      {/* CHAT TEXT */}
      <div className="hidden sm:block bg-white shadow-lg px-4 py-2 rounded-lg text-sm">
        Chat with us
      </div>

      {/* ICON */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl text-2xl"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
}

export default WhatsAppChat;
