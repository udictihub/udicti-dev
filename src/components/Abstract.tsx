'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import labs from '@/assets/3D.png';

const rotatingWords = ['builders', 'students', 'founders'];

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
      className="max-w-6xl mx-auto px-6 py-14 relative overflow-hidden xl:pl-[max(0px,_240px_-_(100vw_-_1152px)/2)]"
    >
      <div className="flex flex-col w-full items-start  xl:border-l-2  border-gray-100/80 xl:pl-6">
        <div className="w-full max-w-5xl space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter">
            Where
            <span
              className="relative inline-flex items-center justify-center min-w-[200px] h-[64px] bg-[#0864AF] mx-2 shadow-lg"
              style={{
                clipPath: 'polygon(2% 8%, 98% 4%, 99% 87%, 4% 94%, 0% 50%)',
              }}
            >
              <span
                ref={wordRef}
                className="text-white italic underline decoration-4 decoration-[#b18111]/30 underline-offset-8 font-mono tracking-normal text-center z-10 px-4"
              >
                builders
              </span>
            </span>
            {''}
            meet systems and practice.
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Level up beyond the normal.
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
                <strong>Money is an important tool</strong>; it is a basic need
                and vital for daily life while inhabiting planet Earth. Building
                things will eventually make money, but even if it doesn't happen
                immediately, that is no reason to give up. We still have a long
                way to go. It is simply a reality that we don’t yet have the
                advantage of a strong economy like some Western countries.
              </p>
              <p className="gsap-expanded">
                It is also a fact that many companies still gain{' '}
                <strong>unfair advantages</strong> in sectors where local people
                should have the chance to dominate. However, giving this
                initiative priority now is a{' '}
                <strong>huge win for the long run</strong>.
              </p>
              <p className="gsap-expanded text-gray-500 italic">
                <strong>PS:</strong> We have tight, scheduled timetables for all
                our courses, but let’s make this a win. Let’s keep the legacy of
                ensuring a platform that enables students to get what is truly
                needed. To be honest, we wish this had grades, but the value
                will make you stand out regardless.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 w-full">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 font-mono font-bold text-[#b18111] hover:text-[#0864AF] transition-colors uppercase tracking-wider text-sm cursor-pointer shrink-0 pb-1 relative"
            >
              {/* Left Arrow Indicator */}
              <span
                className={`inline-block text-base transition-transform duration-300 ease-out font-sans text-[#0864AF]
      ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}
    `}
              >
                »
              </span>

              <span className="relative">
                {isExpanded ? 'Close Manifesto' : 'Read Full Manifesto'}

                {/* Clean, expanding interactive underline */}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#0864AF] transition-all duration-300 ease-out group-hover:w-full" />

                {/* Static subtle gold accent baseline */}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[1px] bg-[#b18111]/30 transition-all duration-300 ${isExpanded ? 'w-0' : 'w-full'}`}
                />
              </span>

              {/* Right Arrow Indicator */}
              <span className="inline-block text-base opacity-0 -translate-x-2 transition-all duration-300 ease-out font-sans text-[#0864AF] group-hover:opacity-100 group-hover:translate-x-0">
                «
              </span>
            </button>

            {/* Powered By Section */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest shrink-0">
                In Collaboration with
              </span>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 transition-all duration-500">
                <a
                  href="https://ipfsoftwares.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <svg
                    fill="#1e79e4"
                    className="w-12 h-auto"
                    viewBox="0 0 912.744 776.25"
                  >
                    <g
                      id="Group_39070"
                      data-name="Group 39070"
                      transform="translate(4685.142 -3988)"
                    >
                      <g
                        id="Group_39068"
                        data-name="Group 39068"
                      >
                        <path
                          id="Path_16633"
                          data-name="Path 16633"
                          d="M825.823,222.031C808.117,217.48,805.6,215.5,805.6,210.255c0-4.265,4.374-7.024,11.12-7.024,7.554,0,15.729,3.121,24.982,9.539l1.38.951,13.223-19.162-1.211-.976c-10.784-8.664-23.586-13.055-38.054-13.055-21.542,0-36.582,13.046-36.582,32.006,0,21.609,14.863,27.127,34.311,32.1,17.563,4.509,18.825,7.184,18.825,11.33,0,4.837-4.753,7.73-12.735,7.73-9.892,0-19-3.718-28.7-11.709l-1.27-1.06-15.032,18.018,1.194,1.077a64.9,64.9,0,0,0,43.4,16.377c23.233,0,38.248-12.786,38.248-32.847C858.7,234.48,845.557,227.162,825.823,222.031Z"
                          transform="translate(-5461 4477.559)"
                        ></path>
                        <path
                          id="Path_16754"
                          data-name="Path 16754"
                          d="M825.823,222.031C808.117,217.48,805.6,215.5,805.6,210.255c0-4.265,4.374-7.024,11.12-7.024,7.554,0,15.729,3.121,24.982,9.539l1.38.951,13.223-19.162-1.211-.976c-10.784-8.664-23.586-13.055-38.054-13.055-21.542,0-36.582,13.046-36.582,32.006,0,21.609,14.863,27.127,34.311,32.1,17.563,4.509,18.825,7.184,18.825,11.33,0,4.837-4.753,7.73-12.735,7.73-9.892,0-19-3.718-28.7-11.709l-1.27-1.06-15.032,18.018,1.194,1.077a64.9,64.9,0,0,0,43.4,16.377c23.233,0,38.248-12.786,38.248-32.847C858.7,234.48,845.557,227.162,825.823,222.031Z"
                          transform="translate(-4653.696 4477.559)"
                        ></path>
                        <path
                          id="Path_16634"
                          data-name="Path 16634"
                          d="M841.329,180.495c-30.711,0-54.777,23.376-54.777,53.506,0,30.181,23.435,52.934,54.5,52.934,30.736,0,54.8-23.376,54.8-53.506C895.853,203.248,872.409,180.495,841.329,180.495Zm0,82.88c-16.26,0-28.515-12.752-28.515-29.945,0-16.748,12.146-29.373,28.238-29.373,16.268,0,28.549,12.744,28.549,29.945C869.6,250.749,857.445,263.375,841.329,263.375Z"
                          transform="translate(-5381.74 4477.314)"
                        ></path>
                        <path
                          id="Path_16635"
                          data-name="Path 16635"
                          d="M826.2,203.957h48.443V180.7H800.967v91.417a11.592,11.592,0,0,0,11.591,11.591H826.2V245.115H873.77V221.849H826.2Z"
                          transform="translate(-5274.902 4478.827)"
                        ></path>
                        <path
                          id="Path_16636"
                          data-name="Path 16636"
                          d="M810.718,180.7v23.544h30.358v67.873a11.584,11.584,0,0,0,11.582,11.591h13.661V204.243h30.29L888.626,180.7Z"
                          transform="translate(-5202.632 4478.827)"
                        ></path>
                        <path
                          id="Path_16637"
                          data-name="Path 16637"
                          d="M950.421,180.959l-19.473,63.651-21.062-63.945H888.646l-21.063,63.953-19.515-63.659H821.042l32.494,95.859a11.578,11.578,0,0,0,10.969,7.865h13.139l21.332-61.758,18.615,53.952a11.584,11.584,0,0,0,10.952,7.806h13.231l35.16-103.723Z"
                          transform="translate(-5126.115 4478.567)"
                        ></path>
                        <path
                          id="Path_16638"
                          data-name="Path 16638"
                          d="M875.551,180.614l-37.28,87.6a11.589,11.589,0,0,0,10.666,16.125h8.488l9.11-22.35h39.913l6.173,15.141a11.588,11.588,0,0,0,10.725,7.209h18.783L897.993,180.614Zm.193,58.671,10.733-26.261,10.767,26.261Z"
                          transform="translate(-5005.359 4478.196)"
                        ></path>
                        <path
                          id="Path_16639"
                          data-name="Path 16639"
                          d="M937.127,215.262c0-9.766-3.129-18.051-9.035-23.965-7.04-7.032-17.218-10.6-30.24-10.6H850.622v91.417a11.585,11.585,0,0,0,11.583,11.591H875.89V251.8h14.662l16.772,25.025a15.525,15.525,0,0,0,12.895,6.881H941.6l-24.966-36.49C929.868,241.565,937.127,230.378,937.127,215.262Zm-40.713,13.845H875.89V203.823h20.1c7.108,0,15.578,2.187,15.578,12.861C911.564,224.456,905.9,229.108,896.415,229.108Z"
                          transform="translate(-4906.88 4478.827)"
                        ></path>
                        <path
                          id="Path_16640"
                          data-name="Path 16640"
                          d="M934.473,203.536V180.7H862.36v91.417a11.592,11.592,0,0,0,11.592,11.591h60.522V260.87H887.46v-17.6h47.013V220.427H887.46V203.536Z"
                          transform="translate(-4819.882 4478.827)"
                        ></path>
                      </g>
                      <g
                        id="Group_39047"
                        data-name="Group 39047"
                        transform="translate(-4685.142 3988)"
                      >
                        <path
                          id="Path_16641"
                          data-name="Path 16641"
                          d="M841.413,155.732v.019c.307-.173.595-.355.893-.528C842.008,155.386,841.71,155.569,841.413,155.732Z"
                          transform="translate(-212.068 271.969)"
                        ></path>
                        <path
                          id="Path_16642"
                          data-name="Path 16642"
                          d="M842.422,155.11c.259-.154.5-.326.749-.48C842.921,154.784,842.681,154.956,842.422,155.11Z"
                          transform="translate(-203.391 266.869)"
                        ></path>
                        <path
                          id="Path_16643"
                          data-name="Path 16643"
                          d="M941.593,136.444a246.809,246.809,0,0,1-13.084,59.4l-.135.374q-1.886,5.256-4.013,10.378l-.336.816q-2.073,4.968-4.387,9.783l-.49,1.037q-2.29,4.738-4.79,9.332c-.2.365-.4.739-.605,1.1q-2.5,4.565-5.222,8.986c-.211.346-.432.682-.643,1.027-1.853,2.966-3.753,5.895-5.732,8.755-.182.269-.374.518-.557.787q-3.067,4.406-6.346,8.659l-.278.355a228.954,228.954,0,0,1-51.6,48.366H1083.61V136.444Z"
                          transform="translate(-195.212 110.465)"
                        ></path>
                        <path
                          id="Path_16644"
                          data-name="Path 16644"
                          d="M775.858,128.447V381.212A144.356,144.356,0,0,0,920.218,525.571h28.339V128.447Z"
                          transform="translate(-775.858 41.689)"
                        ></path>
                        <path
                          id="Path_16645"
                          data-name="Path 16645"
                          d="M920.218,110.725h28.35V255.084H775.858A144.362,144.362,0,0,1,920.218,110.725Z"
                          transform="translate(-775.858 -110.725)"
                        ></path>
                        <path
                          id="Path_16646"
                          data-name="Path 16646"
                          d="M1062.229,110.725h-265.7v567.26H969.241V553.556h84.137c154.1,0,266.58-77.052,266.58-223.187v-1.776C1319.958,191.319,1218.991,110.725,1062.229,110.725Zm85.912,227.612c0,48.712-37.2,80.594-98.306,80.594H969.241V255.084h79.7c62,0,99.2,28.34,99.2,81.477Z"
                          transform="translate(-598.057 -110.725)"
                        ></path>
                        <path
                          id="Path_16647"
                          data-name="Path 16647"
                          d="M841.413,155.732v.019c.307-.173.595-.355.893-.528C842.008,155.386,841.71,155.569,841.413,155.732Z"
                          transform="translate(-212.068 271.969)"
                        ></path>
                        <path
                          id="Path_16648"
                          data-name="Path 16648"
                          d="M842.422,155.11c.259-.154.5-.326.749-.48C842.921,154.784,842.681,154.956,842.422,155.11Z"
                          transform="translate(-203.391 266.869)"
                        ></path>
                        <path
                          id="Path_16649"
                          data-name="Path 16649"
                          d="M1145.5,255.084V240.021a129.3,129.3,0,0,0-129.3-129.3h-177.2c66.865,27.975,112.553,77.8,131.494,144.359Z"
                          transform="translate(-232.761 -110.725)"
                        ></path>
                        <path
                          id="Path_16650"
                          data-name="Path 16650"
                          d="M875.576,196.183h-58.37v98.652H910.05A139.552,139.552,0,0,0,1049.6,155.276h0C1002.836,181.677,943.881,196.183,875.576,196.183Z"
                          transform="translate(-420.255 272.425)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>

                <a
                  href="https://robotics.udsm.ac.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <img
                    src={labs.src}
                    alt="UDSM Robotics Logo"
                    className="h-14 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract;
