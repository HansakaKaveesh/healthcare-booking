// app/page.tsx
'use client'; 

import React, { useState } from 'react'; 
import { FaChild, FaRunning, FaBone, FaDumbbell, FaHeartbeat, FaHandHoldingMedical } from 'react-icons/fa';

// Import Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import ProcessSection from './components/ProcessSection';
import SolutionsSection from './components/SolutionsSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

// Data for sections that is shared between components
const problems = [
  { name: 'Shoulder Pain', icon: <FaBone /> },
  { name: 'Neck Stiffness', icon: <FaHandHoldingMedical /> },
  { name: 'Lower Back Pain', icon: <FaBone style={{ transform: 'rotate(90deg)'}} /> },
  { name: 'Poor Posture', icon: <FaChild /> },
  { name: 'Gym Injuries', icon: <FaDumbbell /> },
  { name: 'Limited Mobility', icon: <FaRunning /> },
  { name: 'Stress & Body Tightness', icon: <FaHeartbeat /> },
];

// Main Page Component
export default function Home() {
  const [preselectedIllness, setPreselectedIllness] = useState('');

  // This function is passed down to the ProblemsSection
  const handleProblemSelect = (problemName: string) => {
    setPreselectedIllness(problemName);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Global style for the hero slider animation */}
      <style jsx global>{`
        @keyframes slide-continuous {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-slide-continuous {
          animation: slide-continuous 60s linear infinite;
        }
      `}</style>

      <Header />

      <main>
        <HeroSection />
        
        <ProblemsSection 
          problems={problems}
          onProblemSelect={handleProblemSelect}
        />
        
        <ProcessSection />
        
        <SolutionsSection />

        <BookingForm 
          key={preselectedIllness} // Re-mounts form when a new illness is selected
          initialIllness={preselectedIllness}
          illnessOptions={[...problems.map(p => p.name), 'Other']}
        />
      </main>

      <Footer />
    </>
  )
}