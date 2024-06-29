"use client";

import React, { useEffect, useRef } from "react";
import { useAccount, useSwitchAccount } from "wagmi";
import { base } from "wagmi/chains";
import { mintData, mintToSupport } from "@/utils/mints";
import { getAccount } from "@wagmi/core";
import { Address, encodeAbiParameters, http, parseEther } from "viem";
import { writeContract } from "@wagmi/core";
import { zoraMintAbi } from "@/utils/abi";
import { mintReferral, config, minterAddress } from "@/wagmi";
import { switchChain } from "viem/actions";
import Image from "next/image";
import featuredMint from "../../public/featuredmints.png";
import { britney } from "@/app/fonts";
import Link from "next/link";

function Mints() {
  const [displayDialog, setDisplayDialog] = React.useState<boolean>(false);
  const [displayOldMints, setDisplayOldMints] = React.useState<boolean>(false);
  const containerRefs = useRef<HTMLDivElement[]>([]);
  const specialMintRef = useRef<HTMLImageElement>(null);
  const containerRefsNew = useRef<HTMLImageElement[]>([]);
  const account = useAccount();
  const [comment, setComment] = React.useState<string>("");
  const [transaction, setTransaction] = React.useState<{
    token: number;
    contractAddress: `0x${string}`;
    mintFee: number;
  } | null>(null);
  const [displayCustom, setDisplayCustom] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<number>(0);

  // To close dialog box when user hit Escape
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape") {
        setDisplayDialog(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Disable scroll when dialog is open
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (displayDialog) {
      htmlElement.style.overflowY = "hidden";
      htmlElement.style.height = "100%";
    } else {
      htmlElement.style.overflowY = "auto";
      htmlElement.style.height = "auto";
      setInput(0);
      setTransaction(null);
      setComment("");
      setDisplayCustom(false);
    }

    return () => {
      htmlElement.style.overflowY = "auto";
      htmlElement.style.height = "auto";
    };
  }, [displayDialog]);

  // Mint function
  async function handleMint() {
    const account = getAccount(config);
    account.chain = base;
    const { connector } = getAccount(config);
    if (connector?.switchChain) {
      await connector?.switchChain({ chainId: base.id });
    }
    if (!transaction) return;
    try {
      const minterArguments = encodeAbiParameters(
        [
          { name: "mintTo", type: "address" },
          { name: "comment", type: "string" },
        ],
        [account.address as Address, comment]
      );

      const mintFeeInEth = parseEther(transaction.mintFee.toString());
      const result = await writeContract(config, {
        abi: zoraMintAbi,
        address: transaction.contractAddress,
        functionName: "mintWithRewards",
        args: [
          minterAddress,
          transaction.token,
          input,
          minterArguments,
          mintReferral,
        ],
        value: BigInt(input) * mintFeeInEth,
        chainId: base.id,
        chain: base,
      });
      console.log(result);
    } catch (e) {
      console.log("declined", e);
    }
  }

  function handleClickMintCard(
    token: number,
    contractAddress: `0x${string}`,
    mintFee: number
  ) {
    setTransaction({ token, contractAddress, mintFee });
    setDisplayDialog(true);
  }

  function handle3DHover(el: HTMLImageElement | HTMLDivElement | null) {
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const xVal = e.clientX - rect.left;
      const yVal = e.clientY - rect.top;

      const height = el.clientHeight;
      const width = el.clientWidth;

      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);

      const transformString = `perspective(500px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      el.style.transform = transformString;
    };

    const resetTransform = () => {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseout", resetTransform);
    el.addEventListener("mousedown", () => {
      el.style.transform =
        "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    });
    el.addEventListener("mouseup", () => {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseout", resetTransform);
      el.removeEventListener("mousedown", () => {
        el.style.transform =
          "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
      });
      el.removeEventListener("mouseup", () => {
        el.style.transform =
          "perspective(500px) scale(1) rotateX(0) rotateY(0)";
      });
    };
  }

  useEffect(() => {
    containerRefsNew.current.forEach(handle3DHover);
  }, [mintToSupport]);

  useEffect(() => {
    containerRefs.current.forEach(handle3DHover);
  }, [mintData]);

  useEffect(() => {
    specialMintRef.current && handle3DHover(specialMintRef.current);
  }, []);

  return (
    <section
      id="art"
      className="p-[3vw] lg:p-[7vw] flex flex-col items-center bg-[--blue] text-white"
    >
      {/*********************** DIALOG BOX *********************************/}
      {displayDialog && (
        <div
          onClick={() => setDisplayDialog(false)}
          className="h-screen w-screen flex items-center justify-center bg-black/80 fixed top-0 left-0 z-[5000]"
        >
          <div
            className="bg-white p-6 w-[90vw] lg:w-[400px] rounded-lg text-black flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-row gap-2 justify-between items-center">
              <p className="font-semibold text-black">Mint</p>
              <button
                onClick={() => setDisplayDialog(false)}
                className="select-none rounded-full hover:bg-red-100 text-black w-5 h-5 text-base flex items-center justify-center leading-0 p-0"
              >
                &times;
              </button>
            </div>
            <textarea
              rows={3}
              className="w-full p-2 rounded-md resize-none border border-black/30"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex flex-row items-center justify-between gap-2 px-2">
              <button
                onClick={() => setInput(1)}
                className={`${input === 1 && !displayCustom && "bg-black text-white"} p-1 w-full flex items-center justify-center rounded-full`}
              >
                1
              </button>
              <button
                onClick={() => setInput(3)}
                className={`${input === 3 && !displayCustom && "bg-black text-white"} p-1 w-full flex items-center justify-center rounded-full`}
              >
                3
              </button>
              <button
                onClick={() => setInput(11)}
                className={`${input === 11 && !displayCustom && "bg-black text-white"} p-1 w-full flex items-center justify-center rounded-full`}
              >
                11
              </button>
              <button
                onClick={() => setInput(111)}
                className={`${input === 111 && !displayCustom && "bg-black text-white"} p-1 w-full flex items-center justify-center rounded-full`}
              >
                111
              </button>
              <button
                onClick={() => setDisplayCustom(true)}
                className="flex px-3 py-1 w-full rounded-md"
              >
                custom
              </button>
            </div>
            {displayCustom && (
              <div className="flex flex-row items-center gap-2 border-t border-neutral-300 pt-4">
                <button
                  onClick={() => setInput((prev) => Math.max(0, prev - 1))}
                  className="w-9 h-9 font-bold text-lg rounded-full border border-neutral-500 bg-white hover:bg-neutral-100"
                >
                  -
                </button>
                <p className="flex-[70%] h-9 flex items-center justify-center rounded-full text-center border border-neutral-500">
                  {input}
                </p>
                <button
                  onClick={() => setInput((prev) => prev + 1)}
                  className="w-9 h-9 font-bold text-lg rounded-full border border-neutral-500 bg-white hover:bg-neutral-100"
                >
                  +
                </button>
              </div>
            )}
            <button
              className="rounded-lg bg-black text-white hover:opacity-90 text-center py-3"
              disabled={input === 0}
              onClick={handleMint}
            >
              Mint
            </button>
          </div>
        </div>
      )}

      <div className="min-h-screen p-[3vw] lg:p-[7vw] py-20 flex flex-col items-center justify-center gap-16 bg-[--blue] text-white">
        <p className="text-center text-xl">
          Featured mints from selected artists.
          <br />
          All funds go towards children.
        </p>
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-14">
          <MagnetBackground />
          <Image
            src={featuredMint}
            alt="Featured Mints"
            ref={specialMintRef}
            className="rounded-xl z-[200] w-[90%] h-auto lg:w-[500px] lg:h-[500px] border-solid border-b-4 border-r-4 border-white"
          />
          <div className="relative z-[300] flex flex-col gap-4 items-center lg:items-start w-[90%] lg:w-[400px] lg:text-left text-center">
            <p
              className={`${britney.className} text-2xl md:text-[65px] leading-none`}
            >
              FoR tHe cHiLdReN
            </p>
            <p>
              Feeding children, one mint at a time. Each mint goes to paying for
              pencils, bookbags, rulers, erasers, food, clothing, materials, and
              staff to enable our giving in the Dominican Republic.
            </p>

            <div className="flex flex-row items-center gap-4 my-2">
              <button
                disabled={account.address === undefined}
                onClick={() =>
                  handleClickMintCard(
                    1,
                    "0x2dc3209d13165db78b86529012ec73aef86d2449",
                    0.002277
                  )
                }
                className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2"
              >
                Mint to support
              </button>
              <Link
                href="https://zora.co/collect/base:0x2dc3209d13165db78b86529012ec73aef86d2449/1"
                target="_blank"
              >
                View on zora
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 w-[85vw] justify-between grid-cols-1">
        {mintToSupport.map((mint, index) => (
          <div key={index} className="flex items-center flex-col gap-4 mb-10">
            <img
              src={mint.img}
              alt={mint.title}
              style={{ transformStyle: "preserve-3d" }}
              ref={(el): any =>
                (containerRefsNew.current[index] = el as HTMLImageElement)
              }
              className="rounded-[24px] xl:h-[350px] h-[320px] block object-cover object-center border-solid border-b-4 border-r-4 border-white"
            />

            <div className="xl:w-[350px] w-[320px] flex flex-col gap-4 p-0.5 items-start">
              <p className="font-semibold text-3xl">
                {mint.title}
                <br />
                For The Children
              </p>
              <button
                disabled={account.address === undefined}
                // style={
                //   account.address === undefined
                //     ? { display: "none" }
                //     : { display: "flex" }
                // }
                onClick={() =>
                  handleClickMintCard(
                    mint.token,
                    mint.contractAddress,
                    mint.mintFee
                  )
                }
                className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2"
              >
                Mint to support
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={displayOldMints ? { display: "grid" } : { display: "none" }}
        className="lg:grid-cols-3 w-[85vw] justify-between grid-cols-1"
      >
        {mintData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-10 bg-[--blue] xl:min-h-[350px] min-h-[320px]"
          >
            <div
              ref={(ele): any =>
                (containerRefs.current[index] = ele as HTMLDivElement)
              }
              className="bg-[--blue] relative inline-block lg:h-[350px] h-[320px] overflow-hidden rounded-3xl"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt="cat image"
                  loading="lazy"
                  className="xl:w-[350px] xl:min-h-[350px] w-[320px] min-h-[320px] block object-cover rounded-3xl"
                />
              ) : (
                <video
                  src={item.video}
                  preload="auto"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  className="xl:w-[350px] xl:min-h-[350px] w-[320px] min-h-[320px] block object-cover rounded-3xl"
                ></video>
              )}
            </div>

            <div className="py-3 xl:w-[350px] w-[320px] mx-auto ">
              <button
                disabled={account.address === undefined}
                // style={
                //   account.address === undefined
                //     ? { display: "none" }
                //     : { display: "flex" }
                // }
                onClick={() =>
                  handleClickMintCard(
                    item.token,
                    item.contractAddress,
                    item.mintFee
                  )
                }
                className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2"
              >
                Mint to support
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setDisplayOldMints(!displayOldMints)}
        className="py-4 rounded-full w-[80vw] border border-solid border-white"
      >
        {displayOldMints ? "Hide" : "See"} earlier mints
      </button>
    </section>
  );
}

function MagnetBackground() {
  return (
    <div className="absolute z-[100] -top-[130px] left-[100px]">
      <svg
        width="750"
        height="750"
        viewBox="0 0 915 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M836.363 242.342C727.157 53.2305 544.999 -45.9129 429.303 20.7795C394.617 40.6977 370.001 73.3725 355.232 114.328C263.929 42.4881 163.674 17.8701 90.2736 60.3921C-25.4217 127.085 -30.5687 334.547 78.6369 523.658C187.843 712.769 370.001 811.913 485.697 745.22C520.383 725.302 544.999 692.627 559.768 651.672C651.072 723.512 751.326 748.13 824.726 705.608C940.422 638.915 945.569 431.453 836.363 242.342Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default Mints;
