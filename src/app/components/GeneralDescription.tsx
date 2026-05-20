"use client";
import { motion } from "framer-motion";

const GeneralDescription = () => {
  return (
    <section className="py-20 bg-dark-card text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="w-24 h-1 bg-dark-accent mx-auto mb-8 rounded-full"></div>
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-xl md:text-2xl leading-relaxed font-light italic font-body text-dark-text"
        >
          "Every image tells a story of resilience, a childhood interrupted, and a silent plea for a brighter future. These are the faces of struggle, yet also of an unbreakable spirit. Through these glimpses, we aim to shed light on the harsh realities faced by countless children, urging reflection and action."
        </motion.p>
      </div>
    </section>
  );
};

export default GeneralDescription;
