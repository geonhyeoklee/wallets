import detectEthereumProvider from "@metamask/detect-provider";
import { useCallback, useEffect, useState } from "react";

const useMetamask = () => {
  const [provider, setProvider] = useState<any>();
  const [account, setAccount] = useState<string>();
  const [networkVersion, setNetworkVersion] = useState<string>();

  const detect = useCallback(async () => {
    const provider = await detectEthereumProvider();
    if (!provider) return;
    setProvider(provider);
    setNetworkVersion(provider?.networkVersion);
    setAccount(provider?.selectedAddress);
  }, []);

  const connect = useCallback(() => {
    if (!provider) return;
    provider.request({ method: "eth_requestAccounts" });
  }, [provider]);

  useEffect(() => {
    if (!provider) return;
    provider.on("accountsChanged", (accounts: string[]) => {
      setAccount(accounts[0]);
    });
  }, [provider]);

  useEffect(() => {
    detect();
  }, [detect]);

  return {
    detect,
    connect,
    provider,
    networkVersion,
    account,
  };
};

export default useMetamask;
