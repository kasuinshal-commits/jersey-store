function WhyChooseUs() {
    const features = [
      {
        title: "Free Shipping on Orders",
        desc: "Enjoy a seamless shopping experience with no additional shipping charges. The price you see is the price you pay, ensuring complete transparency.",
        icon: "🚚"
      },
      {
        title: "Wide Range of Football Jerseys",
        desc: "Choose from an unparalleled selection of club and national team jerseys. From Premier League giants to lesser-known teams, we have something for every fan.",
        icon: "⚽"
      },
      {
        title: "100% Authentic Jerseys",
        desc: "We source all our jerseys directly from trusted manufacturers and official suppliers, ensuring each product is authentic and of the highest quality.",
        icon: "✅"
      }
    ];
  
    return (
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
  
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 mt-2">
            Shop With Us and Wear Your Pride!
          </p>
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
  
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
  
              <p className="text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default WhyChooseUs;
  