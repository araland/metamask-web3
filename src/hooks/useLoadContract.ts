import { Contract } from "ethers";
import { getTokenContractObjByName } from "../utils";
import { utils } from "ethers";

export function useLoadContract() {
  async function fetchTokenSupply() {
    const pepesTokenContract: Contract | null = getTokenContractObjByName("PEPESToken", undefined);
    let result: any;
    try {
      if (pepesTokenContract) result = utils.formatEther(await pepesTokenContract.totalSupply());
    } catch (err) {
      console.error(err);
    }

    return result;
  }

  return {
    fetchTokenSupply
  };
}
