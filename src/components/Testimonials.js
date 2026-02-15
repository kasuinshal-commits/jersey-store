function Testimonials() {
    const reviews = [
      {
        name: "Abdulla Ansari",
        text: "Received my jersey today and the quality is excellent. The fabric feels premium and the fitting is perfect. Highly recommended!",
      },
      {
        name: "Umair Shaikh",
        text: "Amazing service and fast delivery. The jersey quality exceeded my expectations. Will definitely order again! ⭐🙏",
      },
      {
        name: "Junaid Ansari",
        text: "Best place to buy jerseys at affordable prices. Great quality, nice packaging, and smooth ordering experience.",
      },
    ];
  
    return (
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
  
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What do our users say?
        </h2>
  
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {review.text}
              </p>
  
              <div className="flex items-center gap-3">
  
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
            </div>
          ))}
  
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  