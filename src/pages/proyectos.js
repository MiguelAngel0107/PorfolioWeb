import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import { proyectos } from "../hooks/countProyects";

export default function Proyectos() {
  return (
    <Layout>
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

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]"
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
      <main className="bg-gray-900 text-white mt-16">
        <div className="mx-auto max-w-7xl py-6 md:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center ">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="w-full md:w-1/2 p-4">
                <Link to={proyecto.href}>
                  <div className="relative shadow-2xl rounded-xl overflow-hidden transition duration-300 ease-in-out delay-150 transform md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={proyecto.photos[0]}
                      alt="proyecto"
                    />
                    <div className="absolute bottom-0 left-0 p-4 bg-gray-900/40 w-full">
                      <h4 className="text-3xl font-semibold text-white">
                        {proyecto.name}
                      </h4>
                      <p className="text-base font-normal text-gray-200 leading-relax">
                        {proyecto.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="relative isolate px-6 lg:px-8"></div>
    </Layout>
  );
}
