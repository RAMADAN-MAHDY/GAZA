"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const headingText = "Forgotten Childhoods, Unseen Struggles";
  const paragraphText = "In the shadows of our world, countless children bear burdens far beyond their years. This is their story.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/images/copy_57FB187F-7423-4028-A47F-8C70F9A8EF7D.jpeg"
          alt="Child Labor Background"
          className="object-cover w-full h-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-70 z-10"></div>
      <div className="relative z-20 px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 font-heading"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headingText.split("").map((char, i) => (
            <motion.span key={i} className="inline-block" variants={itemVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-3xl mx-auto font-body text-[#E0E0E0]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {paragraphText.split("").map((char, i) => (
            <motion.span key={i} className="inline-block" variants={itemVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto text-[#E0E0E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
