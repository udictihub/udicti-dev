'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { archivePhotos } from '@/data/photos';

const breakpoints = [
  { maxWidth: 640, hexW: 130, pattern: [1, 2], repeat: true },
  { maxWidth: 1024, hexW: 280, pattern: [2, 3, 2], repeat: false },
  { maxWidth: Infinity, hexW: 280, pattern: [3, 4, 3], repeat: false },
];

const ROTATIONS = [
  'rotate-3',
  '-rotate-6',
  'rotate-6',
  '-rotate-3',
  'rotate-2',
  '-rotate-4',
  '-rotate-2',
  'rotate-5',
];
const Y_OFFSETS = [0, 14, -10, 8, -16, 4, -6, 12];
const rotationFor = (i: number) => ROTATIONS[i % ROTATIONS.length];
const yOffsetFor = (i: number) => Y_OFFSETS[i % Y_OFFSETS.length];

const STRIP_OVERLAP = 70;

const PhotosCard = () => {
  const [config, setConfig] = useState(breakpoints[2]);
  const [shuffledPhotos, setShuffledPhotos] = useState(archivePhotos);
  const [changingIndices, setChangingIndices] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const interval = setInterval(() => {
      const visibleCount = config.pattern.reduce((a, b) => a + b, 0);
      const idx1 = Math.floor(
        Math.random() * Math.min(archivePhotos.length, visibleCount),
      );

      let idx2 = Math.floor(Math.random() * archivePhotos.length);
      while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * archivePhotos.length);
      }

      setChangingIndices([idx1, idx2]);

      timeoutId = setTimeout(() => {
        setShuffledPhotos((prev) => {
          const newArr = [...prev];
          [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]];
          return newArr;
        });
        setChangingIndices([]);
      }, 600);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [config.pattern]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const newConfig =
        breakpoints.find((bp) => w <= bp.maxWidth) || breakpoints[2];
      setConfig(newConfig);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxLoaded(false);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(index);
    }
  };

  const getPattern = () => {
    if (!config.repeat) return config.pattern;
    const result = [];
    let count = 0;
    let i = 0;
    while (count < shuffledPhotos.length) {
      const rowCount = config.pattern[i % config.pattern.length];
      result.push(rowCount);
      count += rowCount;
      i++;
    }
    return result;
  };

  const pattern = getPattern();
  const W = config.hexW;
  const H = W * 1.1547;
  const GAP = 12;
  const overlap = H * 0.25 - GAP * 0.5;
  const shift = (W + GAP) / 2;

  let cellIdx = 0;

  return (
    <section
      id="archive"
      className="w-full flex flex-col items-center justify-center overflow-hidden bg-gray-200 xl:pl-[max(0px,_240px_-_(100vw_-_1152px)/2)]"
    >
      <div className="max-w-6xl mx-auto px-6 py-14 relative border-t-2 border-gray-200 w-full ">
        <div className="text-center mb-16 relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2]">
            The{' '}
            <span
              className="bg-[#0864AF] text-white px-4 py-1 font-mono shadow-lg inline-block mt-1 sm:mt-0"
              style={{
                clipPath: 'polygon(2% 8%, 98% 4%, 99% 87%, 4% 94%, 0% 50%)',
              }}
            >
              Archive
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Glimpses from our past sessions.
          </p>
        </div>

        {/* ---------- MOBILE: Horizontal Fan Strip + Lightbox ---------- */}
        <div className="md:hidden">
          <div
            className="relative z-10 flex items-center overflow-x-auto snap-x snap-mandatory pb-6 pt-4 px-6 -mx-6 no-scrollbar"
            style={{ scrollPaddingLeft: '1.5rem' }}
          >
            {shuffledPhotos.map((data, i) => {
              const rot = rotationFor(i);
              const yOff = yOffsetFor(i);

              return (
                <div
                  key={data.img}
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className={[
                    'relative w-[150px] aspect-[3/4] rounded-xl overflow-hidden shrink-0',
                    'border-4 border-white shadow-xl cursor-pointer snap-center',
                    'transition-transform duration-300 active:scale-95',
                    rot,
                  ].join(' ')}
                  style={{
                    marginLeft: i === 0 ? 0 : -STRIP_OVERLAP,
                    transform: `translateY(${yOff}px)`,
                    zIndex: i,
                  }}
                >
                  <Image
                    src={data.img}
                    alt={data.label}
                    fill
                    sizes="150px"
                    quality={100}
                    className="object-cover pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest font-mono">
            Swipe to browse &middot; tap to expand
          </p>

          {activeIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-8 transition-opacity duration-300 opacity-100"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
            >
              <div
                className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={shuffledPhotos[activeIndex].img}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="150px"
                  quality={100}
                  className="object-cover scale-105 blur-sm"
                />

                <Image
                  src={shuffledPhotos[activeIndex].img}
                  alt={shuffledPhotos[activeIndex].label}
                  fill
                  sizes="320px"
                  quality={100}
                  priority
                  onLoad={() => setLightboxLoaded(true)}
                  className={[
                    'object-cover transition-opacity duration-300',
                    lightboxLoaded ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                />

                <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-bold tracking-wider uppercase text-sm">
                    {shuffledPhotos[activeIndex].label}
                  </span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-lg leading-none"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ---------- TABLET / DESKTOP: Hex Grid ---------- */}
        <div
          className="hidden md:flex flex-col items-start relative z-10"
          style={{ paddingLeft: `${shift}px` }}
        >
          {pattern.map((count, rowIdx) => {
            if (cellIdx >= shuffledPhotos.length) return null;

            const isEven = rowIdx % 2 === 1;
            const actualCount = Math.min(
              count,
              shuffledPhotos.length - cellIdx,
            );
            const rowCells = [];

            for (let i = 0; i < actualCount; i++) {
              const data = shuffledPhotos[cellIdx];
              const isChanging = changingIndices.includes(cellIdx);

              rowCells.push(
                <div
                  key={cellIdx}
                  className="group relative cursor-pointer flex-shrink-0 bg-gray-300 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:z-20 shadow-xl"
                  style={{
                    width: `${W}px`,
                    height: `${H}px`,
                    margin: `0 ${GAP / 2}px`,
                    clipPath:
                      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  <div
                    className={`absolute inset-0 transition-all duration-[600ms] ease-in-out ${
                      isChanging
                        ? 'opacity-0 scale-90'
                        : 'opacity-100 scale-100'
                    }`}
                  >
                    <Image
                      key={data.img}
                      src={data.img}
                      alt={data.label}
                      fill
                      sizes="(max-width: 768px) 150px, 300px"
                      quality={100}
                      className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                    <span className="text-white font-bold tracking-wider uppercase text-sm">
                      {data.label}
                    </span>
                  </div>
                </div>,
              );
              cellIdx++;
            }

            return (
              <div
                key={rowIdx}
                className="flex flex-row"
                style={{
                  marginLeft: isEven ? `-${shift}px` : '0',
                  marginTop: rowIdx > 0 ? `-${overlap}px` : '0',
                }}
              >
                {rowCells}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
      `}</style>
    </section>
  );
};

export default PhotosCard;
