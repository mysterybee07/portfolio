// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <a href="#" className="title-font font-medium text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Biraj Pudasaini</span>
        </a>
        <div className="flex md:hidden">
          <button
            className="text-white"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-grow items-center w-full md:w-auto md:flex-row flex-col md:items-center md:justify-end`}
        >
          <a href="#" className="mr-5 hover:text-white">
            Home
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1 hidden md:inline" />
          </a>
        </nav>
      </div>
    </header>
  );
}
