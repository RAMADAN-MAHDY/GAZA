
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 text-center border-t border-dark">
      <div className="container mx-auto px-4">
        <div className="w-16 h-1 bg-dark-accent mx-auto mb-8 rounded-full"></div>
        <p className="text-xl italic max-w-3xl mx-auto leading-relaxed mb-6 text-dark-text">
          &ldquo;The world will not be destroyed by those who do evil, but by those who watch them without doing anything.&rdquo;
        </p>
        <p className="text-lg font-semibold text-dark-text-light mb-8">
          - Albert Einstein
        </p>
        <p className="text-sm text-dark-text-light">
          &copy; {new Date().getFullYear()} Child Labor & Struggle Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
