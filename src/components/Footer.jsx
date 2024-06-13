import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const link = [
  { path: "/", link: "News" },
  { path: "/", link: "World" },
  { path: "/", link: "Games" },
  { path: "/", link: "References" },
];
const Apples = [
  { path: "/", link: "News" },
  { path: "/", link: "World" },
  { path: "/", link: "Games" },
  { path: "/", link: "References" },
];
const Cherry = [
  { path: "/", link: "News" },
  { path: "/", link: "World" },
  { path: "/", link: "Games" },
  { path: "/", link: "References" },
];
const Business = [
  { path: "/", link: "infopraneur" },
  { path: "/", link: "Personal" },
  { path: "/", link: "WiKi" },
  { path: "/", link: "Formul" },
  { path: "/", link: "Project" },
];

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24">
        <div className="grid mb-8 lg:grid-cols-6 ">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div className="">
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-1">
                {link.map((item, index) => {
                  return (
                    <li key={index} className="">
                      <a
                        href={item.path}
                        className="text-gray-500 transition-colors duration-500 hover:text-orange-500"
                      >
                        {item.link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-1">
                {Apples.map((item, index) => {
                  return (
                    <li key={index} className="">
                      <a
                        href={item.path}
                        className="text-gray-500 transition-colors duration-500 hover:text-orange-500"
                      >
                        {item.link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-1">
                {Cherry.map((item, index) => {
                  return (
                    <li key={index} className="">
                      <a
                        href={item.path}
                        className="text-gray-500 transition-colors duration-500 hover:text-orange-500"
                      >
                        {item.link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-1">
                {Business.map((item, index) => {
                  return (
                    <li key={index} className="">
                      <a
                        href={item.path}
                        className="text-gray-500 transition-colors duration-500 hover:text-orange-500"
                      >
                        {item.link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>




          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide text-gray-300">Subscribe for update</p>
            <form className="mt-4 flex flex-col md:flex-row">
                <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-8 focus:border-purple-400 focus:outline-none"/>

                <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-100 rounded shadow-md hover:bg-orange-500 focus:outline-none border">
                    Subscribe
                </button>
            </form>
            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis maiores voluptas laborum, nisi possimus a nihil dicta non sint tenetur</p>
          </div>
        </div>


        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="text-sm text-gray-500">&copy; Copyright 2024 || All right reserved.</p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaTwitter /></a>
                <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaFacebook /></a>
                <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaInstagram /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;