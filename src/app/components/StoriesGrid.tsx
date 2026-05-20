import StoryCard from "./StoryCard";

interface ChildStory {
  id: number;
  title: string;
  arabicContext: string;
  caption: string;
  imagePlaceholder: string;
}

interface StoriesGridProps {
  stories: ChildStory[];
}

const StoriesGrid: React.FC<StoriesGridProps> = ({ stories }) => {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Their Stories, Our Reality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesGrid;
