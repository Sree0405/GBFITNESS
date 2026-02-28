import { motion } from "framer-motion";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Form submitted:", formData);
    e.preventDefault();
  };

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title="Begin Your"
        titleAccent="Transformation"
        description="Book a free consultation and experience the GB Fitness difference. Our team is ready to help you achieve your goals."
      />

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors" required />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Phone</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">I'm Interested In</label>
                <select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select an option</option>
                  <option value="membership">Membership</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5}
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none" />
            </div>
            <button type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300">
              Book Free Consultation
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            {[
              { icon: MapPin, title: "Location", lines: ["No: 4, OM SAKTHI COMPLEX, 1st Main Rd, JB Estate", "Avadi, Tamil Nadu 600054"] },
              { icon: Phone, title: "Phone", lines: ["09841522297"] },
              { icon: Mail, title: "Email", lines: ["gbfitness@gmail.com"] },
              { icon: Clock, title: "Hours", lines: ["Mon–Fri: 5AM – 11PM", "Sat–Sun: 6AM – 10PM"] },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 glass-panel flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="font-heading text-sm font-semibold uppercase tracking-wider">
                    {item.title}
                  </p>

                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="font-body text-sm text-muted-foreground mt-1"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Section */}
            <div className="glass-panel overflow-hidden rounded-xl border border-primary/30 shadow-[0_0_25px_rgba(230,28,28,0.15)]">    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8058346671787!2d80.10715187485702!3d13.111483587216927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52634f136dd34d%3A0x971b484ff472347d!2sGB%20FITNESS%20GYM%20AVADI%20%7C%20BEST%20GYM%20IN%20AVADI!5e0!3m2!1sen!2sin!4v1771040562926!5m2!1sen!2sin"
              className="w-full h-[300px] sm:h-[350px] lg:h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GB Fitness Location - Avadi"
            />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
