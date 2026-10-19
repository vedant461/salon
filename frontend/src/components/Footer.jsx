import React from 'react';

export default function Footer() {
  return (
    <footer className="grid-border-t p-6 md:p-12 bg-bgPrimary grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="text-3xl font-bold tracking-tighter uppercase mb-4">More Mud.</div>
        <p className="mono-label">A Brutalist Salon Concept.</p>
      </div>
      <div className="flex flex-col gap-4">
        <span className="mono-label opacity-50">Social</span>
        <a href="#" className="font-mono text-sm hover:underline cursor-hover">
          Instagram
        </a>
        <a href="#" className="font-mono text-sm hover:underline cursor-hover">
          Pinterest
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <span className="mono-label opacity-50">Location</span>
        <span className="font-mono text-sm">
          124 Concrete Ave.<br />Sector 4, NY 10011
        </span>
      </div>
    </footer>
  );
}
