"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

function PhaseOne() {
  const counterRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const donatedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = 40;
          const duration = 1000;
          const range = end - start;
          const increment = range / (duration / 10);
          let current = start;
          const stepTime = 10;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            if (donatedRef.current) {
              donatedRef.current.textContent = (current * 0.125)
                .toString()
                .slice(0, 3);
            }
            if (counterRef.current) {
              counterRef.current.textContent = Math.floor(current).toString();
            }
          }, stepTime);

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center py-20 gap-5"
    >
      <div className="flex flex-row text-sm lg:text-base items-center gap-7">
        <p className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2">
          PHASE ONE
        </p>
        <p>June 1, 2024</p>
      </div>

      <p className="text-[35px] lg:text-[80px] font-semibold">
        Shaolin Art Center
      </p>

      <div className="flex flex-row items-start gap-2 lg:gap-12 py-5">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[35px] lg:text-[80px] font-semibold">
            $<span ref={donatedRef}>0</span>k+
          </p>
          <p className="text-xs lg:text-lg text-center">
            Donated within the first 2 weeks
          </p>
        </div>
        <Image
          src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
          alt="shield"
          height={76}
          width={76}
          className="relative lg:block hidden -top-2"
        />
        <Image
          src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
          alt="shield"
          height={37}
          width={37}
          className="relative lg:hidden block -top-2"
        />
        <div className="flex flex-col items-center gap-2">
          <p className="text-[35px] lg:text-[80px] font-semibold">
            <span ref={counterRef}>0</span>+
          </p>
          <p className="text-xs lg:text-lg text-center">
            Artists contributed onchain art
          </p>
        </div>
      </div>

      <p className="text-center text-[0.6rem] lg:text-xs text-white/60">
        All proceedings from art & sponsors go to enabling our mission to feed
        children, distribute school supplies & build a church in the dominican
        republic
      </p>
    </section>
  );
}

export default PhaseOne;
