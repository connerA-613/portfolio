import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-2 mt-2 mx-auto items-center min-h-screen justify-center gap-10 ext-black text-left p-10 pt-25 w-full mb-20">
        <div className="col-span-1 flex flex-col sm:mt-2 text-center mx-auto items-left justify-center">
            <h1 className="text-6xl font-bold text-left sm:mt-2 ">Hi there! I'm Conner</h1>
            <p className="mt-4 text-xl text-left">I'm a passionate Software Engineer.</p>
            <Link href="resume.pdf" target="_blank" className="mt-6 inline-block bg-[var(--color-brand)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-brand-dark)] transition-colors">
                View My Resume
            </Link>
        </div>
        <img
            src="/self-portrait.jpg"
            alt="Profile Picture"
            className="col-span-1 w-[280px] md:w-[400px] mx-auto rounded-xl shadow-lg"
        />
    </header>
  );
}
