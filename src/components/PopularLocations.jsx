import { FaMapMarkerAlt } from "react-icons/fa";

const PopularLocations = () => {
  const locations = [
    { name: "Dhaka", subtitle: "Capital City" },
    { name: "Chittagong", subtitle: "Port City" },
    { name: "Sylhet", subtitle: "Green City" },
    { name: "Khulna", subtitle: "Riverside" },
    { name: "Rajshahi", subtitle: "Silk City" },
    { name: "Barishal", subtitle: "Venice of Bengal" },
  ];

  return (
    <section className="py-14 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">
        Popular <span className="text-orange-400">Locations</span>
      </h2>
      <p className="text-center text-accent max-w-2xl mx-auto mb-8">
        We’re available in major cities and expanding every day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-blue-50 p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* gradient hover overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-200/40 to-blue-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex items-center gap-4">
              <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">
                <FaMapMarkerAlt size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent">
                  {loc.name}
                </h3>
                <p className="text-sm text-primary">{loc.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;
