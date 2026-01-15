import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCorousel";
// import Portfolio from "@/components/Portfolio";
// import About from "@/components/About";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <main>
        <HeroCarousel />
        <Hero />
        <Services />
        {/* <Portfolio /> */}
        {/* <About /> */}
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
