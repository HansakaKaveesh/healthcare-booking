// app/components/HeroSection.tsx
'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Images for the hero slider
const heroImages = [
  'https://media.gettyimages.com/id/512968603/photo/man-receives-back-massage-in-spa.jpg?s=612x612&w=0&k=20&c=pZBAD8IMUbudMZ9H07qI7bF4rXMmzYlnjejelvTzcMY=',
  'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  'https://media.gettyimages.com/id/1379765959/photo/faceless-african-american-patient-complaining-about-back-ache-and-rheumatism-to-orthopedist.jpg?s=612x612&w=0&k=20&c=SOZQ9P9NbOBY4Zgumk2m0gdLP9oXLQC0UFnjU47U80w='
];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      {/* MOBILE-FRIENDLY PADDING: Reduced base padding for smaller screens */}
      <div className="container mx-auto px-6 py-20 md:py-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          
          <div className="animate-fadeInUp" style={{ animationFillMode: 'backwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Your Path to a <span className="text-blue-600">Pain-Free Life</span> Starts Here
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              We integrate expert medical diagnosis with personalized physical therapy to treat the root cause of your pain, not just the symptoms.
            </p>
          </div>

          {/* MOBILE-FRIENDLY CTAs: Added w-full on small screens for better tap targets */}
          <div className="animate-fadeInUp mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
              <a href="#booking" className="w-full sm:w-auto bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                Start Your Recovery
              </a>
              <a href="#process" className="w-full sm:w-auto bg-white text-gray-800 text-lg font-semibold px-8 py-4 rounded-lg ring-1 ring-gray-200 hover:bg-gray-100 hover:ring-gray-300 transition-all duration-300 flex items-center justify-center gap-2">
                Our Process <FaArrowRight />
              </a>
          </div>

          <div className="animate-fadeInUp mt-12 flex items-center justify-center lg:justify-start" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
            <div className="flex -space-x-2">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Patient 1"/>
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Patient 2"/>
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="Patient 3"/>
            </div>
            <p className="ml-4 text-gray-600 font-medium">Join <span className="text-gray-900">5,000+</span> happy patients</p>
          </div>

        </div>
        
        {/* Sliding image gallery */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 animate-fadeInUp" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex h-full w-[200%] animate-slide-continuous">
                  {/* Original Images */}
                  {heroImages.map((src, index) => (
                    <div key={`orig-${index}`} className="h-full flex-shrink-0 px-2 box-border" style={{ width: `calc(100% / ${heroImages.length})` }}>
                      <img src={src} alt={`Physiotherapy scene ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  ))}
                  {/* Duplicated Images for seamless loop */}
                  {heroImages.map((src, index) => (
                    <div key={`dup-${index}`} className="h-full flex-shrink-0 px-2 box-border" style={{ width: `calc(100% / ${heroImages.length})` }}>
                      <img src={src} alt={`Physiotherapy scene ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </div>

      <div className="absolute -top-1/2 -right-1/2 -z-0 opacity-5 pointer-events-none">
        <svg width="1200" height="1200" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin [animation-duration:60s]">
          <g clipPath="url(#clip0_1_2)">
            <path d="M800 0H0V800H800V0Z" fill="#EBF8FF"/>
            <path d="M800 400C800 620.914 620.914 800 400 800C179.086 800 0 620.914 0 400C0 179.086 179.086 0 400 0C620.914 0 800 179.086 800 400Z" fill="#D6EEFF"/>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;