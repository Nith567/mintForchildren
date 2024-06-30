import { britney } from "@/app/fonts";
import React from "react";

function Border() {
  return (
    <section className="text-xs lg:text-2xl bg-[--blue] text-[#2a71ff] flex flex-col py-10">
      <div
        className={`${britney.className} tracking-[0.2rem] rotate-3 relative top-3 lg:top-4 whitespace-nowrap font-bold`}
      >
        FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR
        tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe
        cHiLdReN
      </div>

      <div
        className={`${britney.className} tracking-[0.2rem] -rotate-[2.9deg] whitespace-nowrap font-bold`}
      >
        FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR
        tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe cHiLdReN FoR tHe
        cHiLdReN
      </div>
    </section>
  );
}

export default Border;
