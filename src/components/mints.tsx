"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useAccount, useSwitchAccount } from "wagmi";
import { base} from "wagmi/chains";
import { mintData } from "@/utils/mints";
import { getAccount } from '@wagmi/core'
import { Address, encodeAbiParameters, http, parseEther } from "viem";
import { writeContract } from "@wagmi/core";
import { zoraMintAbi } from "@/utils/abi";
import { mintReferral, config, minterAddress } from "@/wagmi";
import { switchChain } from "viem/actions";
function Mints() {
  const [displayDialog, setDisplayDialog] = React.useState<boolean>(false);

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
    const { connector } =getAccount(config);
if (connector?.switchChain) {
 await connector?.switchChain({ chainId: base.id});
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
      console.log(result)
    } catch (e) {
      console.log("declined",e);
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

  return (
    <section id="art" className="p-[3vw] lg:p-[7vw] bg-[--blue]">
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 w-[90vw] lg:w-[40vw] mx-auto">
        {mintData.map((item, index) => (
          <div
            key={index}
            style={
              account.address === undefined
                ? { paddingBottom: "0" }
                : { paddingBottom: "1rem" }
            }
            className="flex flex-col items-start gap-4 mb-5 bg-white rounded-md overflow-hidden"
          >
            <div className="bg-white relative inline-block h-[50vh] w-full overflow-hidden ">
              {item.image ? (
                <img
                  src={item.image}
                  alt="cat image"
                  loading="lazy"
                  className="h-[50vh] w-full block object-cover transition-all duration-300 hover:scale-110"
                />
              ) : (
                <video
                  src={item.video}
                  preload="auto"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  className="h-[50vh] w-full block object-cover transition-all duration-300 hover:scale-110"
                ></video>
              )}
            </div>

            <button
              disabled={account.address === undefined}
              style={
                account.address === undefined
                  ? { display: "none" }
                  : { display: "flex" }
              }
              onClick={() =>
                handleClickMintCard(
                  item.token,
                  item.contractAddress,
                  item.mintFee
                )
              }
              className="flex-row items-center gap-3 cursor-pointer hover:bg-neutral-800 rounded-md text-sm px-3 py-2 mx-auto bg-black text-white"
            >
              <Image src="/sphere.png" alt="sphere" height={18} width={18} />
              <span>Mint</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mints;
