import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white text-[var(--text)] border-b border-[var(--color-border)] fixed top-0 left-0 right-0 z-50 shadow-sm">
      <h2 className="text-2xl font-bold">Conner Armour</h2>
      <ul className="flex space-x-4 gap-4 text-lg">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
