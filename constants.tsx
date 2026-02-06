
import React from 'react';
import { Service, FAQ, ClinicLocation } from './types';

export const DOCTOR_NAME = "Dr. Maria Santos, MD";
export const DOCTOR_TITLE = "Consultant Physician | Internal Medicine";

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    name: "St. Luke's Medical Center",
    address: "Room 402, Medical Arts Building, Global City, Taguig",
    phone: "+63 2 8789 7700",
    hours: "Mon - Wed: 10:00 AM - 4:00 PM",
    affiliations: ["St. Luke's Global City", "The Medical City"],
  },
  {
    name: "Makati Medical Center",
    address: "Room 515, Tower 1, Amorsolo St., Makati City",
    phone: "+63 2 8888 8999",
    hours: "Thu - Sat: 9:00 AM - 1:00 PM",
    affiliations: ["Makati Medical Center"],
  }
];

export const SERVICES: Service[] = [
  {
    id: "consultation",
    title: "General Consultation",
    description: "Comprehensive medical evaluations for acute and chronic conditions, ensuring tailored treatment plans for every patient.",
    icon: "Stethoscope"
  },
  {
    id: "checkup",
    title: "Executive Health Check",
    description: "Preventative screenings and diagnostics designed for busy professionals to maintain peak physical health.",
    icon: "ClipboardCheck"
  },
  {
    id: "hmo",
    title: "Insurance Coordination",
    description: "Seamless processing for all major Filipino HMOs (Maxicare, Intellicare, Medicard) and international insurance.",
    icon: "ShieldCheck"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Do you accept walk-in patients?",
    answer: "While we prioritize scheduled appointments, we do accommodate walk-ins at our Makati clinic based on availability. For St. Luke's, strictly by appointment."
  },
  {
    question: "Which HMOs are you accredited with?",
    answer: "We are currently accredited with Maxicare, Intellicare, Medicard, PhilCare, and Etiqa. Please bring your physical card or LOA."
  },
  {
    question: "How do I prepare for my first consultation?",
    answer: "Please bring any previous laboratory results from the last 6 months, a list of current medications, and your HMO card if applicable."
  },
  {
    question: "Do you offer teleconsultation?",
    answer: "Yes, we offer online teleconsultation via video call for follow-up appointments and non-emergency consultations. Book through our contact form."
  }
];
