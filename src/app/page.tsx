import HeroSection from "./components/HeroSection";
import StoriesGrid from "./components/StoriesGrid";
import InterviewsSection from "./components/InterviewsSection";
import Footer from "./components/Footer";
import BannerSection from "./components/BannerSection";
import GeneralDescription from "./components/GeneralDescription";
import ClientContentWrapper from "./components/ClientContentWrapper";
// import { motion } from "framer-motion"; // No longer needed here

const childrenStories = [
  {
    id: 1,
    title: "The Bread Winner",
    arabicContext: "طفل يبيع خبز",
    imagePlaceholder: "/images/copy_108BB77C-07BA-411B-B4A1-CDC69F4C7553.jpeg"
  },
  {
    id: 2,
    title: "The Transit Guide",
    arabicContext: "طفل يركب ناس ع وسيلة مواصلة",
    imagePlaceholder: "/images/copy_18098659-2D88-4931-8963-D8F232DCAEB0.jpeg"
  },
  {
    id: 3,
    title: "The Street Vendor",
    arabicContext: "طفل ببيع",
    imagePlaceholder: "/images/copy_299EAEF4-B511-4F97-9615-69CCE54439A5.jpeg"
  },
  {
    id: 4,
    title: "Behind the Counter",
    arabicContext: "طفل بشتغل بمطعم",
    imagePlaceholder: "/images/copy_2C1A5634-CB39-47D1-9637-7DC1972D64F5.jpeg"
  },
  {
    id: 5,
    title: "The Water Bearer",
    arabicContext: "طفل بحمل مية",
    imagePlaceholder: "/images/copy_398B9477-E0D7-4752-937F-70192C99C159.jpeg"
  },
  {
    id: 6,
    title: "The Helping Hand",
    arabicContext: "طفل بوصل مساعدة ناس ع عجلة",
    imagePlaceholder: "/images/copy_3AE8061E-6392-4E0F-966C-7AB00328C305.jpeg"
  },
  {
    id: 7,
    title: "Scraps of Hope",
    arabicContext: "طفل بلم نايلون",
    imagePlaceholder: "/images/copy_436ED171-0173-47ED-AF52-AFA0E25D3E0D.jpeg"
  },
  {
    id: 8,
    title: "The Waiting Line",
    arabicContext: "طفل بستنى تكية",
    imagePlaceholder: "/images/copy_452C6BAD-D863-40FC-B8E7-E712E01547B8.jpeg"
  },
  {
    id: 9,
    title: "Market Scavengers",
    arabicContext: "أطفال بياخدوا من الخضرة مش منيحة عشان يطعموا أهلهم",
    imagePlaceholder: "/images/copy_46840CEB-45EF-4EF3-9B65-DD19D518678B.jpeg"
  },
  {
    id: 10,
    title: "Spark in the Dark",
    arabicContext: "طفل بعبي قداحات",
    imagePlaceholder: "/images/copy_55F4A199-69B3-42CF-A4C9-5F0AE0A50369.jpeg"
  }
];

const interviews = [
  {
    id: 1,
    name: "Youssef, 9 (The Bread Seller)",
    quote: "\"I miss the classroom, but my younger sisters need to eat. The bread tray is heavy, but hunger is heavier.\"",
    imagePlaceholder: "/images/copy_108BB77C-07BA-411B-B4A1-CDC69F4C7553.jpeg" // Example image
  },
  {
    id: 2,
    name: "Amal, 11 (The Takiya Line)",
    quote: "\"Waiting in line for hours is hard, but seeing my mother smile when I bring food home makes me forget the cold.\"",
    imagePlaceholder: "/images/copy_452C6BAD-D863-40FC-B8E7-E712E01547B8.jpeg" // Example image
  },
  {
    id: 3,
    name: "Karim, 10 (The Plastic Collector)",
    quote: "\"The streets taught me how to look for value in what people throw away. I just wish someone saw value in us.\"",
    imagePlaceholder: "/images/copy_436ED171-0173-47ED-AF52-AFA0E25D3E0D.jpeg" // Example image
  },
  {
    id: 4,
    name: "Ahmed, 12 (The Restaurant Worker)",
    quote: "\"I watch families eat together and laugh. I just wash the dishes and wonder when it will be my turn to rest.\"",
    imagePlaceholder: "/images/copy_2C1A5634-CB39-47D1-9637-7DC1972D64F5.jpeg" // Example image
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <HeroSection />
      <ClientContentWrapper childrenStories={childrenStories} interviews={interviews} />
    </div>
  );
}
