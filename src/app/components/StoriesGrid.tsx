"use client";
import StoryCard from "./StoryCard";
import StoryModal from "./StoryModal";
import { motion } from "framer-motion";
import { useState } from "react";

interface ChildStory {
  id: number;
  title: string;
  arabicContext: string;
  imagePlaceholder: string;
  // description: string; // Removed description
}

interface StoriesGridProps {
  stories: ChildStory[];
}

const StoriesGrid: React.FC<StoriesGridProps> = ({ stories }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState<ChildStory | null>(null);

  const openModal = (story: ChildStory) => {
    setSelectedStory(story);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStory(null);
  };

  return (
    <motion.section
      className="py-16 bg-zinc-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-heading">Their Stories, Our Reality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StoryCard {...story} onClick={() => openModal(story)} />
            </motion.div>
          ))}
        </div>
      </div>
      <StoryModal isOpen={showModal} onClose={closeModal} story={selectedStory} />
    </motion.section>
  );
};

export default StoriesGrid;
