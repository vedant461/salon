import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const attachHoverListeners = () => {
      const hoverTargets = document.querySelectorAll(
        '.cursor-hover, a, button, input, select, textarea'
      );

      const onEnter = () => cursor.classList.add('hover-active');
      const onLeave = () => cursor.classList.remove('hover-active');

      hoverTargets.forEach((target) => {
        target.addEventListener('mouseenter', onEnter);
        target.addEventListener('mouseleave', onLeave);
      });

      return () => {
        hoverTargets.forEach((target) => {
          target.removeEventListener('mouseenter', onEnter);
          target.removeEventListener('mouseleave', onLeave);
        });
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    const cleanupHover = attachHoverListeners();

    // Re-check hover targets when DOM updates
    const observer = new MutationObserver(() => {
      cleanupHover();
      attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cleanupHover();
      observer.disconnect();
    };
  }, []);

  return <div id="cursor-follower" ref={cursorRef}></div>;
}
