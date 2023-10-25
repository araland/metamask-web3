import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { getTokenContractObjByName } from "../utils";

export function useLoadContract() {
  const { chainId } = useWeb3React();

  async function fetchCurrentCount() {
    const counterContract: Contract | null = getTokenContractObjByName("Counter", chainId);
    let result: any;
    try {
      if (counterContract) {
        result = await counterContract.getCount();
        return result;
      }
    } catch (err) {
      console.error(err);
    }
  }

  return {
    fetchCurrentCount
  };
}
