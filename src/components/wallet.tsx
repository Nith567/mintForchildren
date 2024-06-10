"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function Connect() {
  const { address } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="fixed bottom-10 left-10 z-[3000]">
      {address ? (
        <button
          className="bg-white text-black px-3 py-1.5 text-sm font-medium cursor-pointer transition duration-300 ease-in-out"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
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
  );
}

export default Connect;
