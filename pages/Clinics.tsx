
import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_LOCATIONS } from '../constants';
import { ModularBadge } from '../components/ModularBadge';

const Clinics = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModularBadge label="Clinics Module" />
        <h1 className="text-5xl font-bold mb-6">Clinic Locations</h1>
        <p className="text-xl text-stone-500 mb-16 max-w-2xl">
          Visit us at two convenient locations in Metro Manila. Both clinics are equipped with modern diagnostic facilities.
        </p>

        {/* Clinic Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {CLINIC_LOCATIONS.map((clinic, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 border border-stone-100 luxury-shadow">
              <h3 className="serif text-2xl font-bold mb-8 text-stone-900">{clinic.name}</h3>
              <div className="space-y-6">
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

                {/* Affiliations */}
                <div className="pt-4 border-t border-stone-100">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-3">Affiliations</h4>
                  <div className="flex flex-wrap gap-2">
                    {clinic.affiliations.map((affiliation, i) => (
                      <span key={i} className="text-xs font-medium bg-salmon-50 text-salmon-700 px-3 py-1 rounded-full">
                        {affiliation}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Insurance */}
        <div className="bg-stone-50 rounded-3xl p-10 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={24} className="text-salmon-500" />
                <h2 className="text-2xl font-bold">Accepted HMOs</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Maxicare', 'Intellicare', 'Medicard', 'PhilCare', 'Etiqa', 'Pacific Cross'].map((hmo) => (
                  <div key={hmo} className="bg-white rounded-xl p-4 border border-stone-100 text-center">
                    <span className="text-sm font-medium text-stone-700">{hmo}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard size={24} className="text-salmon-500" />
                <h2 className="text-2xl font-bold">Payment Options</h2>
              </div>
              <div className="space-y-4 text-stone-600">
                <p className="text-sm leading-relaxed">
                  We accept cash, credit/debit cards, GCash, Maya, and bank transfers.
                  For HMO patients, please present your card and LOA at the clinic.
                </p>
                <p className="text-sm leading-relaxed">
                  Self-pay patients may request a receipt for reimbursement from their insurance provider.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/book"
            className="bg-salmon-500 text-white px-8 py-4 rounded-full font-medium hover:bg-salmon-600 transition-all inline-flex items-center gap-2"
          >
            Book at a Location
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
