import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full max-w-full overflow-auto bg-white">
        <div className="max-w-screen-xl px-4 pt-12 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24 md:ml-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
              <p className="font-bold duration-500 border-b-2 border-teal-600 sm:text-lg lg:text-2xl animate-bounce ">
                ShopSwift
               </p>
              </div>

              <p className="max-w-md mt-6 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:text-left">
              In the eCommerce world, the most important single thing is to focus obsessively on the customer. Our goal is to be earth’s most customer-centric company. – Jeff Bezos
              </p>

              <ul className="flex justify-center gap-6 mt-8 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="fill-teal-700 hover:fill-teal-700/75" size={20}/>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="fill-teal-700 hover:fill-teal-700/75" size={20}/>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="fill-teal-700 hover:fill-teal-700/75" size={20}/>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="fill-teal-700 hover:fill-teal-700/75" size={20}/>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">Dribbble</span>
                    <FaDribbble className="fill-teal-700 hover:fill-teal-700/75" size={20}/>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 lg:ml-10">

              <div className="px-4 mr-3 text-center sm:border-r sm:w-[13rem] ">
                <p className="text-lg font-medium text-gray-900 md:border-b md:w-[80%]">
                  Our Services
                </p>
                <ul className="mt-8 space-y-4 text-sm ">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Frontend Devoloper
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Nextjs Devoloper
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="./"
                    >
                     Professional Freeluncer
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="px-4 mr-3 text-center sm:border-r sm:w-[13rem] sm:ml-8">
                <p className="text-lg font-medium text-gray-900 md:border-b md:w-[80%]">
                  Helpful Links
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/Components/faq"
                    >
                      {" "}
                      FAQs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Support{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <span className="text-gray-700 transition group-hover:text-gray-700/75">
                        Live Chat
                      </span>

                      <span className="relative flex size-2">
                        <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                        <span className="relative inline-flex bg-teal-500 rounded-full size-2"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="px-4 text-center sm:border-r sm:w-[13rem] sm:ml-20">
                <p className="text-lg font-medium text-gray-900 md:border-b md:w-[80%]">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-900 size-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="flex-1 text-gray-700" aria-readonly>jisan808112@gmail.com</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-900 size-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">01849413795</span>
                    </Link>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-900 size-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                      213 Lane, London, United Kingdom
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-12 border-t border-gray-100">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>

                <Link
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#">
                  Terms & Conditions
                </Link>
                <span>&middot;</span>
                <Link
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </p>
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2022 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;