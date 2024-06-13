"use client";

import { britney } from "@/app/fonts";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function MintCountDown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft | null {
    // June 17, 12:00 AM PST (7:00 AM UTC)
    const targetDate = new Date("2024-06-17T07:00:00Z");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div
      className={`${britney.className} w-full bg-white text-[--blue] text-center text-2xl md:text-[65px] leading-none px-8 py-10`}
    >
      {timeLeft ? (
        <>
          {timeLeft.days} days {formatTime(timeLeft.hours)}:
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </>
      ) : (
        "mint ended"
      )}
    </div>
  );
}

export default MintCountDown;
