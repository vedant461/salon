import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Reveal Observer for scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach((el) => revealObserver.observe(el));

    // Subtle Parallax Effect for Images
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxImages = document.querySelectorAll('.parallax-img');

      parallaxImages.forEach((img) => {
        const speed = parseFloat(img.getAttribute('data-speed')) || 0.05;
        const yPos = -(scrolled * speed);
        img.style.transform = `translateY(${yPos}px) scale(1.05)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="w-full pt-20">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
