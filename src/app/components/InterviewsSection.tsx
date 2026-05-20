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
    }, 8000);
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
      className="py-20 bg-[#0A0A0A] text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-[#A31B1B] mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Voices of Resilience
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto font-body">
            Hear directly from those whose lives have been impacted
          </p>
        </div>
        <div className="relative h-[350px] md:h-[300px] flex items-center justify-center overflow-hidden">
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
              <div className="w-full max-w-4xl">
                <InterviewCard {...currentInterview} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-[#1A1A1A] hover:bg-[#A31B1B] text-white p-3 rounded-full z-20 transition-all duration-300 hover:scale-110 border border-[#0A0A0A]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-[#1A1A1A] hover:bg-[#A31B1B] text-white p-3 rounded-full z-20 transition-all duration-300 hover:scale-110 border border-[#0A0A0A]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-[-60px] left-0 right-0 flex justify-center gap-2 z-20">
            {interviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#A31B1B] w-8" : "bg-[#A0A0A0]/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InterviewsSection;
