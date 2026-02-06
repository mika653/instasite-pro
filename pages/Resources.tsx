
import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS } from '../constants';
import { ModularBadge } from '../components/ModularBadge';

const Resources = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModularBadge label="Resources Module" />
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">Patient Resources</h1>
        <p className="text-xl text-stone-500 mb-16 max-w-2xl">
          Find answers to common questions about our practice, appointments, and policies.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-100 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-stone-900 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-salmon-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-stone-500 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-stone-50 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/book"
              className="flex items-center justify-between bg-white rounded-xl p-5 border border-stone-100 hover:shadow-md transition-all group"
            >
              <span className="font-medium text-stone-700">Book an Appointment</span>
              <ArrowRight size={16} className="text-salmon-500 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/clinics"
              className="flex items-center justify-between bg-white rounded-xl p-5 border border-stone-100 hover:shadow-md transition-all group"
            >
              <span className="font-medium text-stone-700">Clinic Locations</span>
              <ArrowRight size={16} className="text-salmon-500 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-between bg-white rounded-xl p-5 border border-stone-100 hover:shadow-md transition-all group"
            >
              <span className="font-medium text-stone-700">Our Services</span>
              <ArrowRight size={16} className="text-salmon-500 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-between bg-white rounded-xl p-5 border border-stone-100 hover:shadow-md transition-all group"
            >
              <span className="font-medium text-stone-700">About Dr. Santos</span>
              <ArrowRight size={16} className="text-salmon-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
