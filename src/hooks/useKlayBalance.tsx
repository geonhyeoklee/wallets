import { ethers } from "ethers";
import { useCallback, useState } from "react";
import useWallet from "./useWallet";

const useKlayBalance = () => {
  const [balance, setBalance] = useState<string>();
  const [error, setError] = useState<unknown>();
  const { account, provider } = useWallet();

  const getBalance = useCallback(async () => {
    try {
      const balance = await provider?.getBalance(account);
      if (balance) {
        const formatedBalance = ethers.utils.formatEther(balance);
        setBalance(formatedBalance);
      }
    } catch (error) {
      setError(error);
    }
  }, [provider, account]);

  // useEffect(() => {
  //   getBalance();
  // }, [getBalance]);

  return {
    balance,
    getBalance,
    error,
  };
};

export default useKlayBalance;
