import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-gym.jpg";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import galleryImg from "@/assets/gallery-1.jpg";


// gym images

import gallery1 from "@/assets/gym/gallery1.jpeg";
import gallery2 from "@/assets/gym/gallery2.jpeg";
import gallery3 from "@/assets/gym/gallery3.jpeg";

import { Dumbbell, Flame, Zap, Heart, User, Star, Quote, ArrowRight, TrendingUp, Award, Users, Target } from "lucide-react";
import videos from "@/assets/Testvideo.mp4"
const programs = [
  {
    icon: Target,
    title: "90 Days Transformation",
    desc: "Our signature transformation program designed for weight loss, muscle gain, and full body transformation with expert coaching and diet planning.",
  },  
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Our structured strength training program helps you build muscle, improve endurance, and increase overall power using free weights, machines, and progressive overload techniques.",
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
  }
];


const stats = [
  { icon: TrendingUp, value: "50+", label: "Member Transformations" },
  { icon: Award, value: "90 Days", label: "Transformation Programs" },
  { icon: Users, value: "400+", label: "Active Members" },
  { icon: Star, value: "5/5", label: "Member Satisfaction" },
];

const testimonials = [
  {
    name: "Gym Member",
    role: "Weight Loss Program",
    quote:
      "I lost weight and improved my fitness with the help of trainers at GB Fitness Studio. The workouts and diet guidance really helped.",
  },
  {
    name: "Transformation Member",
    role: "Strength Training",
    quote:
      "Great environment and supportive trainers. The gym helped me become stronger and more confident.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0">
          {/* <iframe src={videos} title="GB Fitness Promo" className="w-full h-full object-cover" /> */}
          <img
            src={gallery1}
            alt="GB Fitness Avadi gym floor and training area at GB Fitness Studio Avadi, Chennai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
        </div>
        <div className="relative z-10 text-center sm:pt-8 px-6 max-w-5xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6">
            Avadi's Transformation Gym
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase leading-[0.9] tracking-tight"
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] text-foreground/90 mb-2 md:mb-3">
              GB Fitness Avadi
            </span>
            Transform <br />
            <span className="text-gradient-crimson">Your Body</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 sm:mt-8 font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-2">
Train at GB Fitness Studio with expert trainers, modern equipment, and structured workout programs designed for real body transformation.          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/membership"
              className="px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 animate-pulse-glow">
              Start Your Journey
            </Link>
            <Link to="/programs"
              className="px-10 py-4 border border-foreground/20 text-foreground font-heading text-sm tracking-wider uppercase hover:border-primary/50 hover:text-primary transition-all duration-300">
              Explore Programs
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-4 sm:px-6 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
              More Than A <span className="text-gradient-crimson">Gym</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
GB Fitness Studio is one of the fastest growing fitness centers in Avadi, Chennai. 
We help members achieve real body transformations through structured strength training, cardio workouts, and expert guidance.
</p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
Our gym is equipped with modern training equipment and experienced trainers who support members in weight loss, muscle gain, and overall fitness improvement.           
            </p>
            <Link to="/programs" className="inline-flex items-center gap-2 font-heading text-sm tracking-wider uppercase text-primary hover:gap-4 transition-all duration-300">
              Discover Our Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col justify-between">
              <div className="overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                <img src={gallery2} alt="Training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="glass-panel p-6 text-center">
                <p className="font-heading text-lg font-semibold text-primary">Elite Coaching</p>
                {/* <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed">
                  Certified trainers dedicated to strength, conditioning and peak performance.
                </p> */}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="glass-panel p-6 text-center">
                <p className="font-heading text-lg font-semibold text-primary">Premium Equipment</p>
                {/* <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed">
                  Train with industry-leading machines built for performance and recovery.
                </p> */}
              </div>
              <div className="overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                <img src={gallery3} alt="Training" className="w-full object-top h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-crimson" />

      {/* Programs Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Programs</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase">
              Engineered For <span className="text-gradient-crimson">Excellence</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programs.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="glass-panel-hover p-8 group">
                <p.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/programs" className="inline-flex items-center gap-2 font-heading text-sm tracking-wider uppercase text-primary hover:gap-4 transition-all duration-300">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-crimson" />

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid  md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} className="text-center glass-panel p-8">
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      <div className="divider-crimson" />

      {/* Testimonials Preview */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase">
              What Members <span className="text-gradient-crimson">Say</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15 }} className="glass-panel p-8">
                <Quote className="w-6 h-6 text-primary/40 mb-4" />
                <p className="font-body text-foreground/90 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wider">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{t.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/results" className="inline-flex items-center gap-2 font-heading text-sm tracking-wider uppercase text-primary hover:gap-4 transition-all duration-300">
              See All Results <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-crimson" />

      {/* Facility Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Facility</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase">
              World-Class <span className="text-gradient-crimson">Space</span>
            </h2>
          </motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative overflow-hidden rounded-xl h-[280px] sm:h-[380px] md:h-[450px]"
>
  <img
    src={gallery1}
    alt="Facility"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
    <Link
      to="/gallery"
      className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 
      bg-primary text-primary-foreground font-heading text-xs sm:text-sm 
      tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-md"
    >
      Explore Gallery
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
</motion.div>
        </div>
      </section>

      <div className="divider-crimson" />

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase mb-6">
              Start Your <span className="text-gradient-crimson">Fitness Journey</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
Join GB Fitness Studio in Avadi and begin your transformation with expert trainers, professional equipment, and a motivating fitness community.            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 animate-pulse-glow">
                Join GB Fitness
              </Link>
              <Link to="/membership"
                className="px-10 py-4 border border-foreground/20 text-foreground font-heading text-sm tracking-wider uppercase hover:border-primary/50 hover:text-primary transition-all duration-300">
                View Membership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
