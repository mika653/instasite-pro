
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { DOCTOR_NAME } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clinics', path: '/clinics' },
    { name: 'Resources', path: '/resources' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="serif text-xl font-bold text-stone-900 tracking-tight">InstaSite™ Pro</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 -mt-1 font-medium">Built to Convert</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-salmon-600' : 'text-stone-500 hover:text-salmon-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-salmon-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-salmon-600 transition-all flex items-center gap-2"
            >
              <Calendar size={16} />
              Book Appointment
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-500">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-stone-600 hover:text-stone-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="block bg-salmon-500 text-white text-center py-3 rounded-xl font-medium"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="serif text-2xl font-bold mb-4">{DOCTOR_NAME}</h2>
          <p className="text-stone-500 max-w-sm text-sm leading-relaxed mb-6">
            Providing premium medical care with a focus on trust, transparency, and patient comfort.
          </p>
          <div className="flex space-x-4">
            <span className="text-[10px] font-bold text-stone-400 border border-stone-300 px-2 py-1 rounded">InstaSite™ Pro</span>
            <span className="text-[10px] font-bold text-stone-400 border border-stone-300 px-2 py-1 rounded">CONVERSION READY</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-stone-900 mb-4">Practice</h3>
          <ul className="space-y-2 text-sm text-stone-500">
            <li><Link to="/about" className="hover:text-stone-900">Professional Bio</Link></li>
            <li><Link to="/services" className="hover:text-stone-900">Medical Services</Link></li>
            <li><Link to="/clinics" className="hover:text-stone-900">Clinic Locations</Link></li>
            <li><Link to="/resources" className="hover:text-stone-900">Patient Resources</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-stone-900 mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-stone-500">
            <li><Link to="/book" className="hover:text-stone-900">Book Online</Link></li>
            <li><span className="hover:text-stone-900 cursor-pointer">Privacy Policy</span></li>
            <li><span className="hover:text-stone-900 cursor-pointer">Terms of Service</span></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
        <p>© 2024 InstaSite™ Platform. All rights reserved.</p>
        <span className="mt-4 md:mt-0 hover:text-stone-600 cursor-pointer">Powered by InstaSite™</span>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-salmon-100 selection:text-salmon-900">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
