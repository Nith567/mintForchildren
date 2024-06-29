import Link from "next/link";
import React from "react";
import Image from "next/image";
import shaolin from "../../public/og.jpg";
import faq_1_1 from "../../public/faq/1_1.png";
import faq_1_2 from "../../public/faq/1_2.png";
import faq_2_1 from "../../public/faq/2_1.png";
import faq_3_1 from "../../public/faq/3_1.png";
import faq_3_2 from "../../public/faq/3_2.png";

// import sponsors from "../../public/sponsors.png";
import financial_charity_army from "../../public/faq/financial_charit_army.png";

function FAQ() {
  return (
    <section className="flex flex-col py-20 gap-20 bg-[--blue] text-white">
      <div className="flex flex-col gap-5 lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start lg:w-[500px] gap-12">
          <p className="text-[55px] lg:text-left text-center lg:text-[70px] font-semibold leading-[1.2]">
            Why for the children?
          </p>
          <p className="text-xl">
            We're an onchain charity helping
            <br /> kids in the Dominican Republic
          </p>
          <Image
            src={financial_charity_army}
            alt="Sponsors"
            className="h-[45px] w-auto"
          />
        </div>

        <div className="flex flex-col items-end gap-2.5">
          <div className="flex flex-row gap-2.5">
            <Image
              src={faq_1_1}
              alt="Sponsors"
              className="h-[150px] w-auto border-b-[3px] border-r-[3px] border-solid rounded-[24px]"
            />
            <Image
              src={faq_1_2}
              alt="Sponsors"
              className="h-[150px] w-auto border-b-[3px] border-r-[3px] border-solid rounded-[24px]"
            />
          </div>
          <div>
            <Image
              src={faq_2_1}
              alt="Sponsors"
              className="h-[150px] w-auto border-b-[3px] border-r-[3px] border-solid rounded-[24px]"
            />
          </div>
          <div className="flex flex-row gap-2.5">
            <Image
              src={faq_3_1}
              alt="Sponsors"
              className="h-[150px] w-auto border-b-[3px] border-r-[3px] border-solid rounded-[24px]"
            />
            <Image
              src={faq_3_2}
              alt="Sponsors"
              className="h-[150px] w-auto border-b-[3px] border-r-[3px] border-solid rounded-[24px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[30px]">
          <p className="w-[90%] lg:w-[380px]">
            We have unveiled the new Shaolin Art Center, curated by the Shaolin
            Financial Charity Army, a collaboration between members of Wu-Tang
            Clan, Jasmine's Army, & TheCreators.
          </p>
          <p className="w-[90%] lg:w-[380px]">
            Minting art from participating artists will raise funds for the trip
            & supplies we will deliver to children in need. You can also donate
            ETH directly to the cause.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[30px]">
          <Image
            src={shaolin}
            alt="shaolin art center"
            className="w-[90%] lg:w-[380px] rounded-[24px] border-b-4 border-r-4 border-solid border-white"
          />
          <p className="w-[90%] lg:w-[380px]">
            The Shaolin Art Center is an underground community-owned artspace
            dedicated to the culture, music, and art of the hiphop movement. To
            celebrate our inaugural collection & raise awareness for the
            charity, all participating artists will be donating a portion of
            their mints to the cause.
            <br /> <br />
            With unique art available be minted for 7 days, it's a great way to
            support a worthy cause and independent artists at the same time.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[30px]">
          <p className="w-[90%] lg:w-[380px]">
            At the end of this week, we will have selected our first official
            Curator. We will be in talks with leaders among the community who
            participate in this event and show true dedication to the culture,
            the music, and the message behind it.
          </p>
          <p className="w-[90%] lg:w-[380px]">
            That curator will then be in charge of curating the next collection,
            events, & guests, with the full support of The Creators art & tech
            collective.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <p className="font-semibold text-[20px] lg:text-[40px] w-[90%] lg:w-auto">
          What's next for the Shaolin Art Center?
        </p>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[30px]">
            <p className="w-[90%] lg:w-[380px]">
              At the end of this week, we will have selected our first official
              Curator. We will be in talks with leaders among the community who
              participate in this event and show true dedication to the culture,
              the music, and the message behind it.
            </p>
            <p className="w-[90%] lg:w-[380px]">
              That curator will then be in charge of curating the next
              collection, events, & guests, with the full support of The
              Creators art & tech collective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
