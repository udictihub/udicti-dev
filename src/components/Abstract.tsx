'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const rotatingWords = ['Innovation.', 'Systems.', 'Impact.', 'the Future.'];

const Abstract = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    rotatingWords.forEach((word) => {
      tl.to(wordRef.current, {
        duration: 0.5,
        opacity: 0,
        y: 10,
        ease: 'power2.in',
      })
        .call(() => {
          if (wordRef.current) wordRef.current.innerText = word;
        })
        .to(wordRef.current, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        })
        .to({}, { duration: 1.5 });
    });

    if (isExpanded) {
      gsap.fromTo(
        '.gsap-expanded',
        { opacity: 0, height: 0, y: -10 },
        {
          opacity: 1,
          height: 'auto',
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        },
      );
    }
  }, [isExpanded]);

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-20 relative overflow-hidden"
    >
      <div className="flex flex-col w-full items-start">
        {/* Left/Main Column */}
        <div className="w-full max-w-5xl space-y-6 z-10">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1]">
            Placing UDSM at <br className="hidden lg:block" />
            the cutting edge of{' '}
            <span
              ref={wordRef}
              className="text-[#0864AF] inline-block min-w-[250px]"
            >
              Innovation.
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Maintaining the status quo is no longer enough.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Introducing a new seven-day series of sessions and talks covering
            the tech ecosystem, business modeling, and social impact.
          </p>

          {isExpanded && (
            <div className="space-y-4 pt-4 text-gray-600">
              <p className="gsap-expanded">
                We believe that by keeping the open-source spirit alive, we can
                build a great future for our nation. This special program is
                designed to complement our studies, ensuring you experience
                "real-world" happenings and learn how to make an actual impact.
              </p>
              <p className="gsap-expanded">
                Money is an important tool. Building things will eventually make
                money, but even if it doesn't happen immediately, that is no
                reason to give up. Giving this initiative priority now is a huge
                win for the long run.
              </p>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider text-sm border-b-2 border-blue-600 pb-1"
          >
            {isExpanded ? 'Close Manifesto' : 'Read Full Manifesto'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Abstract;
