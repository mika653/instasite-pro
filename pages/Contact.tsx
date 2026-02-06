
import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, MapPin, Clock, Calendar, CheckCircle } from 'lucide-react';
import { CLINIC_LOCATIONS } from '../constants';
import { ModularBadge } from '../components/ModularBadge';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [selectedClinic, setSelectedClinic] = useState(0);

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-salmon-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-salmon-500" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Appointment Requested</h2>
          <p className="text-stone-500 max-w-sm mx-auto">
            Thank you, {name}. We'll confirm your appointment at {CLINIC_LOCATIONS[selectedClinic].name} shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-salmon-600 to-salmon-700 text-white py-16 -mt-20 pt-36 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ModularBadge label="Booking Module" />
          <h1 className="text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-salmon-200/80 text-lg max-w-xl">
            Fill out the form below and our staff will confirm your appointment within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl luxury-shadow p-10 border border-stone-100">
              <div className="space-y-6">
                {/* Clinic Selection */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-3">Select Clinic</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CLINIC_LOCATIONS.map((clinic, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedClinic(index)}
                        className={`text-left p-4 rounded-xl border-2 transition-all ${
                          selectedClinic === index
                            ? 'border-salmon-500 bg-salmon-50'
                            : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <p className="font-semibold text-sm">{clinic.name}</p>
                        <p className="text-xs text-stone-400 mt-1">{clinic.hours}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  <input
                    type="tel"
                    placeholder="Mobile Number (+63)"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-stone-400" size={18} />
                  <textarea
                    rows={3}
                    placeholder="Reason for visit / additional notes"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                  />
                </div>
                <p className="text-xs text-stone-400">
                  By submitting, you agree to our data privacy policy in compliance with the Philippines Data Privacy Act of 2012.
                </p>
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!name}
                  className="bg-salmon-500 text-white px-8 py-4 rounded-full font-bold hover:bg-salmon-600 disabled:opacity-30 transition-all w-full"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {CLINIC_LOCATIONS.map((clinic, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-bold text-stone-900">{clinic.name}</h3>
                <div className="flex gap-4">
                  <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Address</h4>
                    <p className="text-stone-800 font-medium text-sm">{clinic.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Phone</h4>
                    <p className="text-stone-800 font-medium text-sm">{clinic.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Hours</h4>
                    <p className="text-stone-800 font-medium text-sm">{clinic.hours}</p>
                  </div>
                </div>
                {index < CLINIC_LOCATIONS.length - 1 && <hr className="border-stone-100 mt-6" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
