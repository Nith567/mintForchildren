import { britney } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import design from "../../public/Brutalist.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="min-h-[50vh] w-full flex justify-between flex-row items-end bg-[--blue] text-white">
      <div>
        <Image
          src={design}
          alt="The Creators"
          className="h-[380px] md:h-[500px] w-auto"
        />
      </div>
      <div className="flex flex-col gap-16 md:gap-20 py-12 md:py-7 items-center">
        <div className="lg:hidden block">
          <Image
            src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
            alt="shield"
            height={76}
            width={76}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
            alt="shield"
            height={110}
            width={110}
          />
        </div>

        <h1
          className={`${britney.className} text-center leading-[1] text-white text-[40px] md:text-[100px]`}
        >
          FoR tHe
          <br />
          cHiLdReN
        </h1>

        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row items-center gap-2.5">
            <Link
              href="https://warpcast.com/~/channel/thecreators"
              target="_blank"
            >
              <Gate />
            </Link>
            <Link href="https://x.com/thecreatorsllc" target="_blank">
              <Twitter />
            </Link>
          </div>
          <p className="text-center flex flex-row gap-3 md:text-base text-xs">
            Created for Onchain Summer 2024
            <Image
              height={40}
              width={40}
              alt="The Creators"
              src="/thecreators.svg"
            />
          </p>
        </div>
      </div>
      <div className="scale-x-[-1]">
        <Image
          src={design}
          alt="The Creators"
          className="h-[380px] md:h-[500px] w-auto"
        />
      </div>
    </footer>
  );
}

function Twitter() {
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_17)">
        <path
          d="M18.5171 0H21.9518L14.4105 8.58667L23.2211 20.2347H16.307L10.8937 13.1563L4.69633 20.2347H1.26166L9.25099 11.0507L0.81366 0H7.89953L12.7902 6.46613L18.5171 0ZM17.315 18.2187H19.219L6.89899 1.94133H4.85313L17.315 18.2187Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_17">
          <rect
            width="22.4"
            height="20.2347"
            fill="white"
            transform="translate(0.895691)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function Gate() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.31317 0.155273H17.8776V19.4442H15.8865V10.6086H15.867C15.6469 8.16667 13.5946 6.25305 11.0954 6.25305C8.59616 6.25305 6.54387 8.16667 6.32382 10.6086H6.30428V19.4442H4.31317V0.155273Z"
        fill="white"
      />
      <path
        d="M0.704285 2.89305L1.51317 5.63083H2.19762V16.7064C1.85397 16.7064 1.5754 16.985 1.5754 17.3286V18.0753H1.45095C1.10731 18.0753 0.828729 18.3539 0.828729 18.6975V19.4442H7.79762V18.6975C7.79762 18.3539 7.51904 18.0753 7.1754 18.0753H7.05095V17.3286C7.05095 16.985 6.77237 16.7064 6.42873 16.7064H5.68206V2.89305H0.704285Z"
        fill="white"
      />
      <path
        d="M16.011 16.7064C15.6673 16.7064 15.3887 16.985 15.3887 17.3286V18.0753H15.2643C14.9206 18.0753 14.6421 18.3539 14.6421 18.6975V19.4442H21.611V18.6975C21.611 18.3539 21.3324 18.0753 20.9887 18.0753H20.8643V17.3286C20.8643 16.985 20.5857 16.7064 20.2421 16.7064V5.63083H20.9265L21.7354 2.89305H16.7576V16.7064H16.011Z"
        fill="white"
      />
    </svg>
  );
}

export default Footer;
