import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
} from "lucide-react";
import contactData from "@/constants/contact.json";
import Logo from "/logo.png";
import discord from "../assets/icons/discord.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { contactInfo, social } = contactData;
  const navigate = useNavigate();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "discord":
        return <img src={discord} className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const scrollToSection = (href: string) => {
    if (href === "/terms-conditions" || href === "/privacy-policy") {
      navigate(href);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "PrivacyAndPolicy", href: "/privacy-policy" },
    { name: "TermsAndConditions", href: "/terms-conditions" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Desktop Apps",
    "UI/UX Design",
    "Branding",
    "Consulting",
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <img
                  src={Logo}
                  alt="Kunamix Logo"
                  className="w-auto h-14 object-contain"
                />
                <br />
                <p className="text-muted-foreground max-w-md leading-relaxed">
                  We're a passionate team of three developers and designers
                  creating beautiful, functional digital solutions that make a
                  difference.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  {contactInfo.email}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="w-4 h-4 mr-3 text-primary">📍</span>
                  {contactInfo.address}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {Object.entries(social).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {getSocialIcon(platform)}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
