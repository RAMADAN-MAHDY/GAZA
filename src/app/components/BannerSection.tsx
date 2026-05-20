"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    id: 1,
    image: "/images/copy_580E6EFA-269B-406B-91D1-8C33385A7CBA.jpeg",
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
    }, 5000); // Change slide every 5 seconds
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
      className="py-16 bg-zinc-800 text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-heading">Beyond the Headlines</h2>
        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg overscroll-y-contain">
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
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={currentBanner.image}
                alt={currentBanner.title}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-10 rounded-lg border border-gray-700 shadow-lg">
                <h3 className="text-3xl font-bold mb-2 font-heading text-white drop-shadow-md">{currentBanner.title}</h3>
                <p className="text-base md:text-lg max-w-md font-body text-gray-200 drop-shadow-sm">{currentBanner.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-colors"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-colors"
          >
            &#10095;
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                } transition-colors`}
              ></button>
            ))}
          </div>
        </div>
        </div>
    </motion.section>
  );
};

export default BannerSection;
