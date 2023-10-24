import { initializeConnector } from "@web3-react/core";
// @ts-ignore
import { WalletConnect } from "@web3-react/walletconnect";
import { URLS } from "../constants/networks";

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: URLS
      }
    })
);
