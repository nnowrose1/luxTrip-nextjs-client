import { motion } from "framer-motion";

const stats = [
  { label: "Vehicles Available", value: "120+" },
  { label: "Happy Customers", value: "3,500+" },
  { label: "Cities Covered", value: "25+" },
  { label: "Bookings Completed", value: "9,000+" },
];

const Statistics = () => {
  return (
    <section className="pt-12 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2
          data-aos="fade-left"
          className="text-3xl md:text-4xl font-bold text-accent mb-4"
        >
          Our <span className="text-orange-400">Impact</span> in Numbers
        </h2>
        <p data-aos="fade-right" className="text-accent max-w-2xl mx-auto mb-8">
          These numbers reflect the trust our users place in us and the scale of
          our growing vehicle rental platform across multiple cities.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="
                bg-white border border-gray-200 rounded-2xl py-8 
                text-center shadow-sm hover:shadow-md transition
              "
            >
              <p className="text-3xl font-bold text-orange-400 mb-2">
                {stat.value}
              </p>
              <p className="text-accent text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
