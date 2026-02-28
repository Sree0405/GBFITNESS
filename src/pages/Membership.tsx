import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Core",
    price: "$79",
    period: "/month",
    desc: "Professional Training Access",
    features: ["Full gym access 24/7", "All group classes", "Locker & shower facilities", "Fitness assessment", "Mobile app access", "Free parking"],
    featured: false,
  },
  {
    name: "Prime",
    price: "$129",
    period: "/month",
    desc: "Personal Coaching + Recovery",
    features: ["Everything in Core", "2x personal training/month", "Recovery pod access", "Nutrition consultation", "Priority class booking", "Guest passes (2/month)", "InBody body scans"],
    featured: true,
  },
  {
    name: "Elite",
    price: "$199",
    period: "/month",
    desc: "Private Studio + Nutrition",
    features: ["Everything in Prime", "Unlimited personal training", "Private studio access", "Custom weekly meal plans", "VIP events access", "Unlimited guest passes", "Dedicated concierge", "Quarterly health assessment"],
    featured: false,
  },
];

const faqs = [
  { q: "Can I freeze my membership?", a: "Yes, all plans include up to 30 days of freezing per year at no additional cost." },
  { q: "Is there a joining fee?", a: "We occasionally waive joining fees during promotional periods. Contact us for current offers." },
  { q: "Can I upgrade my plan?", a: "Absolutely. You can upgrade anytime and your billing will be prorated for the remainder of the month." },
  { q: "What's your cancellation policy?", a: "We require 30 days notice for cancellation. No long-term contracts required." },
];

const Membership = () => {
  return (
    <div>
      <PageHero
        eyebrow="Membership"
        title="Invest In"
        titleAccent="Yourself"
        description="Choose the plan that fits your lifestyle. Every membership includes world-class facilities and expert support."
      />

      {/* Plans */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 flex flex-col ${
                plan.featured ? "glass-panel border-primary/30 crimson-glow" : "glass-panel"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-heading uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wider">{plan.name}</h3>
              <p className="font-body text-sm text-muted-foreground mt-2">{plan.desc}</p>
              <div className="mt-6 mb-8">
                <span className="font-heading text-5xl font-bold">{plan.price}</span>
                <span className="font-body text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 w-full py-3 font-heading text-sm tracking-wider uppercase transition-all duration-300 text-center block ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-foreground/20 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Schedule Consultation
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold uppercase text-center mb-10">
            Frequently Asked <span className="text-gradient-crimson">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} className="glass-panel p-6">
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-2">{faq.q}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
