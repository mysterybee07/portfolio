import React from "react";
import { DownloadIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about" className="relative py-10 md:py-32 px-4 md:px-36">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Biraj.<br/>
            <br className="hidden lg:inline-block" /> 
            I love to build amazing web apps.
          </h1>
          <p className="mb-8 leading-relaxed text-sm md:text-base">
            As a Back-End Enthusiast, I love turning complex ideas into strong and scalable server-side applications. My portfolio highlights the detailed systems and efficient structures I've created. I'm excited for you to check out my work, and I hope you enjoy exploring my projects.
          </p>
          <div className="flex flex-row justify-center items-center space-x-4">
            <a
              href="https://app.luminpdf.com/viewer/6644a8ed4a6ab1fec251d710" target="_blank"
              className="inline-flex items-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Resume
              <DownloadIcon className="w-5 h-5 ml-2 inline-block" />
            </a>
            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              View My Work
            </a>
          </div>
          <div className="pt-6">
          <div className="flex justify-center md:justify-end space-x-6">
          <a href="mailto:biraj2019pudasaini@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">    
              <path d="M20.853 4H3.147C1.588 4 0 5.615 0 7.5v9C0 18.885 1.588 20.5 3.147 20.5h17.706C22.412 20.5 24 18.885 24 17.001v-9C24 5.615 22.412 4 20.853 4zm0 2c.52 0 .947.433.947.964l-7.155 5.662a1.8 1.8 0 01-2.293 0L2.2 6.964C2.2 6.433 2.628 6 3.147 6h17.706zM2 17.001V8.02l7.482 5.918a1.8 1.8 0 002.076 0L22 8.019v8.983c0 .532-.428.998-.947.998H3.147c-.52 0-.947-.466-.947-.998z"/>
            </svg>
          </a>
          <a href="https://github.com/mysterybee07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {/* GitHub Icon */}
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.204.084 1.838 1.238 1.838 1.238 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.303.762-1.602-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.624-5.48 5.921.43.371.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.218.694.825.577C20.565 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/biraj-pudasaini-10b712251/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {/* LinkedIn Icon */}
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727V22.27C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.065 20.452H3.452V9.052h3.613v11.4zM5.26 7.626a2.104 2.104 0 110-4.208 2.104 2.104 0 010 4.208zm14.625 12.826h-3.613v-5.673c0-1.35-.027-3.084-1.878-3.084-1.878 0-2.165 1.462-2.165 2.973v5.784H8.616V9.052h3.468v1.563h.048c.484-.92 1.665-1.878 3.428-1.878 3.666 0 4.34 2.416 4.34 5.552v6.162z" />
            </svg>
          </a>
        </div>
        </div> 
        </div>
        <div className="md:w-1/2 w-full md:pl-16 flex justify-center">
          <img
            className="object-cover object-center rounded-full w-56 h-56 md:w-full md:h-auto"
            alt="hero"
            src="./biraj.png"
          />
        </div>
      </div>
    </section>
  );
}
