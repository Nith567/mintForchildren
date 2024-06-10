import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
export const config = createConfig({
  // turn off injected provider discovery
  chains:[base],
  multiInjectedProviderDiscovery: false,
  connectors: [
    coinbaseWallet({
      appName: "Mint zora",
      preference: "smartWalletOnly",
    }),
  ],
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});

export const minterAddress ='0x04E2516A2c207E84a1839755675dfd8eF6302F0a'
export const mintReferral = '0x76CFa18F5C788E14cA92AA4918e26Ee87148c995';//safe multisigner address
export const CONTRACT_ADDRESS = '0xEB334F3FBD826ce99f1E74d7d074FBE351F4157A';
export const mintFee= 0.000777;

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
