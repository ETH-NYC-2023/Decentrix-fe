import React from "react";
import zemoologo from "../assets/declogo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#141414] rounded-lg shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-evenly">
        <div className="flex items-center mb-4 sm:mb-0 h-16 w-auto">
          <Image
            src={zemoologo}
            height={64}
            width={250}
            alt="Zemoo Logo"
            objectFit="contain"
          />
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-lg text-gray-200 sm:mb-0">
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6 ">About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-lg text-white sm:text-center">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Decentrix
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
