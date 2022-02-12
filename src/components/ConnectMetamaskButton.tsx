import { Button } from "./Button";
import useMetamask from "../hooks/useMetamask";

const ConnectMetamaskButton: React.FC = () => {
  const { connect } = useMetamask();

  return <Button onClick={connect}>Connect Metamask</Button>;
};

export default ConnectMetamaskButton;
