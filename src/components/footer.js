import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const card = (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong className="text-xl text-white sm:text-xl">
        Make Your Next Career Move!
      </strong>

      <a
        className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
        href="/"
      >
        <span className="text-sm font-medium"> Let's Get Started </span>

        <svg
          className="h-5 w-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );

  return (
    <>
      <footer class="text-gray-400 bg-gray-950 body-font absolute inset-x-0">
        <div class="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <span className="text-white ml-2 font-bold"></span>
          </div>

          <p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 mt-4 sm:mt-0">
            © 2023 Marcados —
            <a
              href="https://www.instagram.com/miguelsuyo/"
              class="text-gray-200 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @miguelsuyo
            </a>
          </p>

          <span class="inline-flex sm:ml-auto justify-center sm:justify-start mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/miguel-egocheaga-a68a44259" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a href="https://github.com/MiguelAngel0107" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            {/*<a href="#" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faSpotify} className="w-5 h-5" />
            </a>*/}
            <a href="https://www.instagram.com/miguelsuyo/" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            {/*<a href="#" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
            </a>*/}
          </span>
        </div>
      </footer>
    </>
  );
}
