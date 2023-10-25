import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useLoadContract } from "../../hooks/useLoadContract";
import { useCallContract } from "../../hooks/useCallContract";

import "./Counter.scss";
import { toast } from "react-hot-toast";

function Counter() {
  const { account, chainId } = useWeb3React();
  const { fetchCurrentCount } = useLoadContract();
  const { incrementCount } = useCallContract();

  const [curCount, setCurCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const increment = async () => {
    if (!account) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (isLoading) return;
    setIsLoading(true);
    const result = await incrementCount();
    if (result) {
      toast.success("Count successfully");
      setCurCount(curCount + 1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    async function init() {
      if (!account) return;
      setIsLoading(true);
      const count = await fetchCurrentCount();
      setCurCount(Number(count));
      setIsLoading(false);
    }
    init();
  }, [account]);

  return (
    <div className="counter page-content">
      <div className="counter-section">
        <div className="container">
          <div className="current-counter">{isLoading ? "Loading Count" : curCount}</div>
          <div className="btn increment-btn" onClick={increment}>
            {isLoading ? "Loading" : "Increment"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
