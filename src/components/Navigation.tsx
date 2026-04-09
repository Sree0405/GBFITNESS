import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import gbLogo from "@/assets/gb-logo-1.png"
const navItems = [
  { label: "Home", route: "/" },
  { label: "Programs", route: "/programs" },
  { label: "Equipment", route: "/equipment" },
  { label: "Results", route: "/results" },
  { label: "Gallery", route: "/gallery" },
  { label: "Events", route: "/events" },
  { label: "Membership", route: "/membership" },
  { label: "Contact", route: "/contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-panel py-3" : "py-5 bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
          <img
            src={gbLogo}
            className="min-w-5 max-w-8"
            alt="GB Fitness Studio Avadi logo — gym in Avadi, Chennai"
          />
            <span className="font-heading text-2xl font-bold tracking-wider text-foreground">
                GB<span className="text-primary">FITNESS</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  location.pathname === item.route
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 bg-primary text-primary-foreground font-heading text-xs tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300"
            >
              Book Free Trial
            </Link>
          </div>

          <button
            className="xl:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.route}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={item.route}
                  className={`font-heading text-2xl tracking-wider uppercase transition-colors ${
                    location.pathname === item.route ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Link
                to="/contact"
                className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase"
              >
                Book Free Trial
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
