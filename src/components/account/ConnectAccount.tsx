import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import ConnectModal from "./ConnectModal";
import DisconnectModal from "./DisconnectModal";
import { metaMask } from "../../connectors/metaMask";
import { walletConnect } from "../../connectors/walletConnect";
import { getEllipsisTxt } from "../../utils/formatters";
import wallet_icon from "../../assets/images/wallet.webp";
import { useWindowWidthAndHeight } from "../../hooks/useWindowWidthAndHeight";

interface WantedChain {
  chain?: number;
}

const ConnectAccount: React.FC<WantedChain> = () => {
  const { account } = useWeb3React();

  const [width] = useWindowWidthAndHeight();
  const isMobile = width <= 500;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const disconnect = async () => {
    const connector = metaMask || walletConnect;
    setIsModalVisible(false);
    setIsAuthModalOpen(false);
    localStorage.removeItem("connectorId");
    if (connector.deactivate) connector.deactivate();
    else connector.resetState();

    // @ts-ignore
    if (connector && connector.close) {
      // @ts-ignore
      await connector.close();
    }
  };

  return (
    <>
      {account === undefined ? (
        <>
          <img src={wallet_icon} alt="wallet" className="wallet-btn" onClick={() => setIsAuthModalOpen(true)} />
          <ConnectModal isModalOpen={isAuthModalOpen} setIsModalOpen={setIsAuthModalOpen} />
        </>
      ) : (
        <>
          <div className="account-btn" onClick={() => setIsModalVisible(true)}>
            {!isMobile && account && typeof account === "string" && (
              <p style={{ marginRight: "5px", color: "#fff" }}>{getEllipsisTxt(account, 6)}</p>
            )}
            <img
              src={wallet_icon}
              alt="wallet"
              className="connected-wallet-btn"
              onClick={() => setIsAuthModalOpen(true)}
            />
          </div>
          <DisconnectModal isModalOpen={isModalVisible} setIsModalOpen={setIsModalVisible} disconnect={disconnect} />
        </>
      )}
    </>
  );
};

export default ConnectAccount;
