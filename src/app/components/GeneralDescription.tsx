"use client";
import { motion } from "framer-motion";

const GeneralDescription = () => {
  return (
    <section className="py-16 bg-zinc-950 text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-xl md:text-2xl leading-relaxed font-light italic font-body"
        >
          "Every image tells a story of resilience, a childhood interrupted, and a silent plea for a brighter future. These are the faces of struggle, yet also of an unbreakable spirit. Through these glimpses, we aim to shed light on the harsh realities faced by countless children, urging reflection and action."
        </motion.p>
      </div>
    </section>
  );
};

export default GeneralDescription;