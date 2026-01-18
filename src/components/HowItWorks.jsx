const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Search Vehicles",
      desc: "Browse vehicles by category, price or availability.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Choose & Book",
      desc: "Select your vehicle and confirm your booking easily.",
      icon: "🚗",
    },
    {
      id: 3,
      title: "Enjoy the Ride",
      desc: "Pick up your vehicle and enjoy a smooth journey.",
      icon: "🎉",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <h2 data-aos="fade-left" className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">
        How It <span className="text-orange-400">Works</span>
      </h2>
      <p data-aos="fade-right" className="text-accent max-w-2xl mx-auto mb-8 text-center">
          Book your ride in just a few easy steps. From searching vehicles to hitting the road, we’ve made the process fast, simple, and hassle-free.
        </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-md transition"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl text-accent font-semibold mb-2">{step.title}</h3>
            <p className="text-primary">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
