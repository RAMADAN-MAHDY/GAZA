"use client";
import Image from "next/image";
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
        staggerChildren: 0.05, // Slightly faster stagger for letters
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
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]); // Parallax effect

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/copy_57FB187F-7423-4028-A47F-8C70F9A8EF7D.jpeg"
          alt="Child Labor Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 font-heading"
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
          className="text-lg md:text-xl max-w-3xl mx-auto font-body"
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
      </div>
    </section>
  );
};

export default HeroSection;
