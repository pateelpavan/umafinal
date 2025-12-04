import { MapPin, Phone, Mail } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Sai Priya Nivas, 10-11-41, Vinayak Nagar Balanagar Rd, Vinayak Nagar, Balanagar, Hyderabad, Telangana 500042"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7416472177"
    },
    {
      icon: Mail,
      title: "Email",
      content: "umaentetprise90sd@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
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
            <span className="text-sm tracking-wider uppercase text-blue-600 font-semibold">Get In Touch</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us Today
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Let's Discuss Your Project</h3>
            <p className="text-gray-700 mb-10 leading-relaxed text-lg">
              We'd love to discuss your next project. Reach out to us through any of the following channels:
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{info.content}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl transform rotate-3 opacity-10"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8758165129093!2d78.45350527493666!3d17.46565688343488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9100311d72d1%3A0x7ed6f393c5708da6!2sUma%20enterprises!5e0!3m2!1sen!2sin!4v1751215775983!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Uma Enterprises Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
