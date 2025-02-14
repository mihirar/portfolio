import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    'about', 'experience', 'skills', 'certifications', 'projects', 'contact'
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't set up observer on mobile

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) return null; // Don't render sidebar on mobile

  return (
    <div className="fixed top-1/2 left-4 z-50 flex flex-col space-y-3 transform -translate-y-1/2 hidden md:flex">
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          spy={true}
          smooth={true}
          duration={800}
          offset={-70}
          className={`w-2 h-2 rounded-full ${
            activeSection === section
              ? 'bg-blue-400 scale-125'
              : 'bg-gray-500 scale-100'
          } transition-transform duration-300`}
        />
      ))}
    </div>
  );
}
