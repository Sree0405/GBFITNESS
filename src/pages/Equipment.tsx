import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import equipmentImg from "@/assets/equipment-showroom.jpg";
import galleryImg from "@/assets/gallery-1.jpg";

const categories = [
  {
    name: "Technogym Series",
    items: ["Skillmill", "Excite Line Treadmills", "Artis Bikes", "Kinesis Stations"],
    desc: "Full premium cardio and strength line from Italy's finest fitness engineering.",
  },
  {
    name: "Olympic Platforms",
    items: ["Eleiko Competition Bars", "Calibrated Plates", "Deadlift Platforms", "Jerk Blocks"],
    desc: "Competition-grade lifting stations for serious strength athletes.",
  },
  {
    name: "Smart Racks",
    items: ["AI Load Tracking", "Digital Rep Counting", "Form Analysis Cameras", "Integrated Displays"],
    desc: "Next-generation resistance training with real-time performance feedback.",
  },
  {
    name: "Recovery Pods",
    items: ["Cryotherapy Chamber", "Normatec Compression", "Infrared Sauna", "Float Tanks"],
    desc: "Advanced recovery technology to accelerate healing and reduce soreness.",
  },
];

const Equipment = () => {
  return (
    <div>
      <PageHero
        eyebrow="World-Class Equipment"
        title="The"
        titleAccent="Arsenal"
        description="Every piece of equipment in our facility is selected for performance, durability, and precision."
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
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[equipmentImg, galleryImg, equipmentImg, galleryImg].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} className="relative overflow-hidden aspect-square group">
              <img src={img} alt={`Facility ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Equipment;
