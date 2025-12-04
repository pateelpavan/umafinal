import React, { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useInView } from "motion/react";
import { Linkedin } from "lucide-react";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Pateel Narasimha Reddy",
      position: "Founder",
      image: "dad.png"
    },
    {
      name: "Pateel Pavan",
      position: "Marketing Head",
      image: "https://avatars.githubusercontent.com/u/180744442?v=4"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
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
            <span className="text-sm tracking-wider uppercase text-blue-600 font-semibold">Leadership</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Social link overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-8 text-center relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-semibold text-lg">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
