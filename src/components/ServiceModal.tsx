import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect } from 'react';
import Link from 'next/link';

export const ServicesData = {
  webDevelopment: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Wix Development', href: '/services/wix-development' },
    { name: 'Wordpress Development', href: '/services/wordpress-development' },
    { name: 'Shopify Development', href: '/services/shopify-development' },
    { name: 'Magento Development', href: '/services/magento-development' },
    {
      name: 'E-Commerce Development',
      href: '/services/ecommerce-web-development',
    },
  ],
  appDevelopment: [
    {
      name: 'Android App Development',
      href: '/services/android-app-development',
    },
    {
      name: 'IOS App Development',
      href: '/services/ios-app-development',
    },
  ],
  designing: [
    {
      name: 'Web Design',
      href: '/services/web-design',
    },
    {
      name: 'UI/UX Design',
      href: '/services/#',
    },
    {
      name: 'Design & Branding ',
      href: '/services/404',
    },
    {
      name: 'Creative Logo Design',
      href: '/services/404',
    },
    {
      name: 'Corporate Identity Design',
      href: '/services/404',
    },
    {
      name: 'Company Profile Design',
      href: '/services/404',
    },
  ],
  contentMarketing: [
    {
      name: 'Content Writing',
      href: '/services/404',
    },
    {
      name: 'Blog Writing',
      href: '/services/404',
    },
    {
      name: 'Website Copywriting',
      href: '/services/404',
    },
    {
      name: 'Technical Writing',
      href: '/services/404',
    },
    {
      name: 'Social Media Management',
      href: '/services/404',
    },
  ],
  seoMarketing: [
    {
      name: 'SEO',
      href: '/services/seo',
    },
    {
      name: 'Local SEO',
      href: '/services/404',
    },
    {
      name: 'Technical SEO',
      href: '/services/404',
    },
    {
      name: 'On-Page SEO',
      href: '/services/404',
    },
    {
      name: 'International SEO',
      href: '/services/404',
    },
    {
      name: 'Link Building',
      href: '/services/404',
    },
    {
      name: 'E-Commerce SEO',
      href: '/services/404',
    },
    {
      name: 'Wix SEO',
      href: '/services/404',
    },
    {
      name: 'Wordpress SEO',
      href: '/services/404',
    },
    {
      name: 'SEO Audit',
      href: '/services/seo-audit',
    },
  ],
  trending: [
    {
      name: 'Staff Augmentation',
      href: '/services/staff-augmentation',
    },
    {
      name: 'Referral Page',
      href: '/services/404',
    },
    {
      name: 'App Development',
      href: '/services/404',
    },
  ],
};

