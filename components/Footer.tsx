import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-[3vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} RECRUITING THE NORMIES</p>
        <p className="mt-2 text-sm">
          Website by <a href="https://x.com/proudz169" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">@proudz169</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;