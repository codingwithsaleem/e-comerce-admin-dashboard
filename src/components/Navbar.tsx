"use client";

import React, {  useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import AboutUsModal from "./AboutUsModal";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blog" },
  { name: "Courses", href: "/courses" },
  { name: "Portfolio", href: "#" },
];
const Navbar = () => {
  const path = usePathname();

  const [aboutModel, setAboutModel] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);



  return (
    <nav className="flex flex-col absolute z-50 w-full items-center">
      <div className="w-[100%] max-w-[1440px] flex flex-row justify-between m-auto 2xl:px-0 px-[30px] sm:px-[50px] p-6">
        <div className="flex z-[100] mt-1 items-center ">
          <Link href="/" className="flex flex-row items-center">
            <Image
              src={'/icon.svg'}
              width={40}
              height={40}
              alt="logo"
            />
            <span className="font-lexend">Codingwithsaleem</span>
          </Link>
        </div>
        {/* Mobile menu start */}
        <div
          className={`fixed z-[100] flex flex-col lg:hidden left-0 top-0 w-[60%] h-full  ease-in-out duration-500 ${
            nav ? "" : "left-[-100%]"
          }`}
        >
          <ul className="flex flex-col w-full font-medium text-[13px] font-lexend p-4 md:p-0 mt-16 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            {navbarLinks.map((link, index) => {
              const { name, href } = link;
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    // onClick={toggleNav}
                    className="block py-2 px-3 border-b-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] font-normal font-Lexend rounded-lg"
                    aria-current={path === href ? "page" : undefined}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="block md:hidden">
            <li className="flex my-3 justify-center items-center">
              <Link href="/contact" onClick={toggleNav}>
                <div className="flex cursor-pointer flex-row justify-center items-center ease-in duration-300  b-[1px] font-medium text-[15px] border rounded-md font-lexend">
                  <span className="mx-4">Contact Us</span>
                </div>
              </Link>
            </li>
            <li>
              <div>
                <ModeToggle />
              </div>
            </li>
          </div>
        </div>
        {/* Mobile menu end */}
        {/* navbar page link start  */}
        
          <>
            {" "}
            <div className="hidden z-50 w-full lg:block md:w-auto">
              <ul className="flex flex-col z-50  font-normal lg:text-[13px] h-full text-[13px] md:text-[15px] xl:13px 2xl:text-[16px] font-lexend p-4 md:p-0 mt-4 md:space-x-8 xl:x-2 lg:space-x-3 xl:space-x-8 2xl:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                {navbarLinks.map((link, index) => {
                  const { name, href } = link;
                  return (
                    <li key={index}>
                      <Link
                        href={href}
                        className={`block pt-6 hover:border-t-4 hover:mt-[-4px] hover:border-primary font-lexend`}
                        aria-current={path === href ? "page" : undefined}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="hidden md:flex flex-row z-50 pt-2 font-Inter">
              <Link href="/contact-us" onClick={toggleNav}>
                <div className="group flex cursor-pointer flex-row justify-center items-center ease-in duration-300 b-[1px] font-medium lg:text-[13px] xl:text-[15px] 2xl:text-[18px] border rounded-md border-primary px-2 2xl:w-[210px] xl:h-[48px] h-[56px] 2xl:h-[56px] hover:bg-primary font-[Lexa-Deca]">
                  <span className="mx-4">Contact Us</span>
                  <GoArrowUpRight className="icon lg:text-[13px] xl:text-[15px] 2xl:text-[16px] group-hover:text-black 2xl:group-hover:text-[17px]" />
                </div>
              </Link>
              <div className="flex justify-center items-center px-2.5">
                <ModeToggle />
              </div>
            </div>
          </>
        
        {/* navbar page link end */}
        {nav ? (
          <div
            onClick={toggleNav}
            className="block cursor-pointer mt-4 lg:hidden"
          >
            <AiOutlineClose size={30} />
          </div>
        ) : (
          <div className="mt-4 lg:hidden cursor-pointer" onClick={toggleNav}>
            <AiOutlineMenu size={30} />
          </div>
        )}

        <div
          className={`transition-all duration-300 bg-[#5e5b5b1f] h-full fixed right-0 top-0  z-[1000] ${
            aboutModel
              ? "opacity-100 w-full"
              : "opacity-0 pointer-events-none w-0"
          }`}
        >
          <AboutUsModal setNav={setNav} setAboutModel={setAboutModel} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
