/// <reference types="react-scripts" />
declare module "@metamask/detect-provider";

interface Window {
  klaytn: {
    isMetaMask?: true;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
  };
}
