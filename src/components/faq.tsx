import Link from "next/link";
import React from "react";
import Image from "next/image";
import sponsors from "../../public/sponsors.png";

function FAQ() {
  return (
    <section className="flex flex-col bg-[--blue] text-white">
      <div className="flex md:flex-row flex-col py-16">
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <h2 className="text-[1.1rem] md:text-[1.5rem] mb-8">
            For The Children 2024
          </h2>
          <p className="text-xs md:text-sm">
            In 2023, we brought food, pencils, bookbags, notebooks, and
            entertainment to over 1000 children in the Dominican Republic. We
            helped rebuild the local church, giving the children a place of
            faith and community.
            <br />
            <br />
            From June 10-17th 2024, we are funding another trip to the Dominican
            Republic. We are unveiling the new Shaolin Art Center, curated by
            the Shaolin Financial Charity Army, a collaboration between members
            of Wu-Tang Clan, Jasmine's Army, & TheCreators. Minting art from
            participating artists will raise funds for the trip & supplies we
            will deliver to children in need. You can also donate ETH directly
            to the cause.
          </p>
        </div>
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <h2 className="text-[1.1rem] md:text-[1.5rem] mb-8">
            Curating the Shaolin Art Center
          </h2>
          <p className="text-xs md:text-sm">
            The Shaolin Art Center is an underground community-owned artspace
            dedicated to the culture, music, and art of the hiphop movement. To
            celebrate our inaugural collection & raise awareness for the
            charity, all participating artists will be donating a portion of
            their mints to the cause.
            <br />
            <br />
            With unique art available be minted for 7 days, it's a great way to
            support a worthy cause and independent artists at the same time.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col py-16">
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <h2 className="text-[1.1rem] md:text-[1.5rem] mb-8">
            What's next for the Shaolin Art Center?
          </h2>
          <p className="text-xs md:text-sm">
            At the end of this week, we will have selected our first official
            Curator. We will be in talks with leaders among the community who
            participate in this event and show true dedication to the culture,
            the music, and the message behind it.
            <br />
            <br />
            That curator will then be in charge of curating the next collection,
            events, & guests, with the full support of The Creators art & tech
            collective.
          </p>
        </div>
        <div className="py-[1.9rem] flex-[50%] px-[1.5rem] md:px-[5rem]">
          <Image src={sponsors} alt="Sponsors" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
