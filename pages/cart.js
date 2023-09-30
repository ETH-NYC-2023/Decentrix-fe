import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import ProductData from "../data/ProductData";
import Image from "next/image";
import matic from "../assets/polygon-matic.png";
import Link from "next/link";
import { removefromcart } from "../redux/cartSlice";
import axios from "axios";
// import rr from "../assets/products/yeezy.jpg";

const Cart = () => {
  const itemlist = useSelector((state) => state.cart.items);
  const acc = useSelector((state) => state.accountName.accountAddress);
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  var total = 0;

  for (var i = 0; i < itemlist.length; i++) {
    total = total + ProductData[itemlist[i] - 1].price;
  }

  const buyNFT = async () => {
    const formData = new FormData();
    formData.append("file", ProductData[itemlist[0] - 1].img);
    // formData.append("file", rr);
  };

  return (
    <>
      <Head>
        <title>Decentrix | Cart</title>
        <meta
          name="description"
          content="Blockchain based Ecommerce platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 pt-24 flex items-center justify-center h-screen ">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {itemlist.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-lg uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-gray-600 text-lg uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-gray-600 text-lg uppercase w-1/4 text-center">
                  Total
                </h3>
              </div>
              {itemlist.map((ind) => {
                return (
                  <div
                    key={ind}
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="w-24">
                        <Image
                          src={ProductData[ind - 1].img}
                          layout="fixed"
                          height={96}
                          width={96}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center ml-12 flex-grow">
                        <span className="font-bold text-sm">
                          {ProductData[ind - 1].name}
                        </span>
                        <div className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                          <button
                            onClick={() => 
                            dispatch(removefromcart(ProductData[ind - 1].id))}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                      <p className="mx-2 border-2 text-center w-8">1</p>
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-1/4 font-semibold text-lg flex justify-center items-center">
                      <Image
                        src={matic}
                        alt=""
                        height={32}
                        width={32}
                        className="h-8"
                      />
                      <span className="text-xl pl-2">
                        {ProductData[ind - 1].price}
                      </span>
                    </span>
                  </div>
                );
              })}
              <Link href="/">
                <a className="flex font-semibold text-[#ef8157] text-sm mt-10">
                  <svg
                    className="fill-current mr-2 text-[#ef8157] w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </a>
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {itemlist.length}
                </span>
                <div className="pt-1 text-black flex items-center ">
                  <Image
                    src={matic}
                    alt=""
                    height={24}
                    width={24}
                    className="h-8"
                  />
                  <p className="pl-2 text-sm font-bold">{total}</p>
                </div>
              </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <div className="pt-1 text-black flex items-center ">
                    <Image
                      src={matic}
                      alt=""
                      height={32}
                      width={32}
                      className="h-8"
                    />
                    <p className="pl-2 text-xl font-bold">{total}</p>
                  </div>
                </div>
                <button
                  onClick={buyNFT}
                  className="text-[#ef8157] font-semibold hover:text-[#ef8157] py-3 mt-4 text-sm uppercase w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
