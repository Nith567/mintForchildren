import React from "react";
import Image from "next/image";

import doge from "../../public/mints/doge.png";
import guild_card from "../../public/mints/guild.png";
import zorb from "../../public/mints/zorb.png";

import abante from "../../public/sponsors/abante.png";
import base from "../../public/sponsors/Base_Wordmark_White.png";
import biconomy from "../../public/sponsors/biconomy_logo.png";
import colinks from "../../public/sponsors/colinks-logo-white.png";
import coordinape from "../../public/sponsors/Coordinape_White_Wordmark.png";
import financial_charity_army from "../../public/sponsors/financial charit army.png";
import guild from "../../public/sponsors/guildlogo.png";
import jasmine from "../../public/sponsors/jasmine_castel_keeper.png";
import looperlands from "../../public/sponsors/looperlands.png";
import looper_exchange from "../../public/sponsors/loopexchange.png";
import loopring from "../../public/sponsors/loopring.png";
import oa from "../../public/sponsors/oa.png";
import onchain from "../../public/sponsors/onchain.png";
import onchain_summer from "../../public/sponsors/onchain_summer.png";
import own_the_dog from "../../public/sponsors/own_the_dog_logo.png";
import pgtype from "../../public/sponsors/pgtype-logo-oneColour-rgb.png";
import squog from "../../public/sponsors/squoge.png";
import stonks from "../../public/sponsors/stonks.png";
import taiko from "../../public/sponsors/taiko.png";
import creators from "../../public/sponsors/thecreators.png";
import Link from "next/link";

const sponsors = [
  abante,
  base,
  biconomy,
  colinks,
  coordinape,
  financial_charity_army,
  guild,
  jasmine,
  looperlands,
  looper_exchange,
  loopring,
  oa,
  onchain,
  onchain_summer,
  own_the_dog,
  pgtype,
  squog,
  stonks,
  taiko,
  creators,
];

function PhaseTwo() {
  return (
    <section className="flex flex-col items-center py-20 gap-5">
      <div className="flex flex-row text-sm lg:text-base items-center gap-7">
        <p className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2">
          PHASE TWO
        </p>
        <p>Jun 25 - Jul 20</p>
      </div>

      <p className="text-[35px] lg:text-[80px] font-semibold">
        Sponsored Events
      </p>

      <div className="flex text-center flex-col lg:flex-row items-center lg:items-start gap-12 py-5">
        <div className="flex flex-col items-center gap-2 w-[90vw] lg:w-[450px]">
          <p className="text-[25px] lg:text-[40px] font-semibold">
            Limited Editions{" "}
          </p>
          <p className="text-xs lg:text-base">
            Limited edition or exclusive items available from participating
            artists and donors.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 w-[450px]">
          <p className="text-[25px] lg:text-[40px] font-semibold">Auctions </p>
          <p className="text-xs lg:text-base">
            Holding auctions at the Shaolin Art Center
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-10 justify-between">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="h-[70px] w-auto flex-col flex items-center justify-center"
          >
            <Image
              src={sponsor}
              alt="Sponsors"
              className="max-w-[70px] md:max-w-[160px] h-auto"
            />
          </div>
        ))}
      </div>

      <div className="flex pt-16 flex-col lg:flex-row gap-8 items-center">
        <div className="flex flex-col gap-7 items-center text-center lg:text-left lg:items-start w-[90vw] lg:w-[500px]">
          <p className="text-[25px] lg:text-[40px] font-semibold">
            Become a sponsor
          </p>
          <p className="text-xs lg:text-base">
            Interested in helping us? Your brand or name can appear in the
            documentary, on merch or at the events in Shaolin Art Center
          </p>
          <Link
            href="https://app.deform.cc/form/8bfa649c-8f6f-4c2c-a854-8e14fb0f3fef/"
            className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2"
          >
            Fill out a form
          </Link>
        </div>
        <div className="relative">
          <Image
            src={doge}
            alt="Mints"
            height={175}
            width={175}
            className="absolute z-[300] top-16 right-16 lg:top-20 lg:right-24 rounded-[24px]"
          />
          <Image
            src={zorb}
            height={175}
            width={175}
            alt="Mints"
            className="absolute z-[250] top-24 left-14 lg:top-32 lg:left-20 rounded-[24px]"
          />
          <Image
            src={guild_card}
            height={175}
            width={175}
            alt="Mints"
            className="absolute z-[225] bottom-14 right-12 lg:top-44 lg:right-16 rounded-[24px]"
          />
          <Cloud />
        </div>
      </div>
    </section>
  );
}

function Cloud() {
  return (
    <>
      <div className="lg:hidden block">
        <svg
          width="350"
          height="350"
          viewBox="0 0 437 437"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M387.593 148.439C417.596 85.2802 351.72 19.2954 288.561 49.4071C265.081 -16.469 171.919 -16.469 148.439 49.4071C85.2802 19.4041 19.2954 85.2802 49.4071 148.439C-16.469 171.919 -16.469 265.081 49.4071 288.561C19.4041 351.72 85.2802 417.705 148.439 387.593C171.919 453.469 265.081 453.469 288.561 387.593C351.72 417.596 417.705 351.72 387.593 288.561C453.469 265.081 453.469 171.811 387.593 148.439Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="lg:block hidden">
        <svg
          width="437"
          height="437"
          viewBox="0 0 437 437"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M387.593 148.439C417.596 85.2802 351.72 19.2954 288.561 49.4071C265.081 -16.469 171.919 -16.469 148.439 49.4071C85.2802 19.4041 19.2954 85.2802 49.4071 148.439C-16.469 171.919 -16.469 265.081 49.4071 288.561C19.4041 351.72 85.2802 417.705 148.439 387.593C171.919 453.469 265.081 453.469 288.561 387.593C351.72 417.596 417.705 351.72 387.593 288.561C453.469 265.081 453.469 171.811 387.593 148.439Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
}

export default PhaseTwo;
