import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, titleAccent, description, children }: PageHeroProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-32 pb-16 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">{eyebrow}</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
            {title} <span className="text-gradient-crimson">{titleAccent}</span>
          </h1>
          {description && (
            <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
