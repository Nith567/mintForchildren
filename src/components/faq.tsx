import Link from "next/link";
import React from "react";

function FAQ() {
  return (
    <section className="flex flex-col bg-[--blue] text-white">
      <div className="flex md:flex-row flex-col border-b border-neutral-300 py-16">
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <h2 className="text-[2rem] md:text-[2rem] mb-8">
            What is Be More BASED?
          </h2>
          <p className="text-[0.8rem] md:text-base">
            Be More BASED celebrates the works of several successful onchain
            artists, content creators, and builders.
            <br />
            <br />
            On May 15th, all artists will release their own unique works to be
            minted for 48 hours
            <br />
            <br />
            This drop is supported by The Creators and Base.
          </p>
        </div>
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <h2 className="text-[2rem] md:text-[2rem] mb-8">
            How much will it cost to mint?
          </h2>
          <p className="text-[0.8rem] md:text-base">
            Participating creators have priced their works at 0.0042069 ETH or
            FREE as Open Edition mints. There is no max allowance on minting
            totals.
            <br />
            <br />
            Mints will be supported on BASE/ETH, which can be bridged in advance
            using{" "}
            <Link
              className="underline"
              href="https://bridge.base.org/deposit"
              target="_blank"
            >
              Base Bridge
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col py-16">
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <h2 className="text-[2rem] md:text-[2rem] mb-8">
            BASE is now supported on The Creators
          </h2>
          <p className="text-[0.8rem] md:text-base">
            Creators on the The Creators platform can now utilize the BASE chain
            to create onchain.
          </p>
          <ul className="pl-[1.5rem] text-[0.8rem] md:text-base list-disc">
            <li>Deploy your own BASE contracts</li>
            <li>Mint tokens using Transient innovations</li>
            <li>Make your own on-demand BASE mint pages</li>
            <li>
              Use Transient&apos;s T.R.A.C.E. chips to add provenance to your
              physical works on BASE
            </li>
          </ul>
        </div>
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <p className="text-[0.8rem] md:text-base">
            Sign up here for access to Transient&apos;s no-code creator
            platform,
            <a href="https://lab.transientlabs.xyz/" target="_blank">
              The Lab
            </a>
            (currently in Beta), right now. We&apos;ll be extending more invites
            soon.
          </p>
          <p className="text-[0.8rem]">Sign Ups Closed</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
