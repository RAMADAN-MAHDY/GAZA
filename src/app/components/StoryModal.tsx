"use client";
import { motion, AnimatePresence } from "framer-motion";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: {
    title: string;
    imagePlaceholder: string;
    arabicContext: string;
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
          className="fixed inset-0 bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative bg-dark-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10 p-2 rounded-full bg-dark/80 hover:bg-dark-accent transition-all duration-300 hover:rotate-90"
            >
              &times;
            </button>
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-t-2xl">
              <img
                src={story.imagePlaceholder}
                alt={story.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="w-16 h-1 bg-dark-accent mb-6 rounded-full"></div>
              <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                {story.title}
              </h3>
              <p className="text-dark-text-light text-lg mb-6 font-body">
                {story.arabicContext}
              </p>
              <div className="pt-6 border-t border-dark">
                <p className="text-dark-text-light text-sm font-body">
                  Click outside or press the × to close
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryModal;
