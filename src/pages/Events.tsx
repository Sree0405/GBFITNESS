import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import eventImg from "@/assets/event-bootcamp.jpg";
import Ayudapooja1 from "@/assets/Events/Ayudapooja1.jpg"
import Ayudapooja2 from "@/assets/Events/Ayudapooja2.jpg"
import onamceleb1 from "@/assets/Events/onamCelebration.jpg"
import onamceleb2 from "@/assets/Events/onamCelebration2.jpg"
import Independence from "@/assets/Events/Independence1.jpg"
import ctasection from "@/components/ctasection";
import birthday from "@/assets/Events/birthday.jpg"
const events = [
  {
    title: "Onam Celebration",
    tag: "Festival Event",
    desc: "GB Fitness Studio celebrated the vibrant festival of Onam with our amazing members. The event brought together fitness enthusiasts and families to celebrate Kerala’s rich cultural tradition with joy, unity, and festive spirit inside the gym community.",
    highlights: [
      "Community gathering with members",
      "Traditional Onam celebration inside the gym",
      "Festive decorations and cultural activities",
      "Strengthening our fitness community spirit"
    ],
    images: [onamceleb1, onamceleb2]
  },
  {
    title: "Ayudha Pooja Celebration",
    tag: "Festival Event",
    desc: "During Ayudha Pooja, we honored the tools that help us grow stronger every day — our gym equipment. Members gathered to celebrate the tradition, seek blessings, and appreciate the journey of fitness and discipline.",
    highlights: [
      "Traditional Ayudha Pooja rituals",
      "Blessing of gym equipment",
      "Member participation",
      "Celebrating dedication to strength and discipline"
    ],
    images: [Ayudapooja1, Ayudapooja2]
  },
{
  title: "Independence Day Celebration",
  tag: "National Event",
  desc: "GB Fitness Studio proudly celebrated India's Independence Day with our members by honoring the spirit of strength, discipline, and unity. The event brought our fitness community together to celebrate the nation's freedom while promoting health, fitness, and motivation.",
  highlights: [
    "Independence Day celebration with members",
    "Gym decorated with national colors",
    "Community gathering and fitness motivation",
    "Celebrating strength, unity and dedication"
  ],
  images: [Independence]
},
{
  title: "Coach Ajay Birthday Celebration",
  tag: "Gym Event",
  desc: "GB Fitness Studio celebrated the birthday of our dedicated trainer, Coach Ajay, along with our gym members. The event was filled with positivity, motivation, and appreciation for his continuous guidance and support in helping members achieve their fitness goals.",
  highlights: [
    "Birthday celebration for Coach Ajay",
    "Members gathering and celebration",
    "Appreciating dedication and coaching support",
    "Strengthening the GB Fitness community"
  ],
  images: [birthday]
}
];

const Events = () => {
  return (
    <div>
<PageHero
  eyebrow="Community Events"
  title="GB Fitness"
  titleAccent="Celebrations"
  description="At GB Fitness Studio, fitness is more than workouts. We celebrate festivals, community, and togetherness with our members."
/>

      {/* Featured Event */}
      {/* <section className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-panel overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img src={eventImg} alt="VIP Bootcamp" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 hidden lg:block" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 bg-primary/20 text-primary font-body text-xs uppercase tracking-wider mb-4">
                Featured Event
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">Fitness Summit 2026</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Our flagship annual event featuring world-renowned trainers, live demonstrations, cutting-edge workshops, and exclusive product launches.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 font-body text-sm text-secondary-foreground">
                  <Calendar className="w-4 h-4 text-primary" /> April 5–6, 2026
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-secondary-foreground">
                  <Clock className="w-4 h-4 text-primary" /> 9:00 AM – 5:00 PM
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-secondary-foreground">
                  <MapPin className="w-4 h-4 text-primary" /> Full Facility
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-secondary-foreground">
                  <Users className="w-4 h-4 text-primary" /> 100 spots
                </div>
              </div>
              <Link to="/contact"
                className="inline-flex items-center gap-2 w-fit px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
                Register Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

<section className="section-padding pt-0">
  <div className="max-w-7xl mx-auto space-y-16">

    {events.map((event, i) => (
      <motion.div
        key={event.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="glass-panel p-8 md:p-10"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Images */}
<div
  className={`grid gap-4 ${
    event.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
  }`}
>
  {event.images.map((img) => (
    <div
      key={img}
      className="overflow-hidden rounded-lg aspect-[4/3]"
    >
      <img
        src={img}
        alt={event.title}
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>
  ))}
</div>

          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs uppercase tracking-wider mb-4">
              {event.tag}
            </span>

            <h3 className="font-heading text-3xl font-bold uppercase mb-4">
              {event.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {event.desc}
            </p>

            <ul className="space-y-2">
              {event.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </motion.div>
    ))}

  </div>
</section>
    </div>
  );
};

export default Events;
