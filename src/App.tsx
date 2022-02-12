import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import useWallet from "./hooks/useWallet";
import ConnectMetamaskButton from "./components/ConnectMetamaskButton";
import useKlayBalance from "./hooks/useKlayBalance";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin-top: 20px;
  font-weight: 700;
`;

function App() {
  const { balance: KlayBalance, getBalance: getKlayBalance } = useKlayBalance();
  const { account, provider } = useWallet();

  useEffect(() => {
    console.log("~~~provider", provider);
  }, [provider]);

  return (
    <Wrap>
      <ConnectMetamaskButton />
      <Button onClick={getKlayBalance}>Get Klay balance</Button>
      <Text>account: {account}</Text>
      <Text>Klay: {KlayBalance}</Text>
    </Wrap>
  );
}

export default App;
