import React from "react";
import Head from "next/head";
import { IDKitWidget } from "@worldcoin/idkit";
import Image from "next/image";
import ss from "../assets/ss.png"

const worldid = () => {
  const onSuccess = (ee) => {
    console.log("helllloooi ");
    console.log(ee);
  };
  return (
    <>
      <Head>
        <title>Decentrix | WorldID</title>
        <meta
          name="description"
          content="Blockchain based Ecommerce platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-24 flex items-center justify-center h-full bg-[#141414]">
        <div className="h-full basis-1/2">
        <Image
              src={ss}
              alt="product"
              objectFit="contain"
              // layout="responsive"
              className="rounded-xl"
            />
        </div>

        <div className="basis-1/2 text-center h-full">
          <IDKitWidget
            app_id="app_66206df86c01b5b520a74c28e056b0f8"
            action="login"
            onSuccess={onSuccess}
            // handleVerify={handleVerify}
            credential_types={["orb", "phone"]}
            enableTelemetry
          >
            {({ open }) => (
              <button
                onClick={open}
                className="text-3xl bg-white rounded-3xl text-black p-5 font-serif"
              >
                Verify with World ID
              </button>
              
            )}
          </IDKitWidget>
        </div>
      </div>
    </>
  );
};

export default worldid;
