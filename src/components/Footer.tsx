import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Home", route: "/" },
  { label: "Programs", route: "/programs" },
  { label: "Equipment", route: "/equipment" },
  { label: "Results", route: "/results" },
];

const programLinks = [
  { label: "Strength Training", route: "/programs" },
  { label: "Fat Loss", route: "/programs" },
  { label: "Athletic Performance", route: "/programs" },
  { label: "Private Coaching", route: "/programs" },
];

const moreLinks = [
  { label: "Gallery", route: "/gallery" },
  { label: "Events", route: "/events" },
  { label: "Membership", route: "/membership" },
  { label: "Contact", route: "/contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram" ,route:"https://www.instagram.com/gb_fitness_studio_avadi"},
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
  { icon: Facebook, label: "Facebook" },
];
const developer = {
  name: "Sreekanth",
  role: "Software Engineer",
  portfolio: "https://sreefolio.vercel.app/",
  linkedin: "http://linkedin.com/in/sreekanth04052005/",
  phone: "+91 9363965927"
};
const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative border-t border-border">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <span className="font-heading text-2xl font-bold tracking-wider text-foreground">
                GB<span className="text-primary"> FITNESS</span>
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
              Where elite performance begins. Premium training, world-class equipment, results that define excellence.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.route}
                  aria-label={s.label}
                  className="w-9 h-9 glass-panel-hover flex items-center justify-center"
                >
                  <s.icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.route} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {programLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.route} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {moreLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.route} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="font-body text-sm text-muted-foreground mb-4">Get training tips and exclusive offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-secondary border border-border px-4 py-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <button className="w-full py-2.5 bg-primary text-primary-foreground font-heading text-xs tracking-wider uppercase hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className="divider-crimson mt-12 mb-6" />

<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

  {/* Gym Copyright */}
  <p className="font-body text-xs text-muted-foreground">
    © 2026 GB Fitness Studio. All rights reserved.
  </p>

  {/* Developer Credits */}
  <div className="font-body text-xs text-muted-foreground flex flex-col sm:flex-row items-center gap-2 sm:gap-4">

    <span>
      Designed & Developed by{" "}
      <span className="text-primary font-semibold">
        {developer.name}
      </span>
    </span>

    <span className="hidden sm:inline">|</span>

    <span className="text-muted-foreground/80">
      {developer.role}
    </span>

    <span className="hidden sm:inline">|</span>

    <a
      href={developer.portfolio}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors"
    >
      Portfolio
    </a>

    <span className="hidden sm:inline">|</span>

    <a
      href={developer.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors"
    >
      LinkedIn
    </a>

    <span className="hidden sm:inline">|</span>

    <span>{developer.phone}</span>

  </div>

</div>
      </div>
    </footer>
  );
};

export default Footer;
