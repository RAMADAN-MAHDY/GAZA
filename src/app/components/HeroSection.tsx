
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Placeholder for a cinematic background image or video */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4 animate-fade-in-up">
          Forgotten Childhoods, Unseen Struggles
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-500">
          In the shadows of our world, countless children bear burdens far beyond their years. This is their story.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
