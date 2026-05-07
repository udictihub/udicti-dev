import React from 'react';

interface CalendarCardProps {
  month: string;
  day: string | number;
  title: string;
  description: string;
  time?: string;
  isCompleted?: boolean;
}

const CalendarCard: React.FC<CalendarCardProps> = ({
  month,
  day,
  title,
  description,
  time,
  isCompleted = false,
}) => {
  return (
    <div
      className={`flex relative shadow-md rounded-xl overflow-hidden border-2 max-w-md transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 ${
        isCompleted
          ? 'border-[#0d7b53] shadow-green-100/50'
          : 'border-gray-200 bg-white'
      }`}
    >
      {/* Date Section */}
      <div
        className={`flex flex-col items-center justify-center text-white px-6 py-4 min-w-[110px] ${
          isCompleted ? 'bg-[#12BE80]' : 'bg-[#0864AF]'
        }`}
      >
        <span className="text-sm font-semibold uppercase tracking-wider">
          {month}
        </span>
        <span className="text-3xl font-black">{day}</span>
      </div>

      {/* Details Section */}
      <div
        className={`p-5 flex flex-col justify-center border-l-2 w-full ${
          isCompleted
            ? 'bg-green-50/50 border-green-200'
            : 'bg-white border-gray-200'
        }`}
      >
        {isCompleted && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm z-10 flex items-center gap-1">
            Done
          </div>
        )}
        <h3
          className={`text-xl font-bold pr-14 ${isCompleted ? 'text-green-900' : 'text-gray-900'}`}
        >
          {title}
        </h3>
        {time && (
          <span
            className={`text-sm font-bold mb-2 mt-1 ${
              isCompleted ? 'text-green-700' : 'text-[#0864AF]'
            }`}
          >
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
