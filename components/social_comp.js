import { ChainId } from "@biconomy/core-types";
import SocialLogin from "@biconomy/web3-auth";
import SmartAccount from "@biconomy/smart-account";
import "@biconomy/web3-auth/dist/src/style.css";
import { accountInfo } from "../redux/accountSlice";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [smartAccount, setSmartAccount] = useState(null);
  const [scwAddress, setScwAddress] = useState("");
  const [scwLoading, setScwLoading] = useState(false);
  const [socialLoginSDK, setSocialLoginSDK] = useState(null);
  const dispatch = useDispatch();
  const connectWeb3 = useCallback(async () => {
    if (typeof window === "undefined") return;
    console.log("socialLoginSDK", socialLoginSDK);
    if (socialLoginSDK?.provider) {
      const web3Provider = new ethers.providers.Web3Provider(
        socialLoginSDK.provider
      );
      setProvider(web3Provider);
      const accounts = await web3Provider.listAccounts();
      setAccount(accounts[0]);
      return;
    }
    if (socialLoginSDK) {
      socialLoginSDK.showWallet();
      return socialLoginSDK;
    }
    const sdk = new SocialLogin();
    await sdk.init(ethers.utils.hexValue(80001));
    setSocialLoginSDK(sdk);
    sdk.showConnectModal();
    sdk.showWallet();
    return socialLoginSDK;
  }, [socialLoginSDK]);

  // if wallet already connected close widget
  useEffect(() => {
    console.log("hidelwallet");
    if (socialLoginSDK && socialLoginSDK.provider) {
      socialLoginSDK.hideWallet();
    }
  }, [account, socialLoginSDK]);

  // after metamask login -> get provider event
  useEffect(() => {
    const interval = setInterval(async () => {
      if (account) {
        clearInterval(interval);
      }
      if (socialLoginSDK?.provider && !account) {
        connectWeb3();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [account, connectWeb3, socialLoginSDK]);

  const disconnectWeb3 = async () => {
    if (!socialLoginSDK || !socialLoginSDK.web3auth) {
      console.error("Web3Modal not initialized.");
      return;
    }
    await socialLoginSDK.logout();
    socialLoginSDK.hideWallet();
    setProvider(undefined);
    setAccount(undefined);
    setScwAddress("");
  };

  useEffect(() => {
    async function setupSmartAccount() {
      setScwAddress("");
      setScwLoading(true);
      const smartAccount = new SmartAccount(provider, {
        activeNetworkId: ChainId.POLYGON_MUMBAI,
        supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
      });
      await smartAccount.init();
      const context = smartAccount.getSmartAccountContext();
      setScwAddress(context.baseWallet.getAddress());
      dispatch(accountInfo(context.baseWallet.getAddress()));
      setSmartAccount(smartAccount);
      setScwLoading(false);
    }
    if (!!provider && !!account) {
      setupSmartAccount();
      console.log("Provider...", provider);
    }
  }, [account, provider, dispatch]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Biconomy Social Integration</h1>
        <button onClick={!account ? connectWeb3 : disconnectWeb3}>
          {!account ? "Connect Wallet" : "Disconnect Wallet"}
        </button>

        {account && (
          <div>
            <h2>EOA Address</h2>
            <p>{account}</p>
          </div>
        )}

        {scwLoading && <h2>Loading Smart Account...</h2>}

        {scwAddress && (
          <div>
            <h2>Smart Account Address</h2>
            <p>{scwAddress}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
