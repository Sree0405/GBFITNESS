import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Dumbbell, Flame, Zap, Heart, User, Target, ArrowRight } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with progressive overload programming, Olympic lifts, and periodized strength cycles designed by certified strength coaches.", features: ["Personalized programming", "Form analysis", "Progressive tracking"] },
  { icon: Flame, title: "Fat Loss", desc: "Science-backed body recomposition combining HIIT, metabolic conditioning, and nutrition protocols for sustainable results.", features: ["Metabolic testing", "Meal planning", "Weekly check-ins"] },
  { icon: Zap, title: "CrossFit", desc: "High-intensity functional training that builds endurance, strength, and mental toughness in a competitive group environment.", features: ["Daily WODs", "Skill progressions", "Community events"] },
  { icon: Target, title: "Athletic Performance", desc: "Sport-specific speed, agility, and power training for competitive athletes looking to gain a measurable edge.", features: ["Movement screening", "Speed training", "Recovery protocols"] },
  { icon: Heart, title: "Weight Management", desc: "Sustainable approaches to body composition with medical-grade body scanning and ongoing accountability coaching.", features: ["InBody scanning", "Habit coaching", "Support groups"] },
  { icon: User, title: "Private Coaching", desc: "One-on-one sessions with certified elite trainers in private studios, fully customized to your schedule and goals.", features: ["Dedicated trainer", "Flexible scheduling", "Private studio"] },
];

const Programs = () => {
  return (
    <div>
      <PageHero
        eyebrow="Our Programs"
        title="Engineered For"
        titleAccent="Excellence"
        description="Every program is built on science, delivered with precision, and designed for measurable transformation."
      />

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel-hover p-8 group flex flex-col"
            >
              <p.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide mb-3">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="font-body text-xs text-secondary-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center glass-panel p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Not Sure Which Program?
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Book a free consultation and our team will recommend the perfect program for your goals.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
