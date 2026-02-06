
import React from 'react';
import { ArrowRight, CheckCircle2, Stethoscope, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ModularBadge } from '../components/ModularBadge';

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={28} className="text-salmon-500 group-hover:text-white transition-colors" />,
  ClipboardCheck: <ClipboardCheck size={28} className="text-salmon-500 group-hover:text-white transition-colors" />,
  ShieldCheck: <ShieldCheck size={28} className="text-salmon-500 group-hover:text-white transition-colors" />,
};

const Services = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModularBadge label="Services Module" />
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">Medical Services</h1>
        <p className="text-xl text-stone-500 mb-16 max-w-2xl">
          Comprehensive healthcare solutions from general consultations to specialized diagnostics, all delivered with a patient-first approach.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-10 border border-stone-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-salmon-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-salmon-500 transition-colors">
                {iconMap[service.icon] || <CheckCircle2 size={28} className="text-salmon-500 group-hover:text-white transition-colors" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-stone-500 leading-relaxed mb-6">{service.description}</p>
              <Link
                to="/book"
                className="text-salmon-600 font-medium text-sm hover:text-salmon-700 transition-colors inline-flex items-center gap-1"
              >
                Book this service <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Services Info */}
        <div className="bg-stone-50 rounded-3xl p-10 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
            <div className="space-y-6 text-stone-600">
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="text-salmon-500 flex-shrink-0 mt-1" />
                <p>Initial consultations typically last 30-45 minutes, allowing for thorough assessment.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="text-salmon-500 flex-shrink-0 mt-1" />
                <p>All major HMOs are accepted. Please bring your card and any Letter of Authorization.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="text-salmon-500 flex-shrink-0 mt-1" />
                <p>Follow-up teleconsultations are available for established patients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a consultation?</h2>
          <p className="text-stone-500 mb-8 max-w-md mx-auto">Schedule an appointment at either of our clinic locations.</p>
          <Link
            to="/book"
            className="bg-salmon-500 text-white px-8 py-4 rounded-full font-medium hover:bg-salmon-600 transition-all inline-flex items-center gap-2 group"
          >
            Book an Appointment
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
