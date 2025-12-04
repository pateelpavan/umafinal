import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    {
      name: "TATA Coffee",
      url: "https://www.tatacoffee.com/",
      logo: "https://img-cdn.publive.online/fit-in/1200x675/newsdrum-in/media/media_files/9sFN3oe8P0RUCkF2yqZ6.jpg"
    },
    {
      name: "KJS Pvt Ltd",
      url: "https://www.kjsindia.com",
      logo: "https://media.licdn.com/dms/image/v2/C561BAQGihNI2-xhblQ/company-background_10000/company-background_10000/0/1585302063309/kjs_india_pvt_ltd_cover?e=2147483647&v=beta&t=AH1VNyPhUv3wt-QzkpLqtbl_DKlBadyk8l2TGtKgeFQ"
    },
    {
      name: "Mayora India Private Limited",
      url: "https://www.mayoraindia.com/",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEYOxzQJrmiuw/company-logo_200_200/company-logo_200_200/0/1630488067100/mayora_logo?e=2147483647&v=beta&t=rHluj0y6sHP-urdGlgkMyBEbGAyzIV9VW5pov-pej28"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
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
            <span className="text-sm tracking-wider uppercase text-blue-600 font-semibold">Trusted By</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Valued Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group"
            >
              <a href={client.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video relative flex items-center justify-center overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
