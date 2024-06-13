"use client";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { base } from "wagmi/chains";
import { writeContract } from "@wagmi/core";
import { config } from "@/wagmi";
import { parseEther } from "viem";

const wagmiAbi = [
  {
    inputs: [],
    name: "sendFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

function Connect() {
  const { address } = useAccount();
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const [input, setInput] = useState<number>(0.01);
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

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
      setInput(0.01);
    }

    return () => {
      htmlElement.style.overflowY = "auto";
      htmlElement.style.height = "auto";
    };
  }, [displayDialog]);

  const sendFunds = async () => {
    const result = await writeContract(config, {
      abi: wagmiAbi,
      address: "0x8B212F3a582dFBF87da7ca7Dc51dB05f7d60b8Bb",
      functionName: "sendFunds",
      value: parseEther(`${input}`),
      chainId: base.id,
      chain: base,
    });
  };

  return (
    <>
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
              <p className="font-semibold text-black">Send ETH</p>
              <button
                onClick={() => setDisplayDialog(false)}
                className="select-none rounded-full hover:bg-red-100 text-black w-5 h-5 text-base flex items-center justify-center leading-0 p-0"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-row items-center gap-2 border-t border-neutral-300 pt-4">
              <input
                type="number"
                required={true}
                name="price"
                min={0}
                value={input}
                step={0.001}
                onChange={(e) => setInput(parseFloat(e.target.value))}
                className="w-full h-9 flex items-center justify-center rounded-full text-center border border-neutral-500"
              />
              <p>ETH</p>
            </div>

            <button
              className="rounded-lg bg-black text-white hover:opacity-90 text-center py-3"
              disabled={input === 0}
              onClick={sendFunds}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <div className="fixed bottom-10 left-10 z-[7000]">
        {address ? (
          <div className="flex items-start flex-col gap-3">
            <button
              onClick={() => setDisplayDialog(true)}
              className="bg-white text-black px-3 py-1.5 text-sm font-medium cursor-pointer transition duration-300 ease-in-out"
            >
              Send ETH
            </button>
            <p className="bg-white text-black px-3 py-1.5 text-sm font-medium cursor-pointer transition duration-300 ease-in-out">
              {`${address.slice(0, 4)}...${address.slice(address.length - 4, address.length)}`}
            </p>
            <button
              className="bg-white text-black px-3 py-1.5 text-sm font-medium cursor-pointer transition duration-300 ease-in-out"
              onClick={() => disconnect()}
            >
              Disconnect Wallet
            </button>
          </div>
        ) : (
          connectors.map((connector) => (
            <button
              key={connector.id}
              className="bg-white text-black px-3 py-1.5 text-sm font-medium cursor-pointer transition duration-300 ease-in-out"
              onClick={() => connect({ connector })}
            >
              Connect
            </button>
          ))
        )}
        {error && <div className="text-red-500 mt-2">{error.message}</div>}
      </div>
    </>
  );
}

export default Connect;
