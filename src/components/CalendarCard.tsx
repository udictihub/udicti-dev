import React from 'react';

interface CalendarCardProps {
  month: string;
  day: string | number;
  title: string;
  description: string;
  time?: string;
}

const CalendarCard: React.FC<CalendarCardProps> = ({
  month,
  day,
  title,
  description,
  time,
}) => {
  return (
    <div className="flex  bg-white shadow-md rounded-xl overflow-hidden border-2 border-gray-200 max-w-md transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
      {/* Date Section */}
      <div className="flex flex-col items-center justify-center bg-[#0864AF] text-white px-6 py-4 min-w-[110px]">
        <span className="text-sm font-semibold uppercase tracking-wider">
          {month}
        </span>
        <span className="text-3xl font-black">{day}</span>
      </div>

      {/* Details Section */}
      <div className="p-5 flex flex-col justify-center border-l-2 border-gray-200 w-full bg-white">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {time && (
          <span className="text-sm text-[#0864AF] font-bold mb-2 mt-1">
            {time}
          </span>
        )}
        <p className="text-gray-600 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CalendarCard;
