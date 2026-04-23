// app/components/Footer.tsx
'use client';

import React from 'react';
import { FaStethoscope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-10 text-center">
        <a href="#" className="flex items-center justify-center space-x-2 mb-6">
          <FaStethoscope className="text-blue-500 text-3xl" />
          <span className="text-xl font-bold text-white">IntegraHealth</span>
        </a>
        <p>&copy; {new Date().getFullYear()} IntegraHealth Clinic. All Rights Reserved.</p>
        <p className="text-sm text-gray-500 mt-2">This is a fictional website for demonstration purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;