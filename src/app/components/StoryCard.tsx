import Image from "next/image";

interface StoryCardProps {
  title: string;
  caption: string;
  imagePlaceholder: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, caption, imagePlaceholder }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 ease-in-out bg-zinc-800">
      <Image
        src={imagePlaceholder}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-48 md:h-64"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{caption}</p>
      </div>
    </div>
  );
};

export default StoryCard;
