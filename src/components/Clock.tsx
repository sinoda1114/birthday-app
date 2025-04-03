'use client';

import { useState, useEffect } from 'react';
import { getCurrentTimeInTimezone, getCurrentDateInTimezone, getDayOfWeekInTimezone } from '@/utils/timeUtils';
import { Timezone } from '@/schemas/timezoneSchema';
import { motion } from 'framer-motion';

interface ClockProps {
  timezone: Timezone;
  label: string;
}

const Clock: React.FC<ClockProps> = ({ timezone, label }) => {
  const [mounted, setMounted] = useState(false);
  const [timeData, setTimeData] = useState({
    time: '',
    date: '',
    dayOfWeek: ''
  });

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      setTimeData({
        time: getCurrentTimeInTimezone(timezone),
        date: getCurrentDateInTimezone(timezone),
        dayOfWeek: getDayOfWeekInTimezone(timezone)
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="clock-container relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 shadow-xl backdrop-blur-sm border border-blue-500/20"
    >
      {/* 装飾的な要素 */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('/meridian-lines.png')] opacity-10 bg-cover" />
      
      <div className="relative">
        <h2 className="text-xl font-bold mb-6 text-center text-blue-200 tracking-widest">
          {label}
        </h2>
        
        <motion.div 
          key={timeData.time}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <div className="time text-7xl font-mono text-center font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 text-transparent bg-clip-text tracking-wider">
            {timeData.time}
          </div>
          
          <div className="date-info text-center mt-8 space-y-2">
            <div className="date text-lg text-blue-200/90">{timeData.date}</div>
            <div className="day-of-week text-lg text-blue-300/70">（{timeData.dayOfWeek}）</div>
          </div>
        </motion.div>

        {/* 装飾的な円形の時計マーカー */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full" />
        <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full" />
      </div>
    </motion.div>
  );
};

export default Clock; 