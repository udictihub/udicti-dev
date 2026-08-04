'use client';

import React, { useState, useEffect } from 'react';
import udsmLogo from '@/assets/udsm_logo.png';
const navLinks = [
  { name: 'Manifesto', href: '#manifesto' },
  { name: 'The Archive', href: '#archive' },
  { name: 'Sessions', href: '#sessions' },
];

const Aside_Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
      let currentActive = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentActive = id;
          }
        }
      }

      if (currentActive) {
        setActiveSection((prev) =>
          prev !== currentActive ? currentActive : prev,
        );
      }
    };

    // Run once on mount to catch initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="xl:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50 flex items-center justify-between px-6 ">
        <h1 className="text-xl font-black text-[#0864AF] tracking-tighter">
          UDICTI<span className="text-blue-600">.</span>
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#0864AF] focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-[#0864AF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div className="flex flex-col items-start gap-1.5 w-7">
              <span className="h-0.5 w-full bg-[#0864AF] rounded-full transition-all duration-300" />
              <span className="h-0.5 ml-1 w-3/4 bg-[#0864AF] rounded-full transition-all duration-300" />
              <span className="h-0.5 ml-2 w-1/2 bg-[#0864AF] rounded-full transition-all duration-300" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}

      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-8 flex flex-col justify-between">
          <nav className="relative flex flex-col space-y-6 text-base tracking-wide">
            {/* Continuous Gray Line */}
            <span className="absolute left-0 top-0 h-full w-1 bg-gray-300"></span>

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center group transition-all duration-300 pl-4 ${
                    isActive
                      ? 'text-[#0864AF] font-bold'
                      : 'text-gray-500 font-semibold hover:text-[#0864AF]'
                  }`}
                >
                  {/* Active Blue Line */}
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-[#0864AF]"></span>
                  )}

                  {/* Icon */}
                  <span
                    className={`relative flex items-center mr-4 w-3 h-3 transition-all duration-300
            border-t-2 border-r-2 border-current rotate-45
            after:content-[''] after:absolute after:left-1.5 after:w-full after:h-full 
            after:border-t-2 after:border-r-2 after:border-current
            ${
              isActive
                ? 'text-[#0864AF] translate-x-1'
                : 'text-gray-400 group-hover:text-[#0864AF]'
            }
          `}
                  ></span>

                  {/* Link Text */}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>
          <div
            className="mt-auto pt-6 border-t border-gray-200/50 flex flex-col items-center justify-center gap-2 z-20"
            style={{ zIndex: 20 }}
          >
            <img
              src={udsmLogo.src}
              alt="University of Dar es Salaam"
              className="h-15 w-auto object-contain opacity-100 transition-all duration-300"
            />
            <p className="text-[13px] font-mono tracking-widest text-gray-500 uppercase leading-tight text-center">
              University of Dar es Salaam
            </p>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}

      <aside className="hidden xl:flex flex-col fixed top-24 left-8 w-64 z-50 h-[calc(100vh-6rem)] bg-transparent ">
        {/* Brand */}
        <div className="mb-12">
          <a
            href="https://udicti.udsm.ac.tz"
            className="flex items-center gap-3"
          >
            <img
              src="/udicti_logo.svg"
              alt="UDICTI Logo"
              className="h-12 w-auto"
            />
            <h1 className="text-3xl font-black text-[#0864AF] tracking-tighter">
              UDICTI<span className="text-blue-600">.</span>
            </h1>
          </a>
          <p className="text-xs tracking-widest text-gray-500 uppercase font-semibold mt-2 ml-1">
            Tech Hub
          </p>
        </div>

        {/* Links */}
        <nav className="relative flex flex-col space-y-6 text-base tracking-wide">
          {/* Continuous Gray Line */}
          <span className="absolute left-0 top-0 h-full w-1 bg-gray-300"></span>

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative flex items-center group transition-all duration-300 pl-4 ${
                  isActive
                    ? 'text-[#0864AF] font-bold'
                    : 'text-gray-500 font-semibold hover:text-[#0864AF]'
                }`}
              >
                {/* Active Blue Line */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#0864AF]"></span>
                )}

                {/* Icon */}
                <span
                  className={`relative flex items-center mr-4 w-3 h-3 transition-all duration-300
            border-t-2 border-r-2 border-current rotate-45
            after:content-[''] after:absolute after:left-1.5 after:w-full after:h-full 
            after:border-t-2 after:border-r-2 after:border-current
            ${
              isActive
                ? 'text-[#0864AF] translate-x-1'
                : 'text-gray-400 group-hover:text-[#0864AF]'
            }
          `}
                ></span>

                {/* Link Text */}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* UDSM Logo */}
        <div
          className="mt-auto pt-5 border-r border-gray-200/50 flex flex-col items-center justify-center gap-2 z-20"
          style={{ zIndex: 20 }}
        >
          <img
            src={udsmLogo.src}
            alt="University of Dar es Salaam"
            className="h-17 w-auto object-contain opacity-100 transition-all duration-300"
          />
          <p className="text-[13px] font-semibold tracking-widest text-gray-500 uppercase leading-tight text-center">
            University of Dar es Salaam
          </p>
        </div>
      </aside>
    </>
  );
};

export default Aside_Nav;
