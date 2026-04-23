'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { archivePhotos } from '@/data/photos';

const breakpoints = [
  { maxWidth: 640, hexW: 130, pattern: [1, 2], repeat: true }, // Mobile
  { maxWidth: 1024, hexW: 280, pattern: [2, 3, 2], repeat: false }, // Tablet
  { maxWidth: Infinity, hexW: 280, pattern: [3, 4, 3], repeat: false }, // Desktop
];

const PhotosCard = () => {
  const [config, setConfig] = useState(breakpoints[2]);
  const [shuffledPhotos, setShuffledPhotos] = useState(archivePhotos);

  // Track ONLY the specific cells that are currently swapping
  const [changingIndices, setChangingIndices] = useState<number[]>([]);

  // Smooth Pair-Swapping Effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate how many cells are actually visible on screen
      const visibleCount = config.pattern.reduce((a, b) => a + b, 0);

      // 1. Pick a random photo that is currently visible
      const idx1 = Math.floor(
        Math.random() * Math.min(archivePhotos.length, visibleCount),
      );

      // 2. Pick a second different random photo to swap with
      let idx2 = Math.floor(Math.random() * archivePhotos.length);
      while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * archivePhotos.length);
      }

      // Step A: Trigger Fade Out ONLY for these two specific indices
      setChangingIndices([idx1, idx2]);

      // Step B: Wait for them to fade out, swap them, then fade back in
      setTimeout(() => {
        setShuffledPhotos((prev) => {
          const newArr = [...prev];
          // Swap the two photos
          [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]];
          return newArr;
        });

        // Trigger Fade In
        setChangingIndices([]);
      }, 800); // 800ms gives time for the fade-out CSS transition to finish completely
    }, 4500); // Trigger a swap every 4.5 seconds

    return () => clearInterval(interval);
  }, [config.pattern]);

  // Window Resize effect
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
      className="py-24 flex flex-col items-center justify-center overflow-hidden bg-gray-200"
    >
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

      <div
        className="flex flex-col items-start relative z-10"
        style={{ paddingLeft: `${shift}px` }}
      >
        {pattern.map((count, rowIdx) => {
          if (cellIdx >= shuffledPhotos.length) return null;

          const isEven = rowIdx % 2 === 1;
          const actualCount = Math.min(count, shuffledPhotos.length - cellIdx);
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
                  className={`absolute inset-0 transition-all duration-[800ms] ease-in-out ${
                    isChanging ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
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
    </section>
  );
};

export default PhotosCard;
