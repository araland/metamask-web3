// @ts-ignore
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";

import { URLS } from "../constants/networks";

export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
  (actions: any) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: URLS[1][0],
        appName: "The-Booker"
      }
    })
);
