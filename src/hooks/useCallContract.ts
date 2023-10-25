import { useWeb3React } from "@web3-react/core";
import { getContractInstance } from "../utils";

export function useCallContract() {
  const { chainId } = useWeb3React();

  const incrementCount = async () => {
    const counterContract = await getContractInstance("Counter", chainId);

    try {
      if (counterContract) {
        const tx = await counterContract.incrementCounter();
        await tx.wait();

        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { incrementCount };
}
