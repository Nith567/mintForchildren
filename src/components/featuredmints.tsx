import React from "react";
import Image from "next/image";
import featuredMint from "../../public/featuredmints.png";
import { britney } from "@/app/fonts";

function FeaturedMints() {
  return (
    <section className="min-h-screen p-[3vw] lg:p-[7vw] py-20 flex flex-col items-center justify-center gap-16 bg-[--blue] text-white">
      <p className="text-center text-xl">
        Featured mints from selected artists.
        <br />
        All funds go towards children.
      </p>
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-14">
        <MagnetBackground />
        <Image
          src={featuredMint}
          alt="Featured Mints"
          className="rounded-xl z-[200] w-[90%] h-auto lg:w-[500px] lg:h-[500px] border-solid border-b-4 border-r-4 border-white"
        />
        <div className="flex flex-col gap-4 items-center lg:items-start w-[90%] lg:w-[400px] lg:text-left text-center">
          <p className="text-2xl md:text-[65px] leading-none">
            F<span className={britney.className}>o</span>R{" "}
            <span className={britney.className}>t</span>H
            <span className={britney.className}>e</span>{" "}
            <span className={britney.className}>c</span>H
            <span className={britney.className}>i</span>L
            <span className={britney.className}>d</span>R
            <span className={britney.className}>e</span>N
          </p>
          <p>
            Feeding children, one mint at a time. Each mint goes to paying for
            pencils, bookbags, rulers, erasers, food, clothing, materials, and
            staff to enable our giving in the Dominican Republic.
          </p>

          <div className="flex flex-row items-center gap-4 my-2">
            <button className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2">
              Mint to support
            </button>
            <button>View on zora</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MagnetBackground() {
  return (
    <div className="absolute z-[100] -top-[130px] left-[100px]">
      <svg
        width="750"
        height="750"
        viewBox="0 0 915 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M836.363 242.342C727.157 53.2305 544.999 -45.9129 429.303 20.7795C394.617 40.6977 370.001 73.3725 355.232 114.328C263.929 42.4881 163.674 17.8701 90.2736 60.3921C-25.4217 127.085 -30.5687 334.547 78.6369 523.658C187.843 712.769 370.001 811.913 485.697 745.22C520.383 725.302 544.999 692.627 559.768 651.672C651.072 723.512 751.326 748.13 824.726 705.608C940.422 638.915 945.569 431.453 836.363 242.342Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default FeaturedMints;
