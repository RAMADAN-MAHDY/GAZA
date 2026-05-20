import Image from "next/image";

interface StoryCardProps {
  title: string;
  caption: string;
  imagePlaceholder: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, caption, imagePlaceholder }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Image
        src={imagePlaceholder}
        alt={title}
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
        layout="responsive"
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
