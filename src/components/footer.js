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
            <a href="https://www.linkedin.com/in/miguel-egocheaga-a68a44259" target="_blank" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a href="https://github.com/MiguelAngel0107" target="_blank" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            {/*<a href="#" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faSpotify} className="w-5 h-5" />
            </a>*/}
            <a href="https://www.instagram.com/miguelsuyo/" target="_blank" class="ml-3 text-white hover:text-indigo-600 cursor-pointer">
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
