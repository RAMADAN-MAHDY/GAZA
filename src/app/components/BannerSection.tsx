import Image from "next/image";

const banners = [
  {
    id: 1,
    image: "/images/copy_580E6EFA-269B-406B-91D1-8C33385A7CBA.jpeg",
    title: "The Silent Toil",
    description: "Every day, dreams are traded for survival. Their silence speaks volumes."
  },
  {
    id: 2,
    image: "/images/copy_62AABAEA-E1DB-46DF-8BB2-73E09953001B.jpeg",
    title: "A Future Undelivered",
    description: "Childhood stolen, futures uncertain. The heavy cost of unseen labor."
  },
  {
    id: 3,
    image: "/images/copy_739E71AD-7374-45A2-BB5D-11E9646CC86C.jpeg",
    title: "Hope in the Shadows",
    description: "Despite the hardship, a flicker of hope remains. A call for change."
  },
];

const BannerSection = () => {
  return (
    <section className="py-16 bg-zinc-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Beyond the Headlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <div key={banner.id} className="relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={banner.image}
                alt={banner.title}
                width={600}
                height={400}
                className="object-cover w-full h-48 md:h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-2xl font-semibold mb-2">{banner.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
