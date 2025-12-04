import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, MessageCircle, Clock } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const WhatsAppContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const phoneNumber = "7416472177";
  const message = "Hi, I would like to get a quote for my project from Uma Enterprises.";
  
  const handleWhatsAppClick = () => {
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      title: "25+ Years Experience",
      description: "Our team has decades of combined experience in precision machining and fabrication."
    },
    {
      title: "Quality Assurance",
      description: "We maintain strict quality control measures to ensure every part meets specifications."
    },
    {
      title: "Quick Turnaround",
      description: "Efficient processes allow us to deliver quality parts on time, every time."
    },
    {
      title: "Client Focused",
      description: "We work closely with clients to understand their needs and deliver customized solutions."
    }
  ];

  return (
    <section id="booking" className="py-20 md:py-28 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            className="inline-block mb-4 px-6 py-2 bg-green-50 rounded-full border border-green-200"
          >
            <span className="text-sm tracking-wider uppercase text-green-600 font-semibold">Get Started</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us instantly via WhatsApp for quick quotes and project discussions
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* WhatsApp Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="border-2 border-green-200 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 bg-gradient-to-br from-white to-green-50/30">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg"
                  >
                    <MessageCircle className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl text-gray-900 mb-3 font-bold">Get a Quote on WhatsApp</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Contact us directly on WhatsApp for instant responses to your project inquiries and quotations.
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-7 text-lg gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                      size="lg"
                    >
                      <MessageCircle className="w-6 h-6" />
                      Chat on WhatsApp
                    </Button>
                  </motion.div>

                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <p className="text-sm">
                        Available: Monday - Saturday, 9:00 AM - 6:00 PM
                      </p>
                    </div>
                    <p className="text-gray-700">
                      <span className="text-gray-500">Phone:</span> <span className="font-semibold">+91 {phoneNumber}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-8 font-bold">Why Choose Us?</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/80 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2 font-semibold">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContact;
