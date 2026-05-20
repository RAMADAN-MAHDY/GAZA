import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/images/copy_57FB187F-7423-4028-A47F-8C70F9A8EF7D.jpeg"
        alt="Child Labor Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-up">
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
