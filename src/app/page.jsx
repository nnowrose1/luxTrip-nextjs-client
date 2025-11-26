import LatestVehicles from "@/components/LatestVehicles";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
// import Marquee from "marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-50">
      <LatestVehicles></LatestVehicles>
      {/* customer testimonial section */}
   <section className="bg-blue-50 py-12 px-4 text-accent text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">
        What Our <span className="text-orange-400">Customers</span> Say
      </h2>
       
      
        <Testimonials></Testimonials>
     
      </section>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
