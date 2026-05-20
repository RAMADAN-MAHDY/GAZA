import InterviewCard from "./InterviewCard";

interface Interview {
  id: number;
  name: string;
  quote: string;
}

interface InterviewsSectionProps {
  interviews: Interview[];
}

const InterviewsSection: React.FC<InterviewsSectionProps> = ({ interviews }) => {
  return (
    <section className="py-16 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Voices of Resilience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {interviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewsSection;
