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

function TePago() {
  const glideRef = useRef(null);

  useEffect(() => {
    new Glide(glideRef.current, {
      type: "carousel",
      perView: 1,
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

  const Item = proyectos[4];
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
                  ReactNative y DjangoRestFramework
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  TePago
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                  En el mundo acelerado de hoy, prestar dinero o productos a
                  amigos y conocidos es común, pero a menudo puede ser un
                  desafío recordar quién te debe y cuánto. Aquí es donde entra
                  en juego TePago, nuestra innovadora aplicación móvil diseñada
                  para brindarte un control total sobre tus deudas y préstamos.
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
            <CsarruseLogos logos="TePago" />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                <p>Texto1</p>
                <ul role="list" className="mt-8 space-y-8 text-gray-400">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-white">
                        Organización Eficiente:
                      </strong>{" "}
                      Con TePago, olvídate de los inconvenientes de llevar un
                      registro manual de tus deudas. Nuestra aplicación te
                      permite rastrear de manera efectiva a quién le prestaste y
                      cuánto.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-white">
                        Recordatorios Personalizados:
                      </strong>{" "}
                      Mantén el control de tus finanzas con recordatorios
                      personalizados. TePago te alertará cuándo es el momento de
                      cobrar, asegurándote de no pasar por alto ninguna deuda
                      pendiente.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-white">
                        Gestión de Contactos:
                      </strong>{" "}
                      Hemos simplificado la gestión de tus contactos. Cada
                      persona está vinculada a su propia cuenta en la
                      aplicación, donde puedes ver cuánto deben, cuándo deben
                      pagarte y detalles relacionados.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-white">
                        Control de Productos:
                      </strong>{" "}
                      Si eres un comerciante que también presta productos en
                      fiado, TePago es tu solución. Añade productos con sus
                      respectivos precios y lleva un registro claro de las
                      transacciones relacionadas.
                    </span>
                  </li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                  Tu Asistente Financiero Personal:
                </h2>
                <p className="mt-6">
                  Con TePago, tu teléfono se convierte en tu asistente
                  financiero personal. Nunca más tendrás que preocuparte por
                  perder de vista tus préstamos y deudas. La aplicación está
                  diseñada para simplificar la administración de tus finanzas y
                  ayudarte a recuperar tu dinero de manera efectiva.
                </p>
              </div>
              <div className="mt-24 text-center">
                <a
                  href="https://github.com/MiguelAngel0107/TePago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Ver en GitHub
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

export default TePago;
