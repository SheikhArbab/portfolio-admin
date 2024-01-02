import React from 'react'
import { MdOutlineWeb } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative glass pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-gray-200">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex items-center">
              <button
                onClick={() => { window.open("https://arbab-dev.netlify.app/", "_blank") }}
                className="bg-white hover:bg-primaryBg duration-300 text-primaryBg hover:text-primaryPink flex items-center justify-center shadow-lg font-normal h-9 w-9   rounded-full outline-none focus:outline-none mr-2"
                type="button"
              ><MdOutlineWeb />
              </button>
              <button
                onClick={() => { window.open("https://github.com/SheikhArbab?tab=repositories", "_blank") }}
                className="bg-white hover:bg-primaryBg duration-300 text-primaryBg hover:text-primaryPink flex items-center justify-center shadow-lg font-normal h-9 w-9   rounded-full outline-none focus:outline-none mr-2"
                type="button"
              ><FaGithubAlt  />
              </button>
              <button
                onClick={() => { window.open("https://www.linkedin.com/in/arbab-zafar-web-developer/", "_blank") }}
                className="bg-white hover:bg-primaryBg duration-300 text-primaryBg hover:text-primaryPink flex items-center justify-center shadow-lg font-normal h-9 w-9   rounded-full outline-none focus:outline-none mr-2"
                type="button"
              ><FaLinkedinIn />
              </button>
              <button
                onClick={() => { window.open("https://wa.me/+923125305532", "_blank") }}
                className="bg-white hover:bg-primaryBg duration-300 text-primaryBg hover:text-primaryPink flex items-center justify-center shadow-lg font-normal h-9 w-9   rounded-full outline-none focus:outline-none mr-2"
                type="button"
              ><IoLogoWhatsapp />
              </button>
       
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <buton
                      className="text-gray-400 hover:text-primaryPink  font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </buton>
                  </li>
                  <li>
                    <button
                      className="text-gray-400 hover:text-primaryPink font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-gray-400 hover:text-primaryPink font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Github
                    </button>
                  </li>
                  <li>
                    <b
                      className="text-gray-400 hover:text-primaryPink font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Free Products
                    </b>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-400 hover:text-primaryPink font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-primaryPink font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-primaryPink font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-primaryPink font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-200 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-gray-200"
                target="_blank"
              >
                {" "}
                Reserved by
                {" "}
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-gray-200  hover:text-gray-800 duration-300"
              >
                Arbab Zafar
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
