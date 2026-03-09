"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
  // ✅ Set initial state on mount
  setIsScrolled(window.scrollY > 10);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);  // ✅ lower threshold
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navItems = ["Home", "About", "Skills", "Journey", "Projects", "Contact"];

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false);
    const id = item.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      // Small delay to let mobile menu close first
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg"
            : "bg-background/40 backdrop-blur-md border-b border-border/30"  // ✅ always visible
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <span className="text-primary">Port</span>
            <span>folio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-foreground/80 hover:text-primary transition-colors relative group bg-transparent border-none cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.a
              href="/Shayaz resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground z-50 relative"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors bg-transparent border-none cursor-pointer text-base"
              >
                {item}
              </motion.button>
            ))}
            <motion.a
              href="/Shayaz resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              className="block w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}