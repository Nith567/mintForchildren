import FAQ from "@/components/faq";
import FeaturedMints from "@/components/featuredmints";
import Hero from "@/components/hero";
import MintCountDown from "@/components/mintcountdown";
import Mints from "@/components/mints";
import Connect from "@/components/wallet";

export default function Home() {
  return (
    <>
      <Connect />
      <Hero />
      <MintCountDown />
      <FeaturedMints />
      <Mints />
      {/* <FAQ /> */}
    </>
  );
}
