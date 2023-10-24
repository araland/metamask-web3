import { useEffect, useState } from "react";

import { DownOutlined } from "@ant-design/icons";
import { useWeb3React } from "@web3-react/core";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";

import ethereum_Logo from "../assets/images/ethereum_Logo.png";
import polygon_logo from "../assets/images/polygon_logo.png";
import bsc_Logo from "../assets/svg/bsc_Logo.svg";
import { useSwitchChain } from "../hooks/useSwitchChain";
import { useWindowWidthAndHeight } from "../hooks/useWindowWidthAndHeight";

function ChainSelector() {
  const switchChain = useSwitchChain();
  const { chainId, isActive } = useWeb3React();

  const [width] = useWindowWidthAndHeight();
  const isMobile = width <= 500;

  const [selected, setSelected] = useState<any>();
  const [label, setLabel] = useState<JSX.Element>();

  const labelToShow = (logo: string, alt: string) => {
    return <img src={logo} alt={alt} className="chain-selector-logo" />;
  };

  useEffect(() => {
    if (!chainId) return undefined;
    if (chainId === 1 || chainId === 5) {
      setLabel(labelToShow(ethereum_Logo, "Ethereum_logo"));
    } else if (chainId === 137 || chainId === 80001) {
      setLabel(labelToShow(polygon_logo, "Polygon_logo"));
    } else setLabel(labelToShow(bsc_Logo, "BNB_logo"));
    return;
  }, [chainId]);

  const items: MenuProps["items"] = [
    { label: "Ethereum", key: "1", icon: labelToShow(ethereum_Logo, "Ethereum_logo") },
    { label: "Goerli Testnet", key: "5", icon: labelToShow(ethereum_Logo, "Ethereum_logo") },
    { label: "Polygon", key: "137", icon: labelToShow(polygon_logo, "Polygon_logo") },
    { label: "Mumbai", key: "80001", icon: labelToShow(polygon_logo, "Polygon_logo") },
    { label: "BNB Chain", key: "56", icon: labelToShow(bsc_Logo, "BNB_logo") },
    { label: "BNB Testnet", key: "97", icon: labelToShow(bsc_Logo, "BNB_logo") }
  ];

  useEffect(() => {
    if (!chainId) return undefined;
    setSelected(items.find((item) => item?.key === chainId.toString()));
    return;
  }, [chainId]);

  const onClick: MenuProps["onClick"] = async ({ key }) => {
    await switchChain(parseInt(key));
  };

  if (!chainId || !isActive) return null;

  return (
    <Dropdown menu={{ items, onClick }} className="chain-selector">
      <Button className="chain-selector-btn">
        {!selected && <span style={{ marginLeft: "5px" }}>Select Chain</span>}
        {selected && (
          <div style={{ display: "flex", alignItems: "center" }}>
            {label}
            {isMobile ? <></> : <span style={{ marginRight: "10px", color: "#fff" }}>{selected?.label}</span>}
          </div>
        )}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
}

export default ChainSelector;
