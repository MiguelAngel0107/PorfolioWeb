import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars4Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import { proyectos } from "../hooks/countProyects";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    console.log(mobileMenuOpen);
  }, [mobileMenuOpen]);
  const navigation = [
    { name: "Inicio", href: "#" },
    { name: "Proyectos", href: "#" },
    { name: "Contacto", href: "#" },
  ];
  const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ];

  return (
    <Menu as="nav" className="bg-gray-900 hover:bg-gradient-to-l to-gray-900 from-gray-950 absolute inset-x-0 top-0 z-50">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex lg:hidden">
              {mobileMenuOpen ? (
                <button
                  key={1}
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Open main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              ) : (
                <button
                  key={2}
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars4Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>
            <div
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <span className="text-white ml-2 font-bold"></span>
              </div>

              <Popover.Group className="hidden lg:ml-6 items-center pt-2 lg:flex lg:space-x-8">
                <Link
                  to="/Inicio"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold mb-2"
                >
                  Inicio
                </Link>

                <Popover className="relative">
                  <Popover.Button className="flex gap-x-2 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold mb-2">
                    <Link to="/proyectos">Proyectos</Link>
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-50"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-200 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900">
                      <div className="p-4">
                        {proyectos.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-600 dark:text-white"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-white border-2 border-white">
                              <item.icon
                                className="h-6 w-6 text-gray-100 group-hover:text-indigo-600 "
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900 dark:text-white"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-200">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-white hover:text-indigo-600"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-gray-600 group-hover:text-indigo-700"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>

                <Link
                  to="/contacto"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold mb-2"
                >
                  Contacto
                </Link>
              </Popover.Group>
            </div>
          </div>

          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      to="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600 bg-gray-700/20 sm:bg-gray-900 "
                    >
                      Inicio
                    </Link>
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-indigo-500 text-white bg-gray-700/20 sm:bg-gray-900">
                            Proyectos
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...proyectos].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-indigo-500 bg-gray-800/10 sm:bg-gray-900"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Link
                      to="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600 bg-gray-700/20 sm:bg-gray-900"
                    >
                      Trayectoria
                    </Link>
                    <Link
                      to="/contacto"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600 bg-gray-700/20 sm:bg-gray-900"
                    >
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
