
"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Added Image import

interface InterviewCardProps {
  name: string;
  quote: string;
  imagePlaceholder: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ name, quote, imagePlaceholder }) => {

  console.log(imagePlaceholder);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)" }}
      className={`bg-[url(${imagePlaceholder})] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full border border-zinc-700`}
    >
      <Image
        src={imagePlaceholder}
        alt={name}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="rounded-lg -z-10"
        sizes="100vw" // Added sizes prop
      />
      <div className="bg-black/70 backdrop-blur-md rounded-lg p-6">
      <p className="text-xl italic text-zinc-200 mb-6 leading-relaxed font-body">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-lg font-semibold text-white text-right font-heading">
        - {name}
      </p>
      </div>
    </motion.div>
  );
};

export default InterviewCard;
