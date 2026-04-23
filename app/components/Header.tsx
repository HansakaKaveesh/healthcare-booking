// components/Header.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaStethoscope, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Problems We Treat', href: '#problems' },
  { label: 'Our Process', href: '#process' },
  { label: 'Our Solutions', href: '#solutions' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Use a ref to store section elements to avoid repeated DOM queries
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  // Effect for header style change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for active link highlighting using IntersectionObserver
  useEffect(() => {
    // Populate the refs on mount
    navItems.forEach(item => {
      sectionRefs.current[item.href] = document.querySelector(item.href);
    });

    const observerOptions = {
      root: null,
      // The active section is triggered when its top is 150px from the top of the viewport
      rootMargin: '-150px 0px -50% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });

      // Special case: if scrolled to the top, clear the active section
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
    sections.forEach(section => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  // Handler for smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu on any navigation click
    setIsMenuOpen(false);
  };

  const headerClasses = `
    sticky top-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md shadow-sm py-4'}
  `;

  const navLinkClasses = (href: string) => `
    transition-colors duration-300
    ${activeSection === href.substring(1) ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}
  `;

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2" onClick={(e) => handleNavClick(e, '#')}>
            <FaStethoscope className="text-blue-600 text-3xl" />
            <span className="text-xl font-bold text-gray-800">AyurFit</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className={navLinkClasses(item.href)}
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
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-2xl text-gray-800"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
            <button 
                onClick={() => setIsMenuOpen(false)} 
                className="absolute top-6 right-6 text-3xl text-gray-700"
                aria-label="Close menu"
            >
                <FaTimes />
            </button>
            <nav className="flex flex-col items-center space-y-8">
                {navItems.map(item => (
                <a 
                    key={item.label} 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-2xl font-medium ${navLinkClasses(item.href)}`}
                >
                    {item.label}
                </a>
                ))}
                <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')} className="mt-8 bg-blue-600 text-white text-xl px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold">
                Book Consultation
                </a>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;