import Border from "@/components/border";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import MintCountDown from "@/components/mintcountdown";
import Mints from "@/components/mints";
import PhaseOne from "@/components/phase_one";
import PhaseTwo from "@/components/phase_two";
import Connect from "@/components/wallet";

export default function Home() {
  return (
    <>
      <Connect />
      <Hero />
      <MintCountDown />
      <Mints />
      <Border />
      <FAQ />
      <Border />
      <PhaseOne />
      <Border />
      <PhaseTwo />
    </>
  );
}
