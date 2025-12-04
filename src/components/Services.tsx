import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Settings, Cog, Wrench } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "CNC Machining",
      description: "Precision CNC machining services for complex parts with tight tolerances. Our advanced CNC machines can handle a wide range of materials and geometries.",
      image: "https://images.unsplash.com/photo-1548683726-203119be6a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHR1cm5pbmclMjBsYXRoZXxlbnwxfHx8fDE3NTg0NTg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Settings
    },
    {
      title: "Turning Services",
      description: "High-quality turning services for cylindrical parts. Our turning machines can handle both small and large production runs with consistent quality.",
      image: "https://images.unsplash.com/photo-1739879501339-1c5a2bf1eb46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHR1cm5pbmclMjBsYXRoZXxlbnwxfHx8fDE3NTg0NTg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Cog
    },
    {
      title: "Metal Fabrication",
      description: "Custom metal fabrication services including cutting, bending, and assembling metal structures. We work with various metals to meet your specific needs.",
      image: "https://images.unsplash.com/photo-1598302936664-407d6c250e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd2VsZGluZ3xlbnwxfHx8fDE3NTg0NTg4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Wrench
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-6 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-sm tracking-wider uppercase text-blue-600 font-semibold">Our Services</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Engineering Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-gray-200 hover:border-blue-300 group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.15 }}
                    className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 mt-6 rounded-full"
                  ></motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
