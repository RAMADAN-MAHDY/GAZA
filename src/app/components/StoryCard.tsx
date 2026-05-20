import Image from "next/image";
import { motion } from "framer-motion";

interface StoryCardProps {
  title: string;
  imagePlaceholder: string;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, imagePlaceholder, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-zinc-800 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)" }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={imagePlaceholder}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-48 md:h-64"
      />
      {/* <div className="p-4">
        <h3 className="text-xl font-semibold text-white font-heading">{title}</h3>
      </div> */}
    </motion.div>
  );
};

export default StoryCard;
