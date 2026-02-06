
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR_NAME } from '../constants';
import { ModularBadge } from '../components/ModularBadge';

const About = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ModularBadge label="Professional Profile Module" />
      <h1 className="text-5xl font-bold mb-10">About Dr. Santos</h1>
      <div className="prose prose-stone lg:prose-xl">
        <p className="text-xl text-stone-600 leading-relaxed mb-8">
          Dr. Maria Santos, MD, FCP, is a board-certified Internist dedicated to providing exceptional medical care for the Filipino community.
          With a focus on preventative healthcare and chronic disease management, she combines her clinical expertise with a compassionate bedside manner.
        </p>
        <p className="text-stone-600 leading-relaxed mb-10">
          Her practice spans two premier hospitals in Metro Manila, serving over 5,000 patients.
          She is committed to delivering evidence-based medicine while embracing a holistic approach
          to patient wellness.
        </p>

        <h3 className="text-2xl font-bold mb-4">Education & Training</h3>
        <ul className="space-y-4 text-stone-600 mb-10">
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2010</span>
            <span>Residency in Internal Medicine, Makati Medical Center</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2007</span>
            <span>Doctor of Medicine, University of Santo Tomas</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2003</span>
            <span>BS Biology, University of the Philippines - Manila</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Professional Affiliations</h3>
        <ul className="space-y-3 text-stone-600 mb-10">
          <li>Fellow, Philippine College of Physicians (FCP)</li>
          <li>Member, Philippine Society of Internal Medicine</li>
          <li>Active Staff, St. Luke's Medical Center Global City</li>
          <li>Active Staff, Makati Medical Center</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Professional Philosophy</h3>
        <p className="text-stone-600 leading-relaxed italic mb-10">
          "I believe that the best medicine is a partnership. My goal is to listen deeply, diagnose accurately, and work together with patients to build a sustainable path to health."
        </p>

        <Link
          to="/book"
          className="bg-salmon-500 text-white px-8 py-4 rounded-full font-medium hover:bg-salmon-600 transition-all inline-flex items-center gap-2 group no-underline"
        >
          Book a Consultation
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default About;
