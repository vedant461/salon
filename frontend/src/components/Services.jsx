import React from 'react';

const services = [
  { title: 'Architectural Cut', price: '$120+', delay: '' },
  { title: 'Tonal Calibration', price: '$180+', delay: 'delay-100' },
  { title: 'Scalp Reset', price: '$85', delay: 'delay-200' },
  { title: 'Editorial Styling', price: '$150+', delay: 'delay-200', isLast: true },
];

export default function Services() {
  return (
    <section
      id="services"
      class="bg-bgDark text-textDark dark p-6 md:p-12 grid-border-b transition-colors duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-4">
          <h3 className="text-h1 leading-none uppercase reveal-up">Menu</h3>
          <p className="font-mono mt-6 text-sm opacity-70 reveal-up delay-100">
            Curated treatments focusing on structural integrity and elemental care.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8">
          <ul className="flex flex-col">
            {services.map((service, index) => (
              <li
                key={index}
                className={`grid-border-t ${
                  service.isLast ? 'grid-border-b' : ''
                } py-8 flex justify-between items-center cursor-hover reveal-up ${
                  service.delay
                }`}
              >
                <span className="text-2xl uppercase tracking-wide">{service.title}</span>
                <span className="mono-label">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
