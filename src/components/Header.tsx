import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "/logo.webp";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    // Use a small delay to ensure menu closes first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80; // Account for fixed header
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: "smooth"});
      }
    }, 50);
  };

  const onReferClick = () => {
    navigate("/refer");
  };
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-md shadow-card border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 ">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center space-x-3 hover:scale-105 transition-transform"
            >
              <img
                src={Logo}
                alt="Kunamix Logo"
                className="h-8 w-auto object-contain"
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md2:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA Buttons */}
          <div className="hidden md2:flex items-center gap-3">
            <ThemeToggle />

            {/* Refer & Earn Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Button
                onClick={onReferClick}
                variant="outline"
                className="
                  border-primary/30
                  bg-transparent
                  text-foreground
                  hover:bg-primary/10
                  hover:border-primary/50
                  hover:text-primary
                  transition-all 
                  duration-300
                  group 
                  cursor-pointer
                "
              >
                <Gift className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                Refer & Earn
              </Button>
            </motion.div>

            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="
                  bg-gradient-primary 
                  text-primary-foreground
                  hover:opacity-90
                  hover:shadow-primary 
                  hover:scale-105
                  transition-all 
                  duration-300 
                  cursor-pointer
                "
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button & theme toggle */}
          <div className="md2:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                 
                 setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="text-foreground "
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card/90 backdrop-blur-md rounded-lg mt-2 border border-border/50">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  
                  scrollToSection(item.href);
                }}
                className="text-foreground hover:text-primary hover:bg-muted block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2 space-y-2">
              <Button
                onClick={onReferClick}
                variant="outline"
                className="
                  w-full
                  border-primary/30
                  bg-transparent
                  text-foreground
                  hover:bg-primary/10
                  hover:border-primary/50
                  hover:text-primary
                  transition-all 
                  duration-300
                  group 
                  cursor-pointer
                "
              >
                <Gift className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                Refer & Earn
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="
                  w-full 
                  bg-gradient-primary 
                  text-primary-foreground
                  hover:opacity-90
                  hover:shadow-primary 
                  hover:scale-105
                  transition-all 
                  duration-300
                "
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;