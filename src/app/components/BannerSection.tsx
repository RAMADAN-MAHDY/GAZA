"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    id: 1,
    image: "/images/copy_57FB187F-7423-4028-A47F-8C70F9A8EF7D.jpeg",
    title: "The Silent Toil",
    description: "Every day, dreams are traded for survival. Their silence speaks volumes."
  },
  {
    id: 2,
    image: "/images/copy_62AABAEA-E1DB-46DF-8BB2-73E09953001B.jpeg",
    title: "A Future Undelivered",
    description: "Childhood stolen, futures uncertain. The heavy cost of unseen labor."
  },
  {
    id: 3,
    image: "/images/copy_739E71AD-7374-45A2-BB5D-11E9646CC86C.jpeg",
    title: "Hope in the Shadows",
    description: "Despite the hardship, a flicker of hope remains. A call for change."
  },
];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const currentBanner = banners[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <motion.section
      className="py-20 bg-[#1A1A1A] text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">
          Beyond the Headlines
        </h2>
        <p className="text-[#A0A0A0] text-center mb-12 max-w-2xl mx-auto font-body">
          Witness the realities that often go unseen
        </p>
        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={currentBanner.image}
                alt={currentBanner.title}
                className="object-cover absolute inset-0 z-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-[#0A0A0A]/30 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center z-10 rounded-2xl">
                <div className="w-20 h-1 bg-[#A31B1B] mb-6 rounded-full"></div>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white drop-shadow-2xl">
                  {currentBanner.title}
                </h3>
                <p className="text-base md:text-xl max-w-2xl font-body text-[#E0E0E0] drop-shadow-lg">
                  {currentBanner.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0A0A0A]/80 hover:bg-[#A31B1B] text-white p-3 rounded-full z-20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0A0A0A]/80 hover:bg-[#A31B1B] text-white p-3 rounded-full z-20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-10 bg-[#A31B1B]" 
                    : "w-2 bg-[#A0A0A0]/50 hover:bg-[#A0A0A0]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BannerSection;
