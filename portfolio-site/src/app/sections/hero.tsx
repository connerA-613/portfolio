'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

// Hero section component
// This component serves as the introduction to the portfolio site, showcasing the developer's name and a brief description.

export default function Hero() {
  return (
    <header id="home" className="grid grid-cols-1 md:grid-cols-2 mt-2 mx-auto items-center min-h-screen max-w-6xl justify-center gap-2 text-black text-left p-10 pt-25 align-center mnd:pt-0 w-full mb-20">
      <div className="order-2 md:order-1 col-span-1 flex flex-col sm:mt-2 text-center mx-auto items-left justify-center">
        <h1 className="text-6xl font-bold text-left sm:mt-6 md:mt-2 ">Hi there! I&apos;m Conner</h1>
        <span className="text-gray-700 text-left text-xl mt-4">
          <Typewriter
            words={['Software Engineer.', 'Problem Solver.', 'Builder.']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-left justify-start">
          <Link href="/resume.pdf" target="_blank" className="inline-block bg-[var(--color-brand)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-brand-dark)] transition-colors">
            View My Resume
          </Link>
          <Link href="#contact" className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            Get in Touch
          </Link>
        </div>
        <p className="mt-5 text-sm text-left text-gray-500">Scroll down to learn more about me and my work!</p>

      </div>
      <Image
        src="/self-portrait.jpg"
        alt="Profile Picture"
        width={400}
        height={400}
        className="order-1 md:order-2 shadow-lg p-1 bg-gradient-to-br from-[#6366F1] to-[#A78BFA] transition-transform duration-300 md:hover:scale-105 md:hover:rotate-1 rounded-xl mx-auto"
        priority
      />
    </header>
  );
}
