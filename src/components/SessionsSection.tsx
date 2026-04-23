'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CalendarCard from '@/components/CalendarCard';
import { sessions } from '@/data/sessions';

const SessionsSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeSession = sessions.find((s) => s.id === activeId);

  return (
    <section
      id="sessions"
      className="max-w-7xl mx-auto px-6 py-20 relative border-t-2 border-gray-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        {/* Left Column: Sticky Detail View */}
        <div className="lg:col-span-6 order-2 lg:order-1 sticky top-32 self-start lg:pr-8 transition-all duration-500 ease-in-out ">
          {activeSession ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
              <div className="w-full h-48 bg-gray-200 rounded-2xl overflow-hidden mb-6 shadow-md shrink-0">
                <img
                  src={activeSession.image}
                  alt={activeSession.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-primary font-bold mb-4 tracking-wide uppercase text-sm">
                {activeSession.time} • {activeSession.month} {activeSession.day}
              </p>

              <div className="mt-8 text-gray-800">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ ...props }) => (
                      <h1
                        className="text-3xl md:text-4xl font-black text-gray-900 mb-6 mt-8 tracking-tight"
                        {...props}
                      />
                    ),
                    h2: ({ ...props }) => (
                      <h2
                        className="text-2xl font-bold text-[#b18111] mb-4 mt-10 tracking-tight"
                        {...props}
                      />
                    ),
                    p: ({ ...props }) => (
                      <p
                        className="text-lg leading-relaxed text-gray-600 mb-6 font-medium"
                        {...props}
                      />
                    ),
                    ul: ({ ...props }) => (
                      <ul
                        className="mb-8 space-y-3"
                        {...props}
                      />
                    ),
                    li: ({ ...props }) => (
                      <li className="text-lg text-gray-600 flex items-start font-medium">
                        <span className="text-primary mr-3 text-xl leading-none mt-0.5">
                          •
                        </span>
                        <span>{props.children}</span>
                      </li>
                    ),
                    hr: () => (
                      <hr className="my-10 border-t-2 border-gray-200" />
                    ),
                    strong: ({ ...props }) => (
                      <strong
                        className="font-bold text-[#F6B418]"
                        {...props}
                      />
                    ),
                  }}
                >
                  {activeSession.markdown}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500 mt-12">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                7 Days of <br />
                <span
                  className="bg-[#0864AF] text-white px-4 py-1 font-mono shadow-lg"
                  style={{
                    clipPath: 'polygon(2% 8%, 98% 4%, 99% 87%, 4% 94%, 0% 50%)',
                  }}
                >
                  Deep Dives
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                Explore the sessions architected to transition from basic
                concepts to advanced tech ecosystems, business modeling, and AI
                integration. Hover or click any session to see full details.
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Scrollable Content List */}
        <div className="lg:col-span-6 space-y-6 flex flex-col items-end lg:border-l-2 lg:border-gray-100 lg:pl-12">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="w-full cursor-pointer"
              onMouseEnter={() => setActiveId(session.id)}
              onClick={() => {
                setActiveId(session.id);
                // Mobile UX: Scroll to the details view when a card is clicked
                if (window.innerWidth < 1024) {
                  document
                    .getElementById('sessions')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div
                className={`transition-all duration-300 ${
                  activeId === session.id
                    ? 'scale-[1.02] ring-primary border-transparent'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <CalendarCard
                  month={session.month}
                  day={session.day}
                  title={session.title}
                  description={session.desc}
                  time={session.time}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
