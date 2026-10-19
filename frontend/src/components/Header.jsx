import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-bgPrimary/70 grid-border-b px-6 py-4 flex justify-between items-center transition-colors duration-300">
      <div className="mono-label font-bold tracking-widest text-lg cursor-hover">
        MORE MUD.
      </div>
      <nav className="hidden md:flex gap-8 mono-label">
        <a href="#about" className="hover:opacity-50 transition-opacity cursor-hover">
          Studio
        </a>
        <a href="#work" className="hover:opacity-50 transition-opacity cursor-hover">
          Editorial
        </a>
        <a href="#services" className="hover:opacity-50 transition-opacity cursor-hover">
          Treatments
        </a>
      </nav>
      <a
        href="#book"
        className="btn-brutal rounded-full px-6 py-2 mono-label cursor-hover bg-bgPrimary text-textPrimary"
      >
        Book Session
      </a>
    </header>
  );
}
