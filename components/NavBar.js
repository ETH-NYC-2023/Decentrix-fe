import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../assets/declogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
import { ethers } from "ethers";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const counter = useSelector((state) => state.counter.value)
  const router = useRouter();

  return (
    <div>
      <nav className="z-10 w-full fixed bg-[#141414] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-end w-full justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Image
                    height={100}
                    width={220}
                    src={logo}
                    alt="Workflow"
                    objectFit="contain"
                  />
                </div>
                <div className="hidden md:block self-center">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/">
                      <a
                        className={
                          router.pathname == "/"
                            ? "active underline underline-offset-[10px] text-white decoration-[#ef8157] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md"
                            : "text-white hover:underline hover:decoration-[#ef8157] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium"
                        }
                      >
                        Home
                      </a>
                    </Link>
                    {/* <Link href="/community">
                      <a
                        className={
                          router.pathname == "/community"
                            ? "active underline underline-offset-[10px] text-white decoration-[#ef8157] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md"
                            : "text-white hover:underline hover:decoration-[#ef8157] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium"
                        }
                      >
                        Community
                      </a>
                    </Link> */}
                    <Link href="/contact">
                      <a
                        className={
                          router.pathname == "/contact"
                            ? "active underline underline-offset-[10px] text-white decoration-[#ef8157] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md"
                            : "text-white hover:underline hover:decoration-[#ef8157] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium"
                        }
                      >
                        Support
                      </a>
                    </Link>
                    <Link href="/worldid">
                      <a
                        className={
                          router.pathname == "https://developer.worldcoin.org/hosted/wid_dd40992a872216f47fe61daef31761dd?signal=hardSignal"
                            ? "active underline underline-offset-[10px] text-white decoration-[#ef8157] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md"
                            : "text-white hover:underline hover:decoration-[#ef8157] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium"
                        }
                      >
                        WorldID 
                      </a>
                    </Link>
                    <Link href="/social">
                      <a
                        className={
                          router.pathname == "/social"
                            ? "active underline underline-offset-[10px] text-white decoration-[#ef8157] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md"
                            : "text-white hover:underline hover:decoration-[#ef8157] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium"
                        }
                      >
                        Login
                      </a>
                    </Link>
                      <button
                        onClick={()=>{console.log("Hello")}}
                        className= "text-white hover:underline hover:decoration-[#ef8157] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium"
                      >
                        Metamask
                      </button>
                  </div>
                </div>
              </div>
              <div className="self-center md:flex items-center hidden">
                <div className="">
                  {/* <ConnectButton moralisAuth={false} /> */}
                  
                </div>
                <Link href="/cart">
                      <a
                        className={
                          router.pathname == "/cart"
                            ? "active text-[#ef8157] font-medium text-3xl px-3 py-2 rounded-md"
                            : "text-white hover:text-[#ef8157] px-3 py-2 rounded-md text-3xl font-medium"
                        }
                      >
                        <div className="relative p-2">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <h3 className=" rounded-full text-sm px-2 p-0.5 bg-red-500 text-white absolute top-0 right-0 ">{counter}</h3>
                        </div>
                        
                      </a>
                    </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-200">
                <Link href="/">
                  <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                {/* <Link href="/community">
                  <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Community
                  </a>
                </Link> */}
                <Link href="/contact">
                  <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Support
                  </a>
                </Link>
              </div>
            </div>
          }
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
