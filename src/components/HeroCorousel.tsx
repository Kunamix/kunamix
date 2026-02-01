import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

import carouselDecor2 from "@/assets/carousel/carousel-decor-2.png";
import carouselDecor1 from "@/assets/carousel/carousel-decor-1.png";
import carouselDecor3 from "@/assets/carousel/carousel-decor-3.png";
import carouselDecor4 from "@/assets/carousel/carousel-decor-4.png";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Palette,
  Puzzle,
} from "lucide-react";

interface Slide {
  id: number;
  badge: string;
  icon: React.ReactNode;
  headline: string;
  highlightedText: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Best Value",
    icon: <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    headline: "Start Your Professional Website at Just",
    highlightedText: "₹5,000",
    features: [
      "Full website design",
      "Mobile-friendly & fast",
      "Perfect for startups & small businesses",
    ],
    ctaText: "Get Started",
    ctaLink: "#contact",
    image: carouselDecor1,
  },
  {
    id: 2,
    badge: "Creative Design",
    icon: <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    headline: "Logo Design Starting from",
    highlightedText: "₹1,500",
    features: [
      "Modern & unique logos",
      "Brand-focused design",
      "Multiple revisions available",
    ],
    ctaText: "View Portfolio",
    ctaLink: "#portfolio",
    image: carouselDecor2,
  },
  {
    id: 3,
    badge: "Full Service",
    icon: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    headline: "Affordable Digital Services for",
    highlightedText: "Growing Businesses",
    features: [
      "Website Development",
      "Branding & Logo Design",
      "Maintenance & Support",
    ],
    ctaText: "Our Services",
    ctaLink: "#services",
    image: carouselDecor3,
  },
  {
    id: 4,
    badge: "Custom Solutions",
    icon: <Puzzle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    headline: "Custom Solutions at",
    highlightedText: "Decent Prices",
    features: ["Transparent pricing", "Fast delivery", "Reliable support"],
    ctaText: "Contact Us",
    ctaLink: "#contact",
    image: carouselDecor4,
  },
];

const pulseAnimation = {
  scale: [1, 1.2, 1],
  opacity: [0.5, 0.8, 0.5],
};

const pulseTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const floatingTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="banner"
      className="w-full relative overflow-hidden bg-carousel"
    >
      {/* Animated Background gradient Orbs - Hidden on very small screens for performance  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={pulseAnimation}
          transition={pulseTransition}
          className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-carousel-blob-1 rounded-full blur-3xl"
        />
        <motion.div
          animate={pulseAnimation}
          transition={{ ...pulseTransition, delay: 1 }}
          className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-carousel-blob-2 rounded-full blur-3xl"
        />
        <motion.div
          animate={pulseAnimation}
          transition={{ ...pulseTransition, delay: 2 }}
          className="hidden sm:block absolute top-1/4 right-1/4 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-carousel-blob-3 rounded-full blur-3xl opacity-40"
        />
      </div>

      {/* Floating Decorative Elements - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-4 h-4 border-2 border-carousel-accent/30 rounded-sm"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-6 h-6 border-2 border-carousel-accent/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={floatingTransition}
          className="absolute bottom-32 left-20 w-3 h-3 bg-carousel-accent/40 rounded-full"
        />
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-carousel-gradient-end/50 rounded-full"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-5"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-carousel-badge text-carousel-badge-foreground text-xs sm:text-sm font-medium shadow-lg shadow-primary/10"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-carousel-gradient-start to-carousel-gradient-end flex items-center justify-center text-white">
                  {slides[currentSlide].icon}
                </span>
                {slides[currentSlide].badge}
              </motion.span>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-carousel-foreground leading-tight"
              >
                {slides[currentSlide].headline}{" "}
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-carousel-gradient-start to-carousel-gradient-end">
                    {slides[currentSlide].highlightedText}
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-carousel-gradient-start to-carousel-gradient-end rounded-full origin-left"
                  />
                </span>
              </motion.h2>

              {/* Features */}
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2 sm:gap-3"
              >
                {slides[currentSlide].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 text-carousel-muted justify-center lg:justify-start"
                  >
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-carousel-gradient-start/20 to-carousel-gradient-end/20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-carousel-gradient-start to-carousel-gradient-end" />
                    </span>
                    <span className="text-sm sm:text-base md:text-lg">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
              >
                <Button
                  variant="carousel"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <a href={slides[currentSlide].ctaLink} className="group">
                    {slides[currentSlide].ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <span className="text-xs sm:text-sm text-carousel-muted">
                  No hidden fees
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center py-4 sm:py-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
              >
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-carousel-gradient-start to-carousel-gradient-end rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-25 scale-90" />

                {/* Floating Image */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].badge}
                    className="relative z-10 w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-primary/20"
                  />

                  {/* Decorative Ring - Hidden on small screens */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="hidden sm:block absolute -inset-3 sm:-inset-4 border-2 border-dashed border-carousel-accent/20 rounded-[1.5rem] sm:rounded-[2rem] pointer-events-none"
                  />
                </motion.div>

                {/* Floating Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-2 left-2 sm:bottom-4 sm:-left-4 md:-left-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-lg sm:shadow-xl shadow-primary/10"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-carousel-gradient-start to-carousel-gradient-end flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        50+
                      </span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold  text-black">
                        Projects
                      </p>
                      <p className="text-[10px] sm:text-xs text-carousel-muted">
                        Completed
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute top-2 right-2 sm:top-4 sm:-right-4 md:-right-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-lg sm:shadow-xl shadow-primary/10"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.svg
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + star * 0.1 }}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>

                    <span className="text-xs sm:text-sm font-semibold text-black">
                      5.0
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-carousel-muted mt-0.5 sm:mt-1">
                    Client Rating
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pb-2">
          {/* Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-carousel-nav hover:bg-carousel-nav-hover text-carousel-nav-foreground transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-carousel-accent shadow-md sm:shadow-lg cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-2 sm:h-3 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-carousel-accent ${
                  index === currentSlide
                    ? "w-8 sm:w-10 bg-gradient-to-r from-carousel-gradient-start to-carousel-gradient-end shadow-md sm:shadow-lg shadow-primary/30"
                    : "w-2 sm:w-3 bg-carousel-dot hover:bg-carousel-dot-hover"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-carousel-nav hover:bg-carousel-nav-hover text-carousel-nav-foreground transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-carousel-accent shadow-md sm:shadow-lg cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
