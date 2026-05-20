
interface InterviewCardProps {
  name: string;
  quote: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ name, quote }) => {
  return (
    <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
      <p className="text-xl italic text-zinc-200 mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-lg font-semibold text-white text-right">
        - {name}
      </p>
    </div>
  );
};

export default InterviewCard;
