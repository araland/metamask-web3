import { useWeb3React } from "@web3-react/core";
// @ts-ignore
import { Network } from "@web3-react/network";
// @ts-ignore
import { WalletConnect } from "@web3-react/walletconnect";

import { getAddChainParameters } from "../constants/networks";

export function useSwitchChain() {
  const { connector } = useWeb3React();

  const switchChain = async (desiredChain: number) => {
    try {
      if (connector instanceof WalletConnect || connector instanceof Network) {
        await connector.activate(desiredChain === -1 ? undefined : desiredChain);
      } else {
        await connector.activate(desiredChain === -1 ? undefined : getAddChainParameters(desiredChain));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return switchChain;
}
