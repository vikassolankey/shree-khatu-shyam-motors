import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Award,
  CheckCircle2,
  Star,
  Play,
  ExternalLink,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";

// --- Shared Components ---

const LOGO_SRC = "gallery/logo.png";

export const TopHeader = () => (
  <div className="hidden lg:block bg-dark-secondary border-b border-white/5 py-2 text-xs">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-6 text-gray-400">
        <span className="flex items-center gap-2">
          <Award className="w-3 h-3 text-primary" />
          UDYAM-UP-54-0038617
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-3 h-3 text-primary" />
          GST: 09XXXXXXXXXXXXZ
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="mailto:Info@shreekhatushyammotors.co.in"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Mail className="w-3 h-3 text-primary" />
          Info@shreekhatushyammotors.co.in
        </a>
        <a
          href="tel:8218258915"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone className="w-3 h-3 text-primary" />
          +91 8218258915 
        </a>
         <a
          href="tel:8218258915"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone className="w-3 h-3 text-primary" />
           +91 9389348674
        </a>
      </div>
    </div>
  </div>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark/80 backdrop-blur-lg py-1 shadow-xl"
          : "bg-transparent py-2",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={LOGO_SRC}
            alt="Shree Khatu Shyam Motors logo"
            className="h-16 md:h-20 w-auto rounded-lg object-contain group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          {/* <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none tracking-tight">
              SHREE KHATU SHYAM
            </span>
            <span className="text-primary font-bold text-sm tracking-[0.2em] leading-none">
              MOTORS
            </span>
          </div> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-gray-300",
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            {[Instagram, Youtube, Linkedin, Twitter, Facebook, ExternalLink].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ),
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-xl flex flex-col"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="ml-auto w-full max-w-xs h-full bg-dark-secondary p-8 shadow-2xl border-l border-white/5 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <img
                    src={LOGO_SRC}
                    alt="Logo"
                    className="h-12 w-auto rounded-xl object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-display font-bold text-xl">
                    SKS MOTORS
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-2xl font-display font-semibold transition-colors flex items-center justify-between group",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-white hover:text-primary",
                      )}
                    >
                      {link.name}
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                ))}

                
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
                <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest font-bold">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {[Instagram, Youtube, Linkedin, Twitter, Facebook, ExternalLink].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const GoogleTranslateWidget = () => {
  useEffect(() => {
    (window as any).googleTranslateElementInit = function () {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element",
      );
    };
    const s = document.createElement("script");
    s.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return <div id="google_translate_element" className="mt-6" />;
};

const VisitCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const key = "visit_count";
    const current = parseInt(localStorage.getItem(key) || "0", 10) || 0;
    const next = current + 1;
    localStorage.setItem(key, String(next));
    setCount(next);
  }, []);
  return (
    <p className="text-gray-400 text-sm mt-6">
      Visits: <span className="font-mono text-white">{count}</span>
    </p>
  );
};

export const Footer = () => (
  <footer className="bg-dark-secondary pt-20 pb-10 border-t border-white/5">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={LOGO_SRC}
              alt="Logo"
              className="h-20 md:h-24 w-auto rounded-xl object-contain"
              referrerPolicy="no-referrer"
            />
           
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Reliable Transport & Trusted Services in Mathura. Delivering
            excellence with faith and trust since 2026.
          </p>
          <div className="flex gap-4">
            {[Instagram, Youtube, Linkedin, Twitter, Facebook, ExternalLink].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {[
              "Home",
              "About",
              "Services",
              "Gallery",
              "Certificates",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3 h-3" /> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {[
              "Transportation",
              "House Cleaning",
              "Logistics",
              "Goods Relocation",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-primary" /> {item}
              </li>
            ))}
          </ul>
          <GoogleTranslateWidget />
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <a 
                href="https://maps.app.goo.gl/3cy4Vz4fLxjHuScAA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Ground Floor, Service Rd, nearby 1 Mandi Chauraha, Surya Nagar,
                Mathura, UP 281004
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>+91 8218258915</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>+91 9389348674</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>Info@shreekhatushyammotors.co.in</span>
            </li>
             <li className="flex gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>shreekhatushyammotorsmathura@gmail.com</span>
            </li>
          </ul>
          <VisitCounter />
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© 2026 Shree Khatu Shyam Motors | All Rights Reserved</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="https://www.webworldhub.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Designed by Web World Hub
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export const FloatingActions = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
    <a
      href="tel:918218258915"
      className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
    >
      <Phone className="text-white w-6 h-6" />
      <span className="absolute right-full mr-4 px-3 py-1 bg-dark-secondary border border-white/10 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call Us
      </span>
    </a>
    <a
      href="https://wa.me/918218258915"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
    >
      <MessageCircle className="text-white w-7 h-7" />
      <span className="absolute right-full mr-4 px-3 py-1 bg-dark-secondary border border-white/10 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp
      </span>
    </a>
  </div>
);

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-24 right-6 z-50 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-xl transition-all duration-300",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none",
      )}
    >
      <ArrowUp className="text-white w-5 h-5" />
    </button>
  );
};
