import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EVENT_DATE = new Date('2025-11-15T09:00:00').getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 bg-void/50 backdrop-blur-lg p-6 rounded-2xl border border-cyber/20"
    >
      <h3 className="text-2xl font-bold mb-4 text-center text-cyber">
        Event Starts In
      </h3>
      <div className="flex justify-center gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </motion.div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold bg-cyber text-galaxy px-4 py-2 rounded-lg">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="mt-2 text-sm text-gray-400">{label}</div>
  </div>
);

export default CountdownTimer;