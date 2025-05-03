import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t-2 border-primary">
      <div className=" mx-5  pt-8 ">
        <Container>
          <div className=" bg-[#020013] text-white p-8 rounded-t-xl min-h-60">
            <div className="flex flex-col md:flex-row justify-around">
              <div className="flex justify-center items-center w-150 md:w-1/3 mb-4 md:mb-0">
                <Link href="/" className="flex flex-row items-center">
                  <Image src={"/icon.svg"} width={40} height={40} alt="logo" />
                  <h2 className="font-lexend lg:text-2xl">Codingwithsaleem</h2>
                </Link>
              </div>
              <div className="flex flex-col md:flex-row  md:space-y-0 md:space-x-24 font-raleway text-center text-lighttext">
                <div>
                  <h3 className="font-semibold mb-2 text-lg md:text-xl">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 py-2">
                    <li>
                      <Link
                        href="/"
                        className="hover:underline text-base md:text-lg"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="hover:underline text-base md:text-lg"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/courses"
                        className="hover:underline text-base md:text-lg"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        className="hover:underline text-base md:text-lg"
                      >
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>
                    <Link
                      href="/privacy-policy"
                      className="hover:underline text-base md:text-lg my-2"
                    >
                      Privacy Policy{" "}
                    </Link>
                  </h3>
                  <ul className="space-y-2  py-2">
                    <li>
                      <Link
                        href="/terms-conditions"
                        className="hover:underline text-base md:text-lg"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="hover:underline text-base md:text-lg"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mt-2 md:mt-0 mb-2 text-lg md:text-xl">
                    Follow Us
                  </h3>
                  <ul className="space-y-2  py-2">
                    <li>
                      <Link
                        href="#"
                        className="hover:underline text-base md:text-lg"
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline text-base md:text-lg"
                      >
                        Linkedlen
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline text-base md:text-lg"
                      >
                        YouTube
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-4">
            <p className="text-lighttext text-sm md:text-base">
              &copy; {new Date().getFullYear()} Codingwithsaleem. All rights
              reserved.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
