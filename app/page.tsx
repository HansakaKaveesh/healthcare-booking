// app/page.tsx
'use client'; 

import React, { useState } from 'react'; 
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import { 
  FaUserMd, FaChild, FaRunning, FaWeight, FaBone, FaNotesMedical, FaCheck, FaDumbbell, FaSyringe, FaAppleAlt, FaArrowRight, FaHeartbeat, FaHandHoldingMedical, FaStethoscope 
} from 'react-icons/fa';


// Data for sections - This now drives both the display and the booking form options
// Updated to be more consistent with the problem illustration
const problems = [
  { name: 'Shoulder Pain', icon: <FaBone /> },
  { name: 'Neck Stiffness', icon: <FaHandHoldingMedical /> },
  { name: 'Lower Back Pain', icon: <FaBone style={{ transform: 'rotate(90deg)'}} /> },
  { name: 'Poor Posture', icon: <FaChild /> },
  { name: 'Gym Injuries', icon: <FaDumbbell /> },
  { name: 'Limited Mobility', icon: <FaRunning /> },
  { name: 'Stress & Body Tightness', icon: <FaHeartbeat /> },
];

const processSteps = [
    { 
        title: 'Initial Consultation', 
        description: 'We listen to your history, pain, and lifestyle to understand the full picture.', 
        icon: <FaNotesMedical /> 
    },
    { 
        title: 'Clinical Diagnosis', 
        description: 'Our doctors perform a physical assessment to identify the root cause of your issue.', 
        icon: <FaUserMd /> 
    },
    { 
        title: 'Treatment Plan Creation', 
        description: 'We develop a personalized recovery strategy and refer you to the right therapist.', 
        icon: <FaCheck /> 
    },
];

const solutions = [
    { title: 'Rehab Therapy', description: "Sports massage, trigger point release, and mobility improvement.", icon: <FaSyringe /> },
    { title: 'Guided Strengthening', description: "Structured exercises and biomechanical correction.", icon: <FaDumbbell /> },
    { title: 'Nutrition Guidance', description: "Macronutrient planning and healthy eating habits support.", icon: <FaAppleAlt /> },
    { title: 'Long-Term Support', description: "Regular check-ins and progress tracking for sustained health.", icon: <FaHeartbeat /> },
];

// NEW: Images for the hero slider
const heroImages = [
  'https://media.gettyimages.com/id/512968603/photo/man-receives-back-massage-in-spa.jpg?s=612x612&w=0&k=20&c=pZBAD8IMUbudMZ9H07qI7bF4rXMmzYlnjejelvTzcMY=',
  'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  'https://media.gettyimages.com/id/1379765959/photo/faceless-african-american-patient-complaining-about-back-ache-and-rheumatism-to-orthopedist.jpg?s=612x612&w=0&k=20&c=SOZQ9P9NbOBY4Zgumk2m0gdLP9oXLQC0UFnjU47U80w='
];


// Main Page Component
export default function Home() {
  const [preselectedIllness, setPreselectedIllness] = useState('');

  const handleProblemSelect = (problemName: string) => {
    setPreselectedIllness(problemName);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <>
      {/* NEW: Style block for the sliding animation */}
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


{/* Hero Section */}
<section className="relative bg-gradient-to-br from-white to-slate-50 overflow-hidden">
  {/* MOBILE-FRIENDLY PADDING: Reduced base padding for smaller screens */}
  <div className="container mx-auto px-6 py-20 md:py-28 flex flex-col lg:flex-row items-center">
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
    
    {/* UPDATED: Replaced static image with a sliding image gallery */}
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

        {/* Problems We Treat Section */}
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
                  onClick={() => handleProblemSelect(problem.name)}
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

        {/* Our Process Section */}
        <section id="process" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Doctor's Responsibility Path</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A structured approach to ensure your safety and effective recovery.</p>
            </div>
            {/* MOBILE-FRIENDLY SPACING: Increased vertical gap on mobile for better separation */}
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8">
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
              {processSteps.map((step) => (
                <div key={step.title} className="relative z-10 flex-1 flex flex-col items-center text-center bg-white px-4">
                  <div className="mx-auto w-20 h-20 mb-6 flex items-center justify-center bg-blue-600 text-white text-3xl rounded-full shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 max-w-xs">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 bg-green-50 border-l-4 border-green-500 text-green-800 p-6 rounded-r-lg max-w-3xl mx-auto">
                <p className="font-semibold">
                    After diagnosis, you are referred to our expert Physiotherapists for hands-on treatment and a personalized recovery plan.
                </p>
            </div>
          </div>
        </section>
        
        {/* Solutions Section */}
        <section id="solutions" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Personalized Recovery Plan</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our integrated system combines multiple therapies for optimal results.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {solutions.map(solution => (
                        // MOBILE-FRIENDLY CARDS: Reduced padding and gap on smaller screens
                        <div key={solution.title} className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex items-start gap-4 md:gap-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
                            <div className="text-green-500 bg-green-100 p-4 rounded-full text-2xl flex-shrink-0">{solution.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{solution.title}</h3>
                                <p className="text-gray-600">{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Booking Form Section */}
        <BookingForm 
          key={preselectedIllness} 
          initialIllness={preselectedIllness}
          illnessOptions={[...problems.map(p => p.name), 'Other']}
        />

      </main>

      {/* Footer Section */}
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
    </>
  )
}