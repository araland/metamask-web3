import { useWeb3React } from "@web3-react/core";
import { getContractInstance, getTokenContractInstance } from "../utils";
import { Contract, utils } from "ethers";

export function useCallContract() {
  const { chainId } = useWeb3React();

  return {};
}
