// components/BookingForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaUserMd, FaCalendarAlt, FaClock, FaCheckCircle, FaArrowRight, FaArrowLeft, FaCheck, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa';

// --- Mock Data with Images ---
const doctors = [
  { id: 1, name: 'Dr. Evelyn Reed', specialty: 'Orthopedic Specialist', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' },
  { id: 2, name: 'Dr. Benjamin Carter', specialty: 'Sports Medicine', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' },
  { id: 3, name: 'Dr. Olivia Martinez', specialty: 'General Diagnostics', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' },
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '02:30 PM', '03:00 PM'
];
// -----------------

// Props interface for the component
interface BookingFormProps {
  initialIllness?: string;
  illnessOptions?: string[];
}

const BookingForm: React.FC<BookingFormProps> = ({ initialIllness = '', illnessOptions = [] }) => {
  const [step, setStep] = useState(1);
  const [selectedIllness, setSelectedIllness] = useState(initialIllness);
  const [customIllness, setCustomIllness] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  // Effect to handle pre-selected illness from page props
  useEffect(() => {
    if (initialIllness && illnessOptions.includes(initialIllness)) {
      setSelectedIllness(initialIllness);
      setStep(2); // Automatically advance to the next step
    }
  }, [initialIllness, illnessOptions]);
  
  // Handlers
  const handleIllnessSelect = (illness: string) => { 
    setSelectedIllness(illness); 
    if (illness !== 'Other') {
      setCustomIllness(''); 
      setStep(2);
    }
  };
  const handleCustomIllnessSubmit = () => {
    if (customIllness.trim()) setStep(2);
  };
  const handleDoctorSelect = (doctor: typeof doctors[0]) => { setSelectedDoctor(doctor); setStep(3); };
  const handleDateSelect = (day: number) => { setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)); setStep(4); };
  const handleTimeSelect = (time: string) => { setSelectedTime(time); setStep(5); };
  const resetBooking = () => { 
    setStep(1); 
    setSelectedIllness(initialIllness); // Reset to initial prop
    setCustomIllness('');
    setSelectedDoctor(null); 
    setSelectedTime(''); 
    setSelectedDate(new Date()); 
    if (initialIllness) setStep(2); // If there was an initial illness, go back to step 2
  };

  // --- Reusable Components ---
  const Progress = () => {
    const stepsInfo = [
        {name: "Reason", icon: <FaStethoscope />}, 
        {name: "Doctor", icon: <FaUserMd />}, 
        {name: "Date", icon: <FaCalendarAlt />}, 
        {name: "Time", icon: <FaClock />}, 
        {name: "Confirm", icon: <FaCheck />}
    ];
    return (
      <div className="w-full md:w-48 md:pr-8 mb-8 md:mb-0">
        <ul className="space-y-4">
          {stepsInfo.map((s, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${step > index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {step > index + 1 ? <FaCheck /> : s.icon}
              </div>
              <span className={`font-medium ${step > index ? 'text-blue-600' : 'text-gray-500'}`}>{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const Calendar = () => {
    const today = new Date();
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let days = Array.from({ length: firstDayOfMonth }, (_, i) => <div key={`empty-${i}`} className="border border-transparent"></div>);
    for (let day = 1; day <= daysInMonth; day++) {
        const isPast = new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        days.push(
            <button key={day} onClick={() => !isPast && handleDateSelect(day)} disabled={isPast} className={`h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-center rounded-full transition-all duration-200 ${isPast ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-600 hover:text-white'}`}>
                {day}
            </button>
        );
    }
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => setSelectedDate(new Date(year, month - 1, 1))} className="p-2 rounded-full hover:bg-gray-100"><FaArrowLeft /></button>
                <h3 className="font-bold text-base md:text-lg text-gray-700">{selectedDate.toLocaleString('default', { month: 'long' })} {year}</h3>
                <button onClick={() => setSelectedDate(new Date(year, month + 1, 1))} className="p-2 rounded-full hover:bg-gray-100"><FaArrowRight /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 md:gap-2 text-sm text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, index) => <div key={index} className="font-semibold text-gray-400">{d}</div>)}
                {days}
            </div>
        </div>
    );
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Book Your Initial Consultation</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">This first step is crucial for a proper diagnosis. Let's get you started on the path to recovery.</p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
          {/* --- LEFT COLUMN: Form Steps --- */}
          <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row">
              <Progress />
              <div className="flex-1 md:pl-8 pt-8 md:pt-0 border-t border-gray-200 md:border-t-0 md:border-l">
                {step === 1 && (
                  <div className="animate-fadeInRight">
                    <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">1. What brings you in today?</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {illnessOptions.map(illness => (
                        <button key={illness} onClick={() => handleIllnessSelect(illness)} className={`p-4 border-2 rounded-lg text-center font-medium transition-all duration-200 ${selectedIllness === illness ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'}`}>
                          {illness}
                        </button>
                      ))}
                    </div>
                    {selectedIllness === 'Other' && (
                      <div className="mt-6 animate-fadeInRight">
                          <label htmlFor="custom-illness" className="block text-sm font-medium text-gray-700 mb-2">Please specify:</label>
                          <div className="flex flex-col sm:flex-row gap-3">
                              <input
                                  type="text"
                                  id="custom-illness"
                                  value={customIllness}
                                  onChange={(e) => setCustomIllness(e.target.value)}
                                  placeholder="e.g., Tennis Elbow"
                                  className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                              />
                              <button onClick={handleCustomIllnessSubmit} disabled={!customIllness.trim()} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                  Next <FaArrowRight />
                              </button>
                          </div>
                      </div>
                    )}
                  </div>
                )}
                {step === 2 && (
                  <div className="animate-fadeInRight">
                    <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">2. Select Your Doctor</h3>
                    <div className="space-y-4">
                      {doctors.map(doctor => (
                        <button key={doctor.id} onClick={() => handleDoctorSelect(doctor)} className="w-full flex items-center p-4 border-2 border-gray-200 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition-all duration-300">
                          <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                          <div>
                            <p className="font-bold text-gray-800">{doctor.name}</p>
                            <p className="text-sm text-gray-500">{doctor.specialty}</p>
                          </div>
                          <FaArrowRight className="ml-auto text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 3 && ( <div className="animate-fadeInRight"><h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">3. Select an Available Date</h3><Calendar /></div> )}
                {step === 4 && (
                  <div className="animate-fadeInRight">
                    <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">4. Select a Time Slot</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {timeSlots.map(time => (
                        <button key={time} onClick={() => handleTimeSelect(time)} className="p-4 border rounded-lg text-center font-medium hover:bg-blue-600 hover:text-white hover:scale-105 transform transition-all duration-200">
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 5 && (
                  <div className="animate-fadeInRight text-center flex flex-col items-center justify-center min-h-[300px]">
                    <FaCheckCircle className="text-green-500 text-6xl md:text-7xl mx-auto mb-5" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Thank You!</h3>
                    <p className="text-gray-600 mb-8">Your appointment is confirmed.</p>
                    <button onClick={resetBooking} className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                      Book Another
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* --- RIGHT COLUMN: Dynamic Summary --- */}
          <div className="w-full md:w-1/3 bg-slate-100 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            { step < 5 && (
                <>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 border-b pb-4 mb-4">Booking Summary</h3>
                  {step > 1 || initialIllness ? (
                    <div className="space-y-4 animate-fadeInRight">
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-gray-500 flex items-center gap-2"><FaStethoscope /> Reason for Visit</p>
                        <p className="font-semibold text-gray-800">{selectedIllness === 'Other' ? customIllness : selectedIllness}</p>
                      </div>
                      {selectedDoctor && (
                        <div className="flex items-center animate-fadeInRight">
                          <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-16 h-16 rounded-full mr-4 object-cover shadow-md" />
                          <div>
                            <p className="font-bold text-gray-800">{selectedDoctor.name}</p>
                            <p className="text-sm text-gray-500">{selectedDoctor.specialty}</p>
                          </div>
                        </div>
                      )}
                      { selectedTime ? (
                          <div className="bg-white p-4 rounded-lg border animate-fadeInRight">
                            <p className="text-sm text-gray-500">Date & Time</p>
                            <p className="font-semibold text-gray-800">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                            <p className="font-semibold text-gray-800 text-lg">{selectedTime}</p>
                          </div>
                      ) : ( step === 4 &&
                          <div className="bg-white p-4 rounded-lg border animate-fadeInRight">
                            <p className="text-sm text-gray-500">Selected Date</p>
                            <p className="font-semibold text-gray-800">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                          </div>
                      )}
                      <button onClick={resetBooking} className="text-sm text-red-500 hover:underline mt-4">Start Over</button>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <FaStethoscope className="mx-auto text-4xl mb-2" />
                      <p>Your appointment details will appear here.</p>
                    </div>
                  )}
                </>
            )}
            { step === 5 && (
                <div className="animate-fadeInRight text-left space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 border-b pb-4 mb-4">Appointment Details</h3>
                    <div className="bg-white p-4 rounded-lg border">
                      <p className="text-sm text-gray-500 flex items-center gap-2"><FaStethoscope /> Reason for Visit</p>
                      <p className="font-semibold text-gray-800">{selectedIllness === 'Other' ? customIllness : selectedIllness}</p>
                    </div>
                    <div className="flex items-center">
                        <img src={selectedDoctor?.image} alt={selectedDoctor?.name} className="w-16 h-16 rounded-full mr-4 object-cover shadow-md" />
                        <div>
                          <p className="font-bold text-gray-800">{selectedDoctor?.name}</p>
                          <p className="text-sm text-gray-500">{selectedDoctor?.specialty}</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="font-semibold text-gray-800">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at <span className="text-blue-600">{selectedTime}</span></p>
                    </div>
                    <div className="pt-4">
                        <p className="text-sm font-semibold text-gray-600 flex items-center gap-2"><FaMapMarkerAlt /> Clinic Location</p>
                        <p className="text-gray-500">123 Health St, Wellness City, 45678</p>
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;