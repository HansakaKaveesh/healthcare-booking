// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaStethoscope, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Problems We Treat', href: '#problems' },
  { label: 'Our Process', href: '#process' },
  { label: 'Our Solutions', href: '#solutions' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Effect for active link highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 150; // Offset for better accuracy

      sections.forEach(section => {
        if (section) {
          const sectionEl = section as HTMLElement;
          if (scrollPosition >= sectionEl.offsetTop && scrollPosition < sectionEl.offsetTop + sectionEl.offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
      // Clear active section if scrolled to top
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler for smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2" onClick={(e) => handleNavClick(e, '#')}>
            <FaStethoscope className="text-blue-600 text-3xl" />
            <span className="text-xl font-bold text-gray-800">IntegraHealth</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-300 ${activeSection === item.href.substring(1) ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-sm">
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-2xl text-gray-800">
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center animate-fadeInRight md:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-3xl text-gray-700">
            <FaTimes />
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')} className="mt-8 bg-blue-600 text-white text-xl px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold">
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;