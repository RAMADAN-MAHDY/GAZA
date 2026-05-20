import { motion } from "framer-motion";

interface StoryCardProps {
  title: string;
  imagePlaceholder: string;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, imagePlaceholder, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-xl bg-[#1A1A1A] cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <img
          src={imagePlaceholder}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <h3 className="text-xl font-semibold text-white font-heading">{title}</h3>
      </div>
    </motion.div>
  );
};

export default StoryCard;
