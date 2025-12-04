import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Users, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "ISO certified processes ensuring the highest standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled engineers with decades of combined experience"
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Tight tolerances and exact specifications guaranteed"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
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
            <span className="text-sm tracking-wider uppercase text-blue-600 font-semibold">About Us</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Engineering Excellence Since 1996
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Founded in 1996 by Mr. Pateel Narasimha Reddy, Uma Enterprises has grown from a small machine shop 
              to a leading provider of precision mechanical engineering solutions. Our commitment to quality and 
              customer satisfaction has been the cornerstone of our success.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With decades of experience in the industry, we've built a reputation for delivering exceptional 
              machining services using state-of-the-art CNC machines and traditional turning equipment.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our team of skilled engineers and technicians work closely with clients to understand their unique 
              requirements and deliver solutions that exceed expectations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl transform rotate-3 opacity-10"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1548683726-203119be6a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHR1cm5pbmclMjBsYXRoZXxlbnwxfHx8fDE3NTg0NTg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CNC Machine"
              className="relative w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-500"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
