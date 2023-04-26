import Layout from "../../layout";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { proyectos } from "../../hooks/countProyects";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { useState, useEffect, useRef } from "react";
import CsarruseLogos from "./carruseLogos";

export default function OwnInfinity() {
  const glideRef = useRef(null);

  useEffect(() => {
    new Glide(glideRef.current, {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      autoplay: 8000,
      animationDuration: 2000,
      swipeThreshold: false,
      hoverpause: true,
      breakpoints: {
        640: {
          perView: 1,
          gap: 550,
        },
        768: {
          perView: 1,
          gap: 450,
        },
        1024: {
          perView: 1,
          gap: 450,
        },
        1536: {
          perView: 1,
          gap: 200,
        },
      },
    }).mount();
  }, []);

  const Item = proyectos[2];
  const images = Item.photos;
  return (
    <Layout>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 relative">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a70347] to-[#392ddf] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  React y Django
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Studio-Own-Infinity
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                  OwnInfinity es una plataforma web que ofrecice funcionalidades
                  como la reserva de citas y la promoción de productos o
                  servicios, con un diseño amigable para el usuario.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:-ml-12 -mr-44 -mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div
              className="glide shadow-xl shadow-indigo-500/50 rounded-xl"
              ref={glideRef}
            >
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {images.map((img, index) => {
                    return (
                      <li className="glide__slide" key={index}>
                        <img
                          className=" w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                          src={img}
                          alt=""
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <CsarruseLogos logos="infinity" />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                <p>
                  OwnInfinity es una plataforma web de última generación
                  diseñada para que los usuarios puedan promocionar su propia
                  agencia de desarrollo de software con facilidad y eficiencia.
                  La aplicación ofrece múltiples funcionalidades innovadoras,
                  que van desde la reserva de citas hasta la promoción de
                  productos o servicios. La plataforma cuenta con un diseño
                  moderno y sofisticado, que se adapta perfectamente a las
                  necesidades de los usuarios, lo que la hace atractiva a la
                  vista y fácil de usar.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-400">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-white">
                        Gestion
                      </strong>{" "}
                      La plataforma se compone de varios módulos, entre los que
                      destacan la gestión de usuarios, la reserva de citas y la
                      promoción de productos o servicios. La gestión de usuarios
                      es una funcionalidad única que permite a los usuarios
                      gestionar fácilmente sus clientes y llevar un registro de
                      sus actividades en la plataforma.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-white">
                        Reserva
                      </strong>{" "}
                      La reserva de citas es otro módulo importante, que permite
                      a los usuarios programar citas y reuniones con clientes
                      potenciales de manera sencilla y eficiente.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-white">
                        Promocion
                      </strong>{" "}
                      Finalmente, la promoción de productos o servicios es un
                      módulo clave que permite a los usuarios promocionar su
                      agencia de desarrollo de software y sus productos o
                      servicios de manera efectiva, lo que ayuda a aumentar la
                      visibilidad de su negocio en línea.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  OwnInfinity se desarrolló utilizando las tecnologías más
                  avanzadas de programación web, incluyendo los frameworks de
                  Django y React. Esto garantiza que la plataforma sea robusta y
                  confiable, y que ofrezca una experiencia de usuario
                  excepcional. Además, la plataforma se basa en una
                  infraestructura en la nube de última generación, lo que
                  garantiza una alta disponibilidad y escalabilidad, lo que
                  significa que la plataforma siempre estará disponible para los
                  usuarios, independientemente de su ubicación geográfica.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                  Experiencia creando la aplicación
                </h2>
                <p className="mt-6">
                  Durante mi experiencia creando OwnInfinity, tuve la
                  oportunidad de aplicar mis conocimientos en las tecnologías
                  más avanzadas de programación web. Me dediqué a diseñar y
                  desarrollar la plataforma desde cero, utilizando los
                  frameworks de Django y React para garantizar que la plataforma
                  fuera robusta y escalable. Además, dediqué mucho tiempo a
                  investigar las últimas tendencias en diseño web y experiencia
                  de usuario, lo que me permitió crear una plataforma moderna y
                  atractiva.
                </p>
              </div>
              <div className="mt-24 text-center flex gap-4">
                <a
                  href="https://github.com/MiguelAngel0107/Back_Infinity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Ver en GitHub - Backend
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.411 2.865 8.138 6.84 9.466.5.093.682-.216.682-.48 0-.237-.009-.866-.013-1.698-2.782.604-3.37-1.338-3.37-1.338-.455-1.158-1.112-1.467-1.112-1.467-.908-.621.069-.608.069-.608 1.005.074 1.533 1.032 1.533 1.032.893 1.529 2.34 1.087 2.91.832.092-.648.35-1.088.636-1.338-2.224-.252-4.566-1.112-4.566-4.94 0-1.091.389-1.984 1.032-2.683-.104-.253-.448-1.267.098-2.639 0 0 .84-.269 2.75 1.022.798-.221 1.647-.332 2.495-.332.848 0 1.697.111 2.495.332 1.91-1.291 2.75-1.022 2.75-1.022.546 1.372.202 2.386.098 2.639.642.699 1.032 1.592 1.032 2.683 0 3.838-2.345 4.686-4.578 4.934.36.309.682.922.682 1.854 0 1.338-.012 2.416-.012 2.744 0 .266.18.574.688.478C17.138 18.136 20 14.41 20 10c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/MiguelAngel0107/Front_Infinity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Ver en GitHub - Frontend
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.411 2.865 8.138 6.84 9.466.5.093.682-.216.682-.48 0-.237-.009-.866-.013-1.698-2.782.604-3.37-1.338-3.37-1.338-.455-1.158-1.112-1.467-1.112-1.467-.908-.621.069-.608.069-.608 1.005.074 1.533 1.032 1.533 1.032.893 1.529 2.34 1.087 2.91.832.092-.648.35-1.088.636-1.338-2.224-.252-4.566-1.112-4.566-4.94 0-1.091.389-1.984 1.032-2.683-.104-.253-.448-1.267.098-2.639 0 0 .84-.269 2.75 1.022.798-.221 1.647-.332 2.495-.332.848 0 1.697.111 2.495.332 1.91-1.291 2.75-1.022 2.75-1.022.546 1.372.202 2.386.098 2.639.642.699 1.032 1.592 1.032 2.683 0 3.838-2.345 4.686-4.578 4.934.36.309.682.922.682 1.854 0 1.338-.012 2.416-.012 2.744 0 .266.18.574.688.478C17.138 18.136 20 14.41 20 10c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(90%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a70347] to-[#392ddf] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
