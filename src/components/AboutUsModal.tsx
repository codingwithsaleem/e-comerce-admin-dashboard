"use client";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

// import wixClient from "@/config/wixConfig";

import { phoneCountryCodes } from "@/utils/constrants/countryCodes";

const AboutUsModal = ({ setAboutModel, setNav }) => {
  const [selectedItem, setSelectedItem] = useState(phoneCountryCodes[0]);
  const [openDropdown, setOpenDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const phoneNumber = selectedItem.countryCode + " " + data.phone;

    const finalData = {
      full_name: data.name,
      email_a784: data.email,
      phone_e353: phoneNumber,
      service: data.service,
      message: data.message,
    };
    try {
    //   const response = await wixClient.submissions.createSubmission({
    //     formId: process.env.CONTACT_US_FORM_ID,
    //     status: "CONFIRMED",
    //     submissions: finalData,
    //   });
    //   if (response) {
    //     setMessage("Form submitted successfully.");
    //     setData({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       service: "",
    //       message: "",
    //     });
    //   }

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred.");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hidden-scroll fixed flex flex-col right-0 top-0 w-[100%] md:w-[541px] z-50 h-[100%] border-r-gray-900 pb-8 bg-[image:--navAboutModalBG]  bg-[#213145]  overflow-y-scroll ">
      <div>
        <div
          onClick={() => {
            setAboutModel(false);
            setNav(true);
          }}
          className="text-white flex justify-end text-[30px] md:text-[40px] m-6 hover:cursor-pointer"
        >
          <RxCross2 />
        </div>

        <div className=" w-[80%] m-auto mt-[100px] md:mt-auto flex flex-col ">
          {/* about us section start */}
          <div className="flex flex-col text-center text-white font-lexend-deca">
            <p className=" text-[21px] font-normal">About Us</p>
            <p className=" mt-8 text-[15px] font-thin font-inter text-[#C1C1C1]">
              Strugbits, a place where websites aren't just pages but
              extraordinary experiences! Our IT magic combines stunning designs
              with strategic brilliance, turning your site into a magnet for
              success. With us, your website will be a 'Wow' and your success a
              'Sure Thing'.
            </p>
          </div>
          {/* about us section end */}

          <div className="flex flex-col text-center text-white font-lexend-deca">
            {/* services section start */}
            <p className=" text-[21px] mt-12 md:mt-auto font-normal">
              Services
            </p>
            <div className=" flex flex-wrap gap-4 justify-center items-center mt-12">
              <div className="w-[101px] h-[79px] flex flex-col gap-2 justify-center items-center rounded-lg border-[#FD9B65] border-[1px]">
                <img
                  src={"/assets/images/Navbar/About/ICONS/logo1.svg"}
                  alt="Consultation Icon"
                />
                <p className=" font-vazirmatn text-white text-[13.51px]">
                  UI UX Design
                </p>
              </div>
              <div className="w-[101px] h-[79px] flex flex-col gap-2 justify-center items-center rounded-lg border-[#FD9B65] border-[1px]">
                <img
                  src={"/assets/images/Navbar/About/ICONS/logo2.svg"}
                  alt="Icon"
                />
                <p className=" font-Vazirmatn text-white text-[13.51px]">
                  App Dev
                </p>
              </div>
              <div className="w-[101px] h-[79px] flex flex-col gap-2 justify-center items-center rounded-lg border-[#FD9B65] border-[1px]">
                <img
                  src={"/assets/images/Navbar/About/ICONS/logo3.svg"}
                  alt="Consultation Icon"
                />
                <p className=" font-Vazirmatn text-white text-[13.51px]">
                  Website Dev
                </p>
              </div>
              <div className="w-[101px] h-[79px] flex flex-col gap-2 justify-center items-center rounded-lg border-[#FD9B65] border-[1px]">
                <img
                  src={"/assets/images/Navbar/About/ICONS/logo4.svg"}
                  alt="Consultation Icon"
                />
                <p className=" font-Vazirmatn text-white text-[13.51px]">
                  Brand Design
                </p>
              </div>
              <div className="w-[101px] h-[79px] flex flex-col gap-2 justify-center items-center rounded-lg border-[#FD9B65] border-[1px]">
                <img
                  src={"/assets/images/Navbar/About/ICONS/logo5.svg"}
                  alt="Consultation Icon"
                />
                <p className=" font-Vazirmatn text-white text-[13.51px]">SEO</p>
              </div>
              <div className="w-[101px] h-[79px] flex flex-col gap-2 justify-center items-center rounded-lg border-[#FD9B65] border-[1px]">
                <img
                  src={"/assets/images/Navbar/About/ICONS/logo6.svg"}
                  alt="Consultation Icon"
                />
                <p className=" font-Vazirmatn text-white text-[13.51px]">SMM</p>
              </div>
            </div>
            {/* services section end */}

            {/* contact form start */}
            <form onSubmit={handleSubmit}>
              <div className="max-w-md mt-16 text-left ">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onChange={handleChange}
                      value={data.name}
                      type="text"
                      id="name"
                      name="name"
                      className="block px-2 py-2.5  w-full text-sm rounded-[6px] text-white bg-transparent border-2 border-[#FFFFFF] border-opacity-[50%] appearance-none dark:text-white dark:border-[#FFFFFF] dark:border-opacity-[50%] dark:focus:border-[#FFFFFF] focus:outline-none focus:ring-0 focus:border-[#FFFFFF] focus:border-opacity-[50%] peer"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onChange={handleChange}
                      value={data.email}
                      type="email"
                      id="email"
                      name="email"
                      className="block px-2 py-2.5 w-full text-sm rounded-[6px] text-white bg-transparent border-2 border-[#FFFFFF] border-opacity-[50%] appearance-none dark:text-white dark:border-[#FFFFFF] dark:border-opacity-[50%] dark:focus:border-[#FFFFFF] focus:outline-none focus:ring-0 focus:border-[#FFFFFF] focus:border-opacity-[50%] peer"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <div className="flex items-center relative">
                      <button
                        onClick={() => setOpenDropDown(!openDropdown)}
                        className="flex-shrink-0 z-10 inline-flex items-center px-2 py-3 text-sm font-[400] text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
                        type="button"
                      >
                        {selectedItem?.icon}
                        {selectedItem?.countryCode}
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {openDropdown && (
                        <div className="z-10 absolute top-12  bg-white divide-y divide-gray-100 rounded-lg shadow w-56">
                          <ul
                            className="py-2 text-sm text-gray-900"
                            aria-labelledby="dropdown-phone-button"
                          >
                            {phoneCountryCodes.map((data, index) => {
                              const { countryName, countryCode, icon } = data;
                              return (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setSelectedItem(data);
                                    setOpenDropDown(false);
                                  }}
                                  className="border"
                                >
                                  <button
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                                    role="menuitem"
                                  >
                                    <div className="inline-flex items-center">
                                      {icon}
                                      {countryName} ({countryCode})
                                    </div>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                      <label
                        htmlFor="phone-input"
                        className="mb-2 text-sm font-[400] text-gray-900 sr-only"
                      >
                        Phone number:
                      </label>
                      <div className="relative w-full">
                        <input
                          onChange={handleChange}
                          value={data.phone}
                          type="tel"
                          id="phone"
                          name="phone"
                          className="block px-4 py-3 w-full z-20 text-sm  bg-transparent rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onChange={handleChange}
                      value={data.service}
                      type="text"
                      id="service"
                      name="service"
                      className="block py-2.5 px-2 w-full text-sm rounded-[6px] text-white bg-transparent border-2 border-[#FFFFFF] border-opacity-[50%] appearance-none dark:text-white dark:border-[#FFFFFF] dark:border-opacity-[50%] dark:focus:border-[#FFFFFF] focus:outline-none focus:ring-0 focus:border-[#FFFFFF] focus:border-opacity-[50%] peer"
                      placeholder="Enter Service"
                      required
                    />
                  </div>
                </div>
                <div className=" z-0 w-full mb-5 group">
                  <textarea
                    onChange={handleChange}
                    value={data.message}
                    id="message"
                    name="message"
                    className="block py-2.5 px-2 w-full h-[112px] text-sm rounded-[6px] text-white bg-transparent border-2 border-[#FFFFFF] border-opacity-[50%] appearance-none dark:text-white dark:border-[#FFFFFF] dark:border-opacity-[50%] dark:focus:border-[#FFFFFF] focus:outline-none focus:ring-0 focus:border-[#FFFFFF] focus:border-opacity-[50%] peer"
                    placeholder="Your Message"
                    required
                  />
                </div>
              </div>
              <div>
                {message && (
                  <p className="font-poppins text-[12px] sm:text-[14px] text-left text-[#FB724C] ">
                    {message}
                  </p>
                )}
                <button className=" font-bold bg-[#FD9B65] text-lg text-[#000000] my-4 font-roboto px-10 py-2">
                  Send Message
                </button>
              </div>
            </form>
            <div className="w-full h-[2px] my-4 bg-slate-500"></div>
            {/* contact form end */}
            <div className="flex  flex-col gap-6 justify-center lg:flex-row   lg:justify-between">
              <div className="flex mx-auto lg:mx-0  flex-col justify-start items-start">
                <p className=" text-[12px] mx-auto lg:mx-0 font-Vazirmatn text-[#B7B7B7]">
                  Contact Us
                </p>
                <div>
                  <p>info@strugbits.com</p>
                  <p>+1 718-717-8150</p>
                </div>
              </div>

              <div className="flex mx-auto  lg:mx-0 flex-col items-start">
                <p className=" mx-auto lg:mx-0 text-[12px] mb-4 font-Vazirmatn text-[#B7B7B7]">
                  Follow Us
                </p>
                <div className="flex gap-8">
                  <img
                    src={"/assets/images/Navbar/About/ICONS/lin.svg"}
                    alt="Consultation Icon"
                  />
                  <img
                    src={"/assets/images/Navbar/About/ICONS/Link.svg"}
                    alt="Consultation Icon"
                  />
                  <img
                    src={"/assets/images/Navbar/About/ICONS/linkedin.svg"}
                    alt="Consultation Icon"
                  />
                  <img
                    src={"/assets/images/Navbar/About/ICONS/linkkk.svg"}
                    alt="Consultation Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal;
