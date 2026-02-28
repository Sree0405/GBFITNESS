import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Star, Quote, ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import Ctasection from "@/components/ctasection";

import result1 from "@/assets/Results/result1.jpg"
import result2 from "@/assets/Results/result2.jpg"
import result3 from "@/assets/Results/result3.jpg"
import result4 from "@/assets/Results/result4.jpg"
import result5 from "@/assets/Results/result5.jpg"
import result6 from "@/assets/Results/result6.jpg"

const transformations = [
  {
    name: "Member Transformation",
    program: "Weight Loss Program",
    beforeWeight: "99.8 kg",
    afterWeight: "91.4 kg",
    duration: "30 Days",
    desc: "Focused strength training and cardio helped achieve visible fat loss and improved fitness.",
    image: result1,
  },
  {
    name: "Member Transformation",
    program: "Strength Training",
    beforeWeight: "Before",
    afterWeight: "After",
    duration: "60 Days",
    desc: "Consistent strength workouts and discipline resulted in improved muscle definition and body composition.",
    image: result2,
  },
  {
    name: "Member Transformation",
    program: "Weight Loss Program",
    beforeWeight: "104.6 kg",
    afterWeight: "97.0 kg",
    duration: "60 Days",
    desc: "Structured training and nutrition guidance helped achieve significant fat loss and improved endurance.",
    image: result3,
  },
  {
    name: "Member Transformation",
    program: "Fitness Transformation",
    beforeWeight: "110.1 kg",
    afterWeight: "104.6 kg",
    duration: "60 Days",
    desc: "Lifestyle changes and gym training helped build strength and improve overall physique.",
    image: result4,
  },
  {
    name: "Member Transformation",
    program: "Weight Loss Program",
    beforeWeight: "Before",
    afterWeight: "After",
    duration: "60 Days",
    desc: "Cardio, strength training, and diet discipline helped achieve consistent weight reduction.",
    image: result5,
  },
    {
    name: "Member Transformation",
    program: "Weight Loss Program",
    beforeWeight: "88.2 kg",
    afterWeight: "84.5 kg",
    duration: "30 Days",
    desc: "Cardio, strength training, and diet discipline helped achieve consistent weight reduction.",
    image: result6,
  },
];

const stats = [
  { icon: TrendingUp, value: "50+", label: "Member Transformations" },
  { icon: Award, value: "90 Days", label: "Transformation Programs" },
  { icon: Users, value: "400+", label: "Active Members" },
  { icon: Star, value: "5/5", label: "Member Satisfaction" },
];

const Results = () => {
  return (
    <div>
<PageHero
  eyebrow="Transformation Results"
  title="Real People."
  titleAccent="Real Results."
  description="At GB Fitness Studio, we focus on real body transformations through strength training, fat loss programs, and expert coaching."
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

{/* Transformation Results */}
<section className="section-padding pt-0">
  <div className="max-w-7xl mx-auto">

    <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center mb-16">
      Member <span className="text-gradient-crimson">Transformations</span>
    </h2>

    <div className="space-y-12">

      {transformations.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-panel p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={t.image}
                alt="Transformation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>

              <p className="text-primary text-xs uppercase tracking-wider mb-2">
                {t.program}
              </p>

              <h3 className="font-heading text-2xl font-bold uppercase mb-4">
                {t.name}
              </h3>

              <div className="flex items-center gap-6 mb-4">

                <div>
                  <p className="text-xs text-muted-foreground uppercase">
                    Before
                  </p>
                  <p className="text-xl font-bold">{t.beforeWeight}</p>
                </div>

                <div className="text-primary font-bold text-xl">→</div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase">
                    After
                  </p>
                  <p className="text-xl font-bold text-primary">
                    {t.afterWeight}
                  </p>
                </div>

              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Duration: <span className="text-foreground font-semibold">{t.duration}</span>
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>

            </div>

          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* CTA */}
      <Ctasection/>
    </div>
  );
};

export default Results;
