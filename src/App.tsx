import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import WhatsAppContact from "./components/WhatsAppContact";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <WhatsAppContact />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}