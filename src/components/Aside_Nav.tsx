'use client';

import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Manifesto', href: '#manifesto' },
  { name: 'Sessions', href: '#sessions' },
  { name: 'The Archive', href: '#archive' },
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
        <h1 className="text-xl font-black text-gray-900 tracking-tighter">
          UDICTI<span className="text-blue-600">.</span>
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}

      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-8">
          <nav className="flex flex-col space-y-8 text-3xl font-bold text-gray-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center group transition-all duration-300 ${
                    isActive ? 'text-[#0864AF]' : 'text-gray-800'
                  }`}
                >
                  <span
                    className={`relative flex items-center mr-4 w-4 h-4 transition-all duration-300
                      /* Draw the first arrow */
                      border-t-[3px] border-r-[3px] border-current rotate-45
                      /* The second arrow via pseudo-element */
                      after:content-[''] after:absolute after:left-2 after:w-full after:h-full 
                      after:border-t-[3px] after:border-r-[3px] after:border-current
                      ${
                        isActive
                          ? 'text-[#0864AF] translate-x-2'
                          : 'text-gray-400 group-hover:text-[#0864AF]'
                      }
                    `}
                  ></span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden xl:flex flex-col fixed top-24 left-12 w-64 z-50">
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
        <nav className="flex flex-col space-y-6 text-base tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center group transition-all duration-300 ${
                  isActive
                    ? 'text-[#0864AF] font-bold'
                    : 'text-gray-500 font-semibold hover:text-[#0864AF]'
                }`}
              >
                <span
                  className={`relative flex items-center mr-4 w-3 h-3 transition-all duration-300
    /* Draw the first arrow */
    border-t-2 border-r-2 border-current rotate-45
    /* The second arrow via pseudo-element */
    after:content-[''] after:absolute after:left-1.5 after:w-full after:h-full 
    after:border-t-2 after:border-r-2 after:border-current
    ${isActive ? 'text-[#0864AF] translate-x-1' : 'text-gray-400 group-hover:text-[#0864AF]'}
  `}
                ></span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Aside_Nav;
