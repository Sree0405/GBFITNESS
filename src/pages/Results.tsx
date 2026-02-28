import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Star, Quote, ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";

const testimonials = [
  { name: "Marcus Chen", role: "CEO, TechVenture", quote: "GB Fitness transformed not just my body, but my entire approach to performance. The private coaching is unmatched.", rating: 5 },
  { name: "Sarah Williams", role: "Professional Athlete", quote: "The training methodologies and recovery technology here are world-class. I've seen a 30% improvement in my performance.", rating: 5 },
  { name: "David Ross", role: "Investment Director", quote: "In 6 months, I achieved what I couldn't in 5 years elsewhere. The executive fitness program fits perfectly into my schedule.", rating: 5 },
  { name: "Elena Rodriguez", role: "Marathon Runner", quote: "The athletic performance program gave me the edge I needed. My marathon time dropped by 15 minutes in just 3 months.", rating: 5 },
  { name: "James Park", role: "Entrepreneur", quote: "The combination of personal training and nutrition guidance has been life-changing. I feel 10 years younger.", rating: 5 },
  { name: "Lisa Thompson", role: "Corporate Executive", quote: "As a busy executive, I need efficiency. GB Fitness delivers maximum results in every single session.", rating: 5 },
];

const stats = [
  { icon: TrendingUp, value: "2,500+", label: "Transformations" },
  { icon: Award, value: "98%", label: "Goal Achievement" },
  { icon: Users, value: "15+", label: "Elite Trainers" },
  { icon: Star, value: "4.9/5", label: "Member Rating" },
];

const Results = () => {
  return (
    <div>
      <PageHero
        eyebrow="Proven Results"
        title="Success"
        titleAccent="Stories"
        description="Real members, real transformations, real results. See what's possible with GB Fitness."
      />

      {/* Stats */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} className="text-center glass-panel p-8">
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Images + Testimonials */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img src={training1} alt="Transformation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img src={training2} alt="Transformation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} className="glass-panel p-8">
                <Quote className="w-6 h-6 text-primary/40 mb-4" />
                <p className="font-body text-foreground/90 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wider">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{t.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center glass-panel p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Your Story Starts Here
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Join the hundreds who have already transformed their lives at GB Fitness.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Begin Your Transformation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Results;
