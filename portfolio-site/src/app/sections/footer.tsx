// components/Footer.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">Conner Armour</h3>
            <p className="text-sm text-gray-400">Building beautiful, user-focused software.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-[var(--color-brand)] transition">About</a>
            <a href="#projects" className="hover:text-[var(--color-brand)] transition">Projects</a>
            <a href="#contact" className="hover:text-[var(--color-brand)] transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/connerA-613"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brand)] transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/conner-armour-510132248/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brand)] transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Conner Armour. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
