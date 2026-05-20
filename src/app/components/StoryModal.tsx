"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: {
    title: string;
    imagePlaceholder: string;
    // description: string; // Removed
  } | null;
}

const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, story }) => {
  if (!isOpen || !story) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="relative bg-zinc-900 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white text-2xl font-bold z-10 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              &times;
            </button>
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={story.imagePlaceholder}
                alt={story.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            {/* <div className="p-6"> */}
              {/* <h3 className="text-3xl font-bold text-white mb-4 font-heading">{story.title}</h3> */}
              {/* <p className="text-zinc-300 text-lg leading-relaxed font-body">{story.description}</p> */}
            {/* </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryModal;