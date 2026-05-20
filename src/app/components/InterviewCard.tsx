"use client";
import { motion } from "framer-motion";

interface InterviewCardProps {
  name: string;
  quote: string;
  imagePlaceholder: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ name, quote, imagePlaceholder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)" }}
      className="relative p-8 rounded-xl shadow-xl flex flex-col justify-between h-full border border-[#0A0A0A] overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={imagePlaceholder}
          alt={name}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40 rounded-xl"></div>
      <div className="relative z-10 bg-[#0A0A0A]/60 backdrop-blur-sm rounded-xl p-6 border border-[#A31B1B]/20">
        <div className="text-[#A31B1B] mb-4">
          <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-xl italic text-[#E0E0E0] mb-6 leading-relaxed font-body">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center justify-end">
          <div className="w-1 h-8 bg-[#A31B1B] mr-4"></div>
          <p className="text-lg font-semibold text-white text-right font-heading">
            - {name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InterviewCard;
