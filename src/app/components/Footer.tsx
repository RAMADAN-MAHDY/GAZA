
const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12 text-center border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <p className="text-xl italic max-w-3xl mx-auto leading-relaxed mb-6">
          &ldquo;The world will not be destroyed by those who do evil, but by those who watch them without doing anything.&rdquo;
        </p>
        <p className="text-lg font-semibold text-zinc-400 mb-8">
          - Albert Einstein
        </p>
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Child Labor & Struggle Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
