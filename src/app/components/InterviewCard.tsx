
"use client";
import { motion } from "framer-motion";

interface InterviewCardProps {
  name: string;
  quote: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ name, quote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-800 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full border border-zinc-700 hover:border-zinc-500 transition-colors duration-300"
    >
      <p className="text-xl italic text-zinc-200 mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-lg font-semibold text-white text-right">
        - {name}
      </p>
    </motion.div>
  );
};

export default InterviewCard;
