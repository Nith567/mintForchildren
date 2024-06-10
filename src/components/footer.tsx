import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[--blue] text-white py-[3.5rem] gap-[2rem]">
      <p>The Creators x Base</p>
      <Image height={40} width={40} alt="The Creators" src="/thecreators.svg" />
    </footer>
  );
}

export default Footer;
