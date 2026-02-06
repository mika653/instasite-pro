
import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Phone, Clock, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR_NAME, DOCTOR_TITLE, SERVICES, CLINIC_LOCATIONS } from '../constants';
import { ModularBadge } from '../components/ModularBadge';

const Home = () => {
  return (
    <div className="pb-20">
      {/* HERO SECTION */}
      <section className="relative bg-stone-50 overflow-hidden py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ModularBadge label="Hero Section Module" />
              <h1 className="text-4xl lg:text-7xl font-bold text-stone-900 leading-[1.1] mb-6">
                Trusted medical care, built on <span className="italic serif">compassion</span>.
              </h1>
              <p className="text-lg text-stone-500 mb-10 leading-relaxed max-w-xl">
                {DOCTOR_NAME} provides patient-centric internal medicine across Metro Manila.
                Professional care designed to convert trust into lasting wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="bg-salmon-500 text-white px-8 py-4 rounded-full font-medium hover:bg-salmon-600 transition-all text-center flex items-center justify-center gap-2 group"
                >
                  Book an Appointment
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block group">
              <div className="absolute -inset-4 bg-salmon-200/40 rounded-[3rem] -rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Maria Santos"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-salmon-500 text-white p-4 rounded-2xl shadow-lg">
                <p className="text-sm font-bold">Accepting New Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-salmon-100/20 -skew-x-12 transform translate-x-1/2 hidden lg:block" />
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <Shield size={24} className="text-salmon-400" />
              <span className="text-sm font-medium text-stone-600">Board Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <Award size={24} className="text-salmon-400" />
              <span className="text-sm font-medium text-stone-600">15+ Years Practice</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={24} className="text-salmon-400" />
              <span className="text-sm font-medium text-stone-600">5,000+ Patients</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-salmon-400" />
              <span className="text-sm font-medium text-stone-600">HMO Accredited</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR INTRO */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModularBadge label="Doctor Intro Module" />
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Meet Your Physician</h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              {DOCTOR_NAME} is a board-certified Internist dedicated to providing exceptional
              medical care for the Filipino community. With a focus on preventative healthcare
              and chronic disease management, she combines clinical expertise with genuine compassion.
            </p>
            <p className="text-stone-500 leading-relaxed mb-8">
              {DOCTOR_TITLE}
            </p>
            <Link
              to="/about"
              className="text-salmon-600 font-medium hover:text-salmon-700 transition-colors inline-flex items-center gap-2"
            >
              Read full profile <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-stone-200 rounded-3xl aspect-[4/5] overflow-hidden">
              <img
                src="https://picsum.photos/seed/doctor/600/750"
                alt={DOCTOR_NAME}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-salmon-500 text-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm font-bold">Accepting New Patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ModularBadge label="Services Module" />
          <h2 className="text-4xl font-bold mb-4">Medical Services</h2>
          <p className="text-stone-500 mb-12 max-w-xl">Comprehensive healthcare solutions tailored for your needs.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-salmon-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-salmon-500 transition-colors">
                  <CheckCircle2 size={24} className="text-salmon-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="text-salmon-600 font-medium hover:text-salmon-700 transition-colors inline-flex items-center gap-2"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-salmon-600 to-salmon-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to book your visit?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Schedule an appointment online today. We accept major HMOs and are ready to help with your healthcare needs.
          </p>
          <Link to="/book" className="bg-white text-salmon-700 px-10 py-5 rounded-full font-bold hover:bg-salmon-50 transition-all inline-block">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
