"use client";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect} from "wagmi";
import { base } from "wagmi/chains";
import { writeContract } from "@wagmi/core";
import { config } from "@/wagmi";
import { getAccount } from '@wagmi/core'
import { Address, parseEther } from "viem";
import { switchChain } from 'viem/actions';
import { useWalletClient, usePublicClient} from 'wagmi'
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
  const { data: walletClient } = useWalletClient()
  const [input, setInput] = useState<number>(0.1);
  const { connectors, connect, status, error } = useConnect();
  const [copied, setCopied] = useState(false);
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
      setInput(0.1);
    }

    return () => {
      htmlElement.style.overflowY = "auto";
      htmlElement.style.height = "auto";
    };
  }, [displayDialog]);

  const sendFunds = async () => {
    try{
    console.log(address);
    // const account =getAccount(config);
    const { connector } =getAccount(config);

if (connector?.switchChain) {
         await connector?.switchChain({ chainId: base.id});
       }

if (!walletClient) {
  throw  new Error('Wallet not connected')
}
const [account] = await walletClient.getAddresses()
const hash = await walletClient.sendTransaction({ 
  account:account,
  to: '0x76CFa18F5C788E14cA92AA4918e26Ee87148c995',
  value: parseEther(input.toString()),
})
  }
  catch(e){
    console.log(e);
  };
  };
  function handleCopyAddress() {
    if (!address) return;
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

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
              <p className="font-semibold text-black">Donate</p>
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
                step={0.01}
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
              Donate
            </button>
            <button
              onClick={handleCopyAddress}
              className="bg-white text-black px-3 py-1.5 text-sm font-medium cursor-pointer gap-3 flex flex-row items-center transition duration-300 ease-in-out"
            >
              <span>
                {`${address.slice(0, 4)}...${address.slice(address.length - 4, address.length)}`}
              </span>
              <span className="text-[10px]">
                {copied ? <Tick /> : <Copy />}
              </span>
            </button>
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

function Copy() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function Tick() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

export default Connect;
