import { connectorLocalStorageKey, ConnectorNames } from "../utils/connectors";

import { coinbaseWallet } from "../connectors/coinbaseWallet";
import { metaMask } from "../connectors/metaMask";
import { walletConnect } from "../connectors/walletConnect";
import toast from "react-hot-toast";

export async function useEagerConnect() {
  const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames;
  try {
    switch (connectorId) {
      case "injected" as ConnectorNames:
        await metaMask.activate();
        window.localStorage.setItem("connectorId", "injected");

        break;

      case "wallet_connect" as ConnectorNames:
        await walletConnect.activate();
        window.localStorage.setItem("connectorId", "wallet_connect");

        break;

      case "Coinbase Wallet" as ConnectorNames:
        await coinbaseWallet.activate();
        window.localStorage.setItem("connectorId", "coinbase");

        break;

      default:
        await metaMask.activate();
        window.localStorage.setItem("connectorId", "injected");

        break;
    }
  } catch (error) {
    console.error(error);
    toast.error("No provide found");
  }
}
