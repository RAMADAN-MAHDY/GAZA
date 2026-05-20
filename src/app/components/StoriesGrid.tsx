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
      className="py-20 bg-[#0A0A0A] text-white"
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-[#A31B1B] mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Their Stories, Our Reality
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto font-body">
            Each image tells a story of resilience, struggle, and the human spirit
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 1, y: 50 }}
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
