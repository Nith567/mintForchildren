import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import MintCountDown from "@/components/mintcountdown";
import Mints from "@/components/mints";
import Connect from "@/components/wallet";

export default function Home() {
  return (
    <main>
      <Connect />
      <Hero />
      <MintCountDown />
      <Mints />
      <FAQ />
    </main>
  );
}
