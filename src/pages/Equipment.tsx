import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import equipmentImg from "@/assets/gym/gallery1.jpeg";

import gym1 from "@/assets/gym/gym1.jpeg";
import gym2 from "@/assets/gym/gym2.jpeg";
import gym3 from "@/assets/gym/gym3.jpeg";
import gym4 from "@/assets/gym/gym4.jpeg";
import gym5 from "@/assets/gym/gym5.jpeg";
import gym6 from "@/assets/gym/gym6.jpeg";
import gym7 from "@/assets/gym/gym7.jpeg";
import gym8 from "@/assets/gym/gym8.jpeg";
import gym9 from "@/assets/gym/gym9.jpeg";
import gym10 from "@/assets/gym/gym10.jpeg";

const equipmentImages = [
  { src: gym1, category: "Cardio Zone", title: "CrossFit Training Area" },
  { src: gym2, category: "Cardio Zone", title: "Treadmill Cardio Section" },
  { src: gym3, category: "Machines", title: "Leg Press Machine" },
  { src: gym4, category: "Strength Zone", title: "Squat Rack Station" },
  { src: gym5, category: "Machines", title: "Bench Press Machine" },
  { src: gym6, category: "Machines", title: "Lat Pulldown Machine" },
  { src: gym7, category: "Machines", title: "Lat Machine" },
  { src: gym8, category: "Free Weights", title: "Bicep Curl Training" },
  { src: gym9, category: "Free Weights", title: "Dumbbell Row Area" },
  { src: gym10, category: "Machines", title: "Pec Fly Machine" },
];
const categories = [
  {
    name: "Strength Training Zone",
    desc: "Our strength training zone is designed for serious muscle building and compound workouts. Members can perform heavy lifts and structured strength programs using professional lifting equipment.",
    items: [
      "Squat Rack Stations",
      "Olympic Barbells",
      "Bench Press Stations",
      "Weight Plates",
      "Strength Training Platforms"
    ]
  },
  {
    name: "Cardio Training Zone",
    desc: "The cardio section helps members improve stamina, burn calories, and support weight loss through effective cardio workouts and warm-up sessions.",
    items: [
      "Treadmill Machines",
      "Stationary Bikes",
      "Warm-up Cardio Area",
      "Fat Burning Cardio Workouts",
      "Endurance Training Equipment"
    ]
  },
  {
    name: "Machine Training Section",
    desc: "Our resistance machines help isolate specific muscle groups, allowing beginners and advanced members to train safely and effectively.",
    items: [
      "Leg Press Machine",
      "Lat Pulldown Machine",
      "Chest Press Machine",
      "Pec Fly Machine",
      "Cable Machine Workouts"
    ]
  },
  {
    name: "Free Weights Area",
    desc: "The free weights section allows members to perform compound exercises and functional training for building real strength and muscle mass.",
    items: [
      "Dumbbell Sets",
      "Barbells",
      "Bicep Curl Workouts",
      "Shoulder Training",
      "Functional Strength Exercises"
    ]
  }
];
const Equipment = () => {
  return (
    <div>
    <PageHero
      eyebrow="Gym Equipment"
      title="Train With"
      titleAccent="Professional Equipment"
      description="GB Fitness Studio is equipped with modern strength machines, cardio equipment, and free weights to support muscle building, fat loss, and complete body transformation."
    />

      {/* Showroom hero */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden aspect-[21/9]">
            <img src={equipmentImg} alt="Equipment showroom" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto space-y-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            >
              <div className="md:col-span-1">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow mb-4" />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">{cat.name}</h3>
              </div>
              <div className="md:col-span-1">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
              </div>
              <div className="md:col-span-1">
                <ul className="grid grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="font-body text-xs text-secondary-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facility strip */}
{/* Equipment Gallery */}
<section className="px-6 md:px-12 pb-24">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
    {[gym1, gym3, gym6, gym9].map((img, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="relative overflow-hidden aspect-square group"
      >
        <img
          src={img}
          alt={`Gym Equipment ${i + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-500" />
      </motion.div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Equipment;
