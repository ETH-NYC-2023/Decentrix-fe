// import SocialLogin from "@biconomy/web3-auth";

// // NOTE: If you're using version ^0.0.4 then you need to import the css in project root
// import "@biconomy/web3-auth/dist/src/style.css"

// export default  async function login () {
//     // init wallet
// const socialLoginSDK = new SocialLogin();
// await socialLoginSDK.init('0x5'); // Enter the network id in hex) parameter
// socialLoginSDK.showConnectModal();

// // show connect modal
// socialLoginSDK.showWallet();

// if (!socialLoginSDK?.web3auth?.provider) return;
// const provider = new ethers.providers.Web3Provider(
//     socialLoginSDK.web3auth.provider,
// );
// const accounts = await provider.listAccounts();
// console.log("EOA address", accounts)

// // get signature
// const signature = await socialLoginSDK.whitelistUrl('http://localhost:3000/');


import dynamic from "next/dynamic";
import { Suspense } from "react";

const Index = () => {
  const SocialLoginDynamic = dynamic(
    () => import("../components/social_comp").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SocialLoginDynamic />
      </Suspense>
    </div>
  );
};

export default Index;
