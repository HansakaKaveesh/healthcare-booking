// app/components/ProblemsSection.tsx
'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Define the shape of a single problem object
interface Problem {
  name: string;
  icon: React.ReactNode;
}

// Define the props for the component
interface ProblemsSectionProps {
  problems: Problem[];
  onProblemSelect: (problemName: string) => void;
}

const ProblemsSection: React.FC<ProblemsSectionProps> = ({ problems, onProblemSelect }) => {
  return (
    <section id="problems" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Common Problems We Treat</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Click on a problem to start booking your consultation immediately.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map(problem => (
            <button 
              key={problem.name} 
              onClick={() => onProblemSelect(problem.name)}
              className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-between group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div>
                <div className="text-blue-500 bg-blue-100 p-4 rounded-full text-3xl mb-4 inline-block">{problem.icon}</div>
                <h3 className="font-semibold text-gray-800">{problem.name}</h3>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Book for this <FaArrowRight />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;