const ServicesModal = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <div
      className={`fixed bg-[#101F34] custom-shadow z-[-100] pb-[3.125rem] 2xl:pb-[6.25rem] w-full left-0 xl:py-[3.75rem] 2xl:py-[6.25rem] flex top-0 flex-wrap justify-center items-center h-[90vh] ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div
        onMouseLeave={() => setOpen(false)}
        className="flex  flex-wrap xl:flex-nowrap 2xl:flex-wrap h-[95%] 3xl:py-0 3xl:pt-2 py-10 px-10 overflow-y-hidden hidden-scroll text-white justify-center gap-8 mt-[140px] xl:mt-8 2xl:mt-16"
      >
        {/* first card start */}
        <div className=" w-[260px] lg:w-[160px] xl:w-[230px] rounded-md bg-[#101F34] 2xl:w-[250px] shadow-lg custom-shadow py-4 lg:h-[345px] 2xl:h-[520px]">
          <div className="flex flex-col h-[90%] w-[80%] m-auto">
            <ul className="flex flex-col gap-3 font-poppins font-[400] text-[1.125rem]">
              <li className="flex flex-row mb-4 xl:mb-0 2xl:mb-4 items-center justify-between">
                <span className="font-[600] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] text-[#FF6E4E]">
                  Development
                </span>
                <div className="w-[3.25rem] lg:w-[2rem] xl:w-[2.5rem] 2xl:w-[3.25rem]">
                  <img
                    src={'/assets/images/Navbar/dev.png'}
                    className="w-[100%]"
                    alt="Consultation Icon"
                  />
                </div>
              </li>
            </ul>

            <ul className="flex flex-col gap-3 justify-between font-poppins font-[400] text-[18px] ">
              {ServicesData['webDevelopment'].map((data, index) => {
                const { name, href } = data;
                return (
                  <Link key={index} onClick={() => setOpen(!open)} href={href}>
                    <li
                      className={`flex w-[75%] flex-row justify-between items-center relative group hover:text-[#FF6E4E] hover:duration-300 ${
                        index === 0 && 'mt-4'
                      }`}
                      id="listItem"
                    >
                      <span
                        className="absolute text-[#FF6E4E] opacity-0 transition-all duration-300 transform left-[50%] translate-x-0 group-hover:left-[90%] group-hover:opacity-100"
                        id="arrowIcon"
                      >
                        <FaArrowRightLong />
                      </span>
                      <span className="font-poppins font-[400] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]">
                        {name}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-3 font-poppins font-[400] text-[1.125rem] pt-4">
              <li className="flex flex-row mb-4 xl:mb-0 2xl:mb-4 items-center justify-between">
                <Link
                  href="/services/app-development"
                  className="font-[600] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] text-[#FF6E4E]"
                >
                  App Development
                </Link>
                <div className="w-[3.25rem] lg:w-[2rem] xl:w-[2.5rem] 2xl:w-[3.25rem]">
                  <img
                    src={'/assets/images/Navbar/dev6.png'}
                    className="w-[100%]"
                    alt="Consultation Icon"
                  />
                </div>
              </li>
            </ul>

            <ul className="flex flex-col gap-3 justify-between font-poppins font-[400] text-[18px] ">
              {ServicesData['appDevelopment'].map((data, index) => {
                const { name, href } = data;
                return (
                  <Link key={index} onClick={() => setOpen(!open)} href={href}>
                    <li
                      className="flex flex-row justify-between items-center relative group hover:text-[#FF6E4E] hover:duration-300 "
                      id="listItem"
                    >
                      <span
                        className="absolute text-[#FF6E4E] opacity-0 transition-all duration-300  transform left-[50%] translate-x-0 group-hover:left-[90%] group-hover:opacity-100"
                        id="arrowIcon"
                      >
                        <FaArrowRightLong />
                      </span>
                      <span className="font-poppins font-[400] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]">
                        {name}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        {/* first card end */}
        {/* Second card start */}
        <div className=" w-[260px] lg:w-[160px] xl:w-[230px] rounded-md bg-[#101F34] 2xl:w-[250px] shadow-lg custom-shadow py-4 lg:h-[345px] 2xl:h-[520px]">
          <div className="flex flex-col h-[90%] w-[80%] m-auto">
            <ul className="flex flex-col gap-3 font-poppins font-[400] text-[1.125rem]">
              <li className="flex flex-row mb-4 xl:mb-0 2xl:mb-4 items-center justify-between">
                <span className="font-[600] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] text-[#FF6E4E]">
                  Designing
                </span>
                <div className="w-[3.25rem] lg:w-[2rem] xl:w-[2.5rem] 2xl:w-[3.25rem]">
                  <img
                    src={'/assets/images/Navbar/dev1.png'}
                    className="w-[100%]"
                    alt="Consultation Icon"
                  />
                </div>
              </li>
            </ul>

            <ul className="flex flex-col gap-3 justify-between font-poppins font-[400] text-[18px] ">
              {ServicesData['designing'].map((data, index) => {
                const { name, href } = data;
                return (
                  <Link key={index} onClick={() => setOpen(!open)} href={href}>
                    <li
                      className={`flex w-[75%] flex-row justify-between items-center relative group hover:text-[#FF6E4E] hover:duration-300 ${
                        index === 0 && 'mt-4'
                      }`}
                      id="listItem"
                    >
                      <span
                        className="absolute text-[#FF6E4E] opacity-0 transition-all duration-300 transform left-[50%] translate-x-0 group-hover:left-[90%] group-hover:opacity-100 "
                        id="arrowIcon"
                      >
                        <FaArrowRightLong />
                      </span>
                      <span className="font-poppins font-[400] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]">
                        {name}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Second card end */}
        {/* third card start */}
        <div className=" w-[260px] lg:w-[160px] xl:w-[230px] rounded-md bg-[#101F34] 2xl:w-[250px] shadow-lg custom-shadow py-4 lg:h-[345px] 2xl:h-[520px]">
          <div className="flex flex-col h-[90%] w-[80%] m-auto">
            <ul className="flex flex-col gap-3 font-poppins font-[400] text-[1.125rem]">
              <li className="flex flex-row mb-4 xl:mb-0 2xl:mb-4 items-center justify-between">
                <span className="font-[600] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] text-[#FF6E4E]">
                  Content Marketing
                </span>
                <div className="w-[3.25rem] lg:w-[2rem] xl:w-[2.5rem] 2xl:w-[3.25rem]">
                  <img
                    src={'/assets/images/Navbar/dev2.png'}
                    className="w-[100%]"
                    alt="Consultation Icon"
                  />
                </div>
              </li>
            </ul>

            <ul className="flex flex-col gap-4  justify-between font-poppins font-[400] text-[18px] ">
              {ServicesData['contentMarketing'].map((data, index) => {
                const { name, href } = data;
                return (
                  <Link key={index} onClick={() => setOpen(!open)} href={href}>
                    <li
                      className={`flex w-[75%] flex-row justify-between items-center relative group hover:text-[#FF6E4E] hover:duration-300 ${
                        index === 0 && 'mt-4'
                      }`}
                      id="listItem"
                    >
                      <span
                        className="absolute text-[#FF6E4E] opacity-0 transition-all duration-300 transform left-[50%] translate-x-0 group-hover:left-[90%] group-hover:opacity-100"
                        id="arrowIcon"
                      >
                        <FaArrowRightLong />
                      </span>
                      <span className="font-poppins font-[400] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]">
                        {name}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        {/* third card end */}
        {/* fourth card start */}
        <div className=" w-[260px] lg:w-[160px] xl:w-[230px] rounded-md bg-[#101F34] 2xl:w-[250px] shadow-lg custom-shadow py-4 lg:h-[345px] 2xl:h-[520px]">
          <div className="flex flex-col h-[90%] w-[80%] m-auto">
            <ul className="flex flex-col gap-3 font-poppins font-[400] text-[1.125rem]">
              <li className="flex flex-row mb-4 xl:mb-0 2xl:mb-4 items-center justify-between">
                <span className="font-[600] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] text-[#FF6E4E]">
                  Search Engine Marketing
                </span>
                <div className="w-[3.25rem] lg:w-[2rem] xl:w-[2.5rem] 2xl:w-[3.25rem]">
                  <img
                    src={'/assets/images/Navbar/dev3.png'}
                    className="w-[100%]"
                    alt="Consultation Icon"
                  />
                </div>
              </li>
            </ul>

            <ul className="flex flex-col gap-3 justify-between font-poppins font-[400] text-[1.125rem]">
              {ServicesData['seoMarketing'].map((data, index) => {
                const { name, href } = data;
                return (
                  <Link key={index} onClick={() => setOpen(!open)} href={href}>
                    <li
                      className={`flex w-[75%] flex-row justify-between items-center relative group hover:text-[#FF6E4E] hover:duration-300 ${
                        index === 0 && 'mt-4'
                      }`}
                      id="listItem"
                    >
                      <span
                        className="absolute text-[#FF6E4E] opacity-0 transition-all duration-300 transform left-[50%] translate-x-0 group-hover:left-[90%] group-hover:opacity-100"
                        id="arrowIcon"
                      >
                        <FaArrowRightLong />
                      </span>
                      <span className="font-poppins font-[400] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]">
                        {name}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        {/* fourth card end */}
        {/* fifth card start */}
        <div className=" w-[260px] lg:w-[160px] xl:w-[230px] rounded-md bg-[#101F34] 2xl:w-[250px] shadow-lg custom-shadow py-4 lg:h-[345px] 2xl:h-[520px]">
          <div className="flex flex-col h-[90%] w-[80%] m-auto">
            <ul className="flex flex-col gap-3 font-poppins font-[400] text-[1.125rem]">
              <li className="flex flex-row mb-4 xl:mb-0 2xl:mb-4 items-center justify-between">
                <span className="font-[600] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] text-[#FF6E4E]">
                  Trending
                </span>
                <div className="w-[3.25rem] lg:w-[2rem] xl:w-[2.5rem] 2xl:w-[3.25rem]">
                  <img
                    src={'/assets/images/Navbar/dev5.png'}
                    className="w-[100%]"
                    alt="Consultation Icon"
                  />
                </div>
              </li>
            </ul>

            <ul className="flex flex-col gap-3 justify-between font-poppins font-[400] text-[1.125rem]">
              {ServicesData['trending'].map((data, index) => {
                const { name, href } = data;
                return (
                  <Link key={index} onClick={() => setOpen(!open)} href={href}>
                    <li
                      className={`flex w-[75%] flex-row justify-between items-center relative group hover:text-[#FF6E4E] hover:duration-300 ${
                        index === 0 && 'mt-4'
                      }`}
                      id="listItem"
                    >
                      <span
                        className="absolute text-[#FF6E4E] opacity-0 transition-all duration-300 transform left-[50%] translate-x-0 group-hover:left-[90%] group-hover:opacity-100"
                        id="arrowIcon"
                      >
                        <FaArrowRightLong />
                      </span>
                      <span className="font-poppins font-[400] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]">
                        {name}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        {/* fifth card end */}
      </div>
    </div>
  );
};

export default ServicesModal;
