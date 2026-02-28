import { motion } from "framer-motion";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/hero-gym.jpg";
import equipmentImg from "@/assets/equipment-showroom.jpg";
import galleryImg1 from "@/assets/gym/gallery1.jpeg";
import galleryImg2 from "@/assets/gallery-2.jpg";
import galleryImg3 from "@/assets/gallery-3.jpg";
import galleryImg4 from "@/assets/gallery-4.jpg";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";

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



const categories = ["All", "Training Floor", "Studios", "Recovery", "Lounge"];

const images = [
  { src: galleryImg1, category: "Training Floor", title: "Main Training Hall" },
  { src: gym1, category: "Cardio", title: "CrossFit Area" },
  { src: gym2, category: "Cardio", title: "TreadMill area" },
  { src: gym3, category: "Leg Traning", title: "Leg Push" },
  { src: gym4, category: "Leg Traning", title: "Squats" },
  { src: gym5, category: "Leg Traning", title: "Squats" },
  { src: gym6, category: "Leg Traning", title: "Squats" },
  { src: gym7, category: "Leg Traning", title: "Squats" },
  { src: gym8, category: "Leg Traning", title: "Squats" },
  { src: gym9, category: "Leg Traning", title: "Squats" },
  { src: gym10, category: "Leg Traning", title: "Squats" },

];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <PageHero
        eyebrow="Our Facility"
        title="The"
        titleAccent="Gallery"
        description="Step inside our world-class facility. Every space is designed for peak performance and total comfort."
      />

      {/* Filter */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 font-heading text-xs tracking-wider uppercase transition-all duration-300 ${active === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass-panel text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.title + i}
                layout
                initial={{ opacity: 0, scale: 0.80 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${i === 0
                    ? "sm:col-span-2 sm:row-span-2 aspect-square"
                    : "aspect-square"
                  }`}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay (Only on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                    {img.title}
                  </p>

                  <p className="font-body text-xs text-white/70 mt-1">
                    {img.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
