import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/footer";
import Head from "next/head";
import { Providers } from "./providers";
const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BASED",
  applicationName: "BASED",
  generator: "Next.js",
  keywords: [
    "memetic, memes, based, onchain, nft, nfts, mint, mints, open edition, digital, art, blockchain, crypto, web3",
  ],

  description:
    "The digital world is memetic. Join us for 48 hours of Open Edition mints with the most based onchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body className={ibm.className}>
          <div className="lg:hidden block">
            <Image
              src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
              alt="shield"
              height={140}
              width={140}
              className="fixed top-6 left-6 z-[2000]"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
              alt="shield"
              height={205}
              width={205}
              className="fixed top-6 left-6 z-[2000]"
            />
          </div>
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
