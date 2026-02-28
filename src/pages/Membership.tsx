import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Check, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Do you provide diet plans?",
    a: "Yes, our trainers provide customized diet charts based on your fitness goals such as weight loss or muscle gain."
  },
  {
    q: "Is personal training available?",
    a: "Yes, we offer one-to-one personal training sessions with certified fitness trainers."
  },
  {
    q: "Do beginners join the gym?",
    a: "Absolutely. Our trainers guide beginners step-by-step with proper workout plans and techniques."
  },
  {
    q: "Do you have transformation programs?",
    a: "Yes, our 90-day transformation program includes training, diet guidance, and progress tracking."
  }
];
const transformationPlan = {
  name: "90 Days Transformation",
  price: "₹14,999",
  period: "/90 days",
  desc: "Complete body transformation program with expert coaching and personalized guidance.",
  emi: "EMI Available",
  features: [
    "Weight Loss & Muscle Gain Programs",
    "Customized Diet Chart",
    "Strength Training & Cardio",
    "CrossFit Training Sessions",
    "Mobility & Flexibility Training",
    "Personalized Workout Plan",
    "Progress Tracking & Coaching Support",
  ],
};
const strengthPlans = [
  {
    name: "1 Month",
    price: "₹999",
    original: "₹1200",
  },
  {
    name: "3 Months",
    price: "₹2499",
    original: "₹3000",
  },
  {
    name: "6 Months",
    price: "₹4999",
    original: "₹6000",
  },
  {
    name: "1 Year",
    price: "₹6999",
    original: "₹12000",
  },
];
const strengthCardioPlans = [
  { name: "1 Month", price: "₹1200", original: "₹1500" },
  { name: "3 Months", price: "₹3000", original: "₹3600" },
  { name: "6 Months", price: "₹5999", original: "₹7200" },
  { name: "1 Year", price: "₹8000", original: "₹14400" },
];
const couplePlan = {
  name: "Couple Fitness Plan",
  price: "₹14,000",
  original: "₹16,000",
  desc: "Train together and stay motivated with our special couple membership offer.",
};
const personalTraining = {
  name: "Personal Training",
  price: "₹5000",
  desc: "26 days one-to-one personal training with expert fitness coach.",
};
const Membership = () => {
  return (
    <div>
      <PageHero
        eyebrow="Membership Plans"
        title="Choose Your"
        titleAccent="Transformation Plan"
        description="GB Fitness Studio offers flexible membership plans designed for strength, weight loss, muscle gain, and overall fitness transformation. Train with expert guidance and achieve real results."
      />

      {/* 90 Days Transformation */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel border-primary/30 crimson-glow p-10 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
              90 Days <span className="text-gradient-crimson">Transformation</span>
            </h2>

            <p className="text-muted-foreground mt-3">
              Complete body transformation program designed for weight loss, muscle gain and overall fitness improvement.
            </p>

            <div className="mt-6 flex justify-center items-center gap-4">
              <span className="text-5xl font-bold text-primary">₹14,999</span>
              <span className="text-m text-muted-foreground">/ 90 days</span>
            </div>

            <p className="text-primary mt-2 font-semibold">EMI Available</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-left">
              {transformationPlan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-primary text-primary-foreground uppercase text-sm tracking-wider hover:bg-primary/90 transition"
            >
              Join Transformation Program <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Strength Training */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">

          <h2 className="font-heading text-3xl font-bold uppercase text-center mb-10">
            Strength <span className="text-gradient-crimson">Training</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {strengthPlans.map((plan) => (
              <div key={plan.name} className="glass-panel p-6 text-center">
                <h4 className="font-heading uppercase text-sm">{plan.name}</h4>

                <div className="mt-3 flex justify-center items-center gap-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xs line-through text-muted-foreground">
                    {plan.original}
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="block mt-6 py-2 border border-primary text-primary text-sm uppercase hover:bg-primary hover:text-white transition"
                >
                  Join Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Strength + Cardio */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">

          <h2 className="font-heading text-3xl font-bold uppercase text-center mb-10">
            Strength & <span className="text-gradient-crimson">Cardio</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {strengthCardioPlans.map((plan) => (
              <div key={plan.name} className="glass-panel p-6 text-center">
                <h4 className="font-heading uppercase text-sm">{plan.name}</h4>

                <div className="mt-3 flex justify-center items-center gap-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xs line-through text-muted-foreground">
                    {plan.original}
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="block mt-6 py-2 border border-primary text-primary text-sm uppercase hover:bg-primary hover:text-white transition"
                >
                  Join Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Special Offers */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="glass-panel p-8 text-center">
            <h3 className="font-heading text-xl uppercase">{couplePlan.name}</h3>

            <div className="mt-4">
              <span className="text-4xl font-bold text-primary">{couplePlan.price}</span>
              <span className="ml-2 text-sm line-through text-muted-foreground">
                {couplePlan.original}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-3">
              Train together and stay motivated with our couple membership.
            </p>
          </div>

          <div className="glass-panel p-8 text-center">
            <h3 className="font-heading text-xl uppercase">{personalTraining.name}</h3>

            <div className="mt-4">
              <span className="text-4xl font-bold text-primary">{personalTraining.price}</span>
            </div>

            <p className="text-sm text-muted-foreground mt-3">
              26 days one-to-one coaching with certified trainer.
            </p>
          </div>

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
