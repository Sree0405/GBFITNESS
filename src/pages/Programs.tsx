import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Dumbbell, Flame, Zap, Heart, User, Target, ArrowRight } from "lucide-react";
import Ctasection from "@/components/ctasection";

const programs = [
  {
    icon: Target,
    title: "90 Days Transformation",
    desc: "Our signature transformation program designed for weight loss, muscle gain, and full body transformation with expert coaching and diet planning.",
    features: [
      "Customized diet plan",
      "Strength + cardio training",
      "Progress monitoring"
    ],
  },  
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Our structured strength training program helps you build muscle, improve endurance, and increase overall power using free weights, machines, and progressive overload techniques.",
    features: [
      "Machine & free weight training",
      "Muscle building programs",
      "Progress tracking guidance"
    ],
  },
  {
    icon: Flame,
    title: "Weight Loss Program",
    desc: "A results-driven fat loss program combining strength training, cardio workouts, and diet guidance to help you burn fat and transform your body safely.",
    features: [
      "Fat loss workouts",
      "Cardio training routines",
      "Customized diet chart"
    ],
  },
  {
    icon: Zap,
    title: "CrossFit Training",
    desc: "High-intensity functional training designed to improve strength, endurance, agility, and conditioning through dynamic workouts.",
    features: [
      "Functional workouts",
      "High-intensity circuits",
      "Strength & endurance training"
    ],
  },
  {
    icon: Target,
    title: "Strength + Cardio Training",
    desc: "A balanced fitness program combining weight training and cardiovascular exercises to improve stamina, burn calories, and build lean muscle.",
    features: [
      "Strength workouts",
      "Cardio sessions",
      "Fat burning training"
    ],
  },
  {
    icon: Heart,
    title: "Mobility & Flexibility Training",
    desc: "Improve joint mobility, flexibility, and injury prevention with guided stretching, functional movements, and recovery exercises.",
    features: [
      "Mobility drills",
      "Flexibility improvement",
      "Injury prevention routines"
    ],
  },
  {
    icon: User,
    title: "Personal Training",
    desc: "Train one-on-one with certified fitness trainers who design personalized workout plans based on your fitness goals and body type.",
    features: [
      "Dedicated trainer",
      "Customized workout plan",
      "Form correction & progress tracking"
    ],
  }
];

const Programs = () => {
  return (
    <div>
      <PageHero
        eyebrow="Our Training Programs"
        title="Train Hard."
        titleAccent="Transform Faster."
        description="GB Fitness Studio offers professional training programs designed for weight loss, muscle gain, strength building, and complete body transformation."
      />

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <Ctasection/>
    </div>
  );
};

export default Programs;
