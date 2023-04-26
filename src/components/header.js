import { useState } from "react";
import TechnologySlider from "../components/slider";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 h-max sm:pb-32">
      <div className="relative isolate px-6 lg:px-8">
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

        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-2 ring-indigo-700/50 hover:ring-indigo-700/75 hover:text-gray-300">
              Visita mis repositorios en Github.{" "}
              <a
                href="https://github.com/MiguelAngel0107"
                target="_blank"
                className="font-semibold text-indigo-600 hover:text-indigo-800"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Leer mas <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Explora mis Proyectos Web y Contacta conmigo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              ¡Hola!{" "}
              <span className="bg-indigo-600 text-white px-2 rounded-lg">
                Soy Miguel Angel
              </span>
              , un desarrollador FullStack con experiencia en Django y Next.js.
              Me apasiona crear soluciones web que mejoren la vida de las
              personas. ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/proyectos"
                className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explorar
              </Link>
              <a
                href="https://github.com/MiguelAngel0107"
                target="_blank"
                className="text-sm font-semibold leading-6 text-gray-200 hover:text-white"
              >
                Repositorios <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <TechnologySlider />
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)]"
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
  );
}
