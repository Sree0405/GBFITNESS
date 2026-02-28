import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import eventImg from "@/assets/event-bootcamp.jpg";

const events = [
  {
    title: "VIP Bootcamp",
    date: "March 15, 2026",
    time: "6:00 AM – 8:00 AM",
    location: "Main Training Floor",
    spots: "20 spots",
    desc: "An exclusive high-intensity bootcamp led by our head coach. Push your limits in a premium group setting.",
    tag: "Exclusive",
  },
  {
    title: "Executive Workshop",
    date: "March 22, 2026",
    time: "12:00 PM – 2:00 PM",
    location: "Executive Lounge",
    spots: "15 spots",
    desc: "Performance nutrition and stress management strategies for busy professionals. Includes gourmet lunch.",
    tag: "Workshop",
  },
  {
    title: "Fitness Summit 2026",
    date: "April 5–6, 2026",
    time: "9:00 AM – 5:00 PM",
    location: "Full Facility",
    spots: "100 spots",
    desc: "Two-day fitness summit featuring world-renowned trainers, live demos, and exclusive product launches.",
    tag: "Summit",
  },
  {
    title: "Member Meetup",
    date: "Monthly – Last Friday",
    time: "7:00 PM – 10:00 PM",
    location: "Rooftop Lounge",
    spots: "Open to members",
    desc: "Monthly social gathering for GB Fitness members. Network, share stories, and celebrate progress together.",
    tag: "Social",
  },
];

const Events = () => {
  return (
    <div>
      <PageHero
        eyebrow="Upcoming Events"
        title="The"
        titleAccent="Event Hub"
        description="Exclusive events, workshops, and community gatherings for our members and guests."
      />

      {/* Featured Event */}
      <section className="px-6 md:px-12 pb-16">
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
      </section>

      {/* All Events */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold uppercase mb-10">All Events</h2>
          <div className="space-y-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel-hover p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center"
              >
                <div className="md:col-span-2">
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary font-body text-xs uppercase tracking-wider mb-2">
                    {event.tag}
                  </span>
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-wide">{event.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{event.desc}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-body text-sm text-secondary-foreground">
                    <Calendar className="w-4 h-4 text-primary" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-secondary-foreground">
                    <Clock className="w-4 h-4 text-primary" /> {event.time}
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-secondary-foreground">
                    <MapPin className="w-4 h-4 text-primary" /> {event.location}
                  </div>
                </div>
                <div className="flex md:justify-end">
                  <Link to="/contact"
                    className="px-6 py-2.5 border border-foreground/20 text-foreground font-heading text-xs tracking-wider uppercase hover:border-primary hover:text-primary transition-all duration-300">
                    Reserve Spot
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
