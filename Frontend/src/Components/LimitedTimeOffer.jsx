import React, { useEffect, useState } from 'react';

const LimitedTimeOffer = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // Example: 1 hour (3600 seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#567594] text-white px-4 py-4 rounded-xl text-center shadow-lg mt-10">
      <h3 className="font-bold text-lg font-roboto">Limited Time Offer!</h3>
      <h6 className="text-sm text-white font-roboto">ENDS SOON!</h6>
      <div className="flex justify-center items-center mt-3">
        <div className="bg-white w-10 h-14 flex items-center justify-center rounded-full text-center mr-2 text-xl text-black font-bold font-roboto">
          {formatTime(timeLeft)[0]}
        </div>
        <div className="bg-white w-10 h-14 flex items-center justify-center rounded-full text-center mr-2 text-xl text-black font-bold font-roboto">
          {formatTime(timeLeft)[1]}
        </div>
        <span className="ml-2 mr-4 text-4xl font-bold">:</span>
        <div className="bg-white w-10 h-14 flex items-center justify-center rounded-full text-center mr-2 text-xl text-black font-bold font-roboto">
          {formatTime(timeLeft)[3]}
        </div>
        <div className="bg-white w-10 h-14 flex items-center justify-center rounded-full text-center mr-2 text-xl text-black font-bold font-roboto">
          {formatTime(timeLeft)[4]}
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffer;
