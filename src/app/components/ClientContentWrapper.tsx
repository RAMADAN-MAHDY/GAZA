"use client";

import { motion } from "framer-motion";
import BannerSection from "../components/BannerSection";
import GeneralDescription from "../components/GeneralDescription";
import StoriesGrid from "../components/StoriesGrid";
import InterviewsSection from "../components/InterviewsSection";
import Footer from "../components/Footer";

interface ClientContentWrapperProps {
  childrenStories: any[]; // Use a more specific type if available
  interviews: any[]; // Use a more specific type if available
}

const ClientContentWrapper: React.FC<ClientContentWrapperProps> = ({ childrenStories, interviews }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <BannerSection />
      <GeneralDescription />
      <StoriesGrid stories={childrenStories} />
      <InterviewsSection interviews={interviews} />
      <Footer />
    </motion.div>
  );
};

export default ClientContentWrapper;