
const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg italic">
          &ldquo;The world will not be destroyed by those who do evil, but by those who watch them without doing anything.&rdquo; - Albert Einstein
        </p>
        <p className="mt-4 text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Child Labor & Struggle Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
