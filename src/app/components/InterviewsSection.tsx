"use client";
import InterviewCard from "./InterviewCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Interview {
  id: number;
  name: string;
  quote: string;
  imagePlaceholder: string;
}

interface InterviewsSectionProps {
  interviews: Interview[];
}

const InterviewsSection: React.FC<InterviewsSectionProps> = ({ interviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interviews.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % interviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? interviews.length - 1 : prevIndex - 1
    );
  };

  const currentInterview = interviews[currentIndex];

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
      className="py-16 bg-zinc-950 text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-heading">Voices of Resilience</h2>
        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
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
              className="absolute inset-0 flex items-center justify-center bg-cover bg-center rounded-lg"
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div> {/* Overlay for text readability */}
              <div className="relative z-10 w-full max-w-2xl">
                <InterviewCard {...currentInterview} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-colors text-xl"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-colors text-xl"
          >
            &#10095;
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center gap-2 z-20">
            {interviews.map((_, index) => (
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

export default InterviewsSection;
