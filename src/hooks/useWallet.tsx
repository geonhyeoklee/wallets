import { ethers } from "ethers";
import { useEffect, useState } from "react";
import useMetamask from "./useMetamask";

const useWallet = () => {
  const [account, setAccount] = useState<string>();
  const [provider, setProvider] = useState<any>();
  const { account: metamaskAccount, provider: ethProvider } = useMetamask();

  useEffect(() => {
    if (metamaskAccount) {
      setAccount(metamaskAccount);
      return;
    }
  }, [metamaskAccount]);

  useEffect(() => {
    // if (ethProvider) {
    //   setProvider(ethProvider);
    //   return;
    // }

    // @ts-ignore
    // setProvider(new ethers.providers.Web3Provider(window.klaytn));

    // @ts-ignore
    setProvider(
      new ethers.providers.JsonRpcProvider(
        "https://klaytn-en.sixnetwork.io:8651"
      )
    );
  }, [ethProvider]);

  return {
    account,
    provider,
  };
};

export default useWallet;
