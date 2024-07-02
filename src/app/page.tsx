"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="bg-black relative h-screen container mx-auto px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 relative z-10" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CB-AR FUEL</span>
              <Image className="h-14 w-auto" src="/images/cb_ar_fuel_logo_main.png" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Home
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Products
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              About
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Contact
            </a>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">CB-AR Fuel</span>
                <Image className="h-8 w-auto" src="/images/cb_ar_fuel_logo_main.png" alt="" width={100} height={100} />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <Image src="/images/fuel_station.png" alt="Picture of the author" fill={true} />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-screen py-12  text-white">
            <p className="text-6xl font-bold mb-5 tracking-wide">Locate</p>
            <p className="text-6xl font-bold mb-5 tracking-wide">and Fill your</p>
            <p className="text-6xl font-bold mb-5 tracking-wide">Tanks at Nearby</p>
            <p className="text-6xl font-bold mb-8 tracking-wide">Stations with Ease</p>
            <p className="font-medium mb-8">Reliable and affordable Gas Station with its advantages over the others.</p>
            <button
              type="button"
              className="py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-white text-black hover:bg-black hover:text-white "
            >
              Locate now
            </button>
          </div>
        </div>
      </header>
      <section className="relative bg-white">
        <div className="py-24 sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-11 text-primary"
                  >
                    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                    <path
                      fillRule="evenodd"
                      d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                      clipRule="evenodd"
                    />
                    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                  </svg>
                  <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">20+</dd>
                </div>
                <dt className="text-base leading-7 text-gray-600">Branches</dt>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-11 text-primary"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">100k+</dd>
                </div>
                <dt className="text-base leading-7 text-gray-600">Served costumers</dt>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-11 text-primary"
                  >
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46k+</dd>
                </div>
                <dt className="text-base leading-7 text-gray-600">Members</dt>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-11 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">24</dd>
                </div>
                <dt className="text-base leading-7 text-gray-600">Open Hours</dt>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-center uppercase text-2xl font-bold mb-6">Our Products</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group flex flex-col h-full bg-white shadow-sm rounded-xl">
              <div className="h-52 flex flex-col justify-center items-center bg-primary rounded-t-xl">
                <Image
                  className="h-auto w-auto"
                  src="/images/engine_oil.png"
                  alt="Engine Oils"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-4 md:p-6 ">
                <span className="block mb-1 text-sm font-semibold uppercase text-black">
                  Car & Motorcycle Engine Oils
                </span>
                <p className="mt-3 text-sm text-gray-500 ">
                  We have various engine oils that are fit for your car and motorcycles.
                </p>
              </div>
            </div>

            <div className="group flex flex-col h-full bg-white  shadow-sm rounded-xl">
              <div className="h-52 flex flex-col justify-center items-center bg-primary rounded-t-xl">
                <Image className="w-auto h-auto" src="/images/gasoline_fuel.png" alt="Fuels" width={300} height={300} />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-sm font-semibold uppercase text-dark">CB-AR Fuels</span>
                <p className="mt-3 text-sm text-gray-500 ">We provide affordable gasoline and diesel fuel.</p>
              </div>
            </div>

            <div className="group flex flex-col h-full bg-white shadow-sm rounded-xl">
              <div className="h-52 flex flex-col justify-center items-center bg-primary rounded-t-xl overflow-hidden">
                <Image src="/images/membership_card.png" alt="Membership Card" width={350} height={350} />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-sm font-semibold uppercase text-black">CB-AR Membership Card</span>

                <p className="mt-3 text-sm text-gray-500 ">
                  To avail for promo and discounts, we introduce our to you membership card for our loyal customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-12">
        <p className="max-w-7xl mx-auto uppercase text-2xl text-white font-bold mb-10">About Us</p>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight ">
                Start your journey with <span className="text-primary">CB-AR Fuel</span>
              </h1>
              <p className="mt-3 text-lg text-gray-300 ">
                Welcome to CB-AR Fuel Station! At CB-AR Fuel Station, our goal is to provide you with top-quality fuel,
                exceptional service, and a convenient experience. Established in 2019, we have been proudly serving the
                community with integrity and care.
              </p>
            </div>

            <div className="relative ms-4">
              <Image
                className="w-full rounded-md"
                src="/images/about_us2.jpg"
                alt="Image Description"
                width={500}
                height={500}
              />
            </div>

            <div className="flex flex-col gap-y-5">
              <div>
                <h5 className="block text-3xl font-bold text-gray-200 sm:text-4xl lg:text-2xl lg:leading-tight ">
                  Our Mission
                </h5>
                <p className="mt-3 text-lg text-gray-300 ">
                  We aim to fuel your journey with excellence, ensuring every visit is quick, efficient, and pleasant.
                </p>
              </div>
              <div>
                <h5 className="block text-3xl font-bold text-gray-200 sm:text-4xl lg:text-2xl lg:leading-tight ">
                  Quality Fuel
                </h5>
                <p className="mt-3 text-lg text-gray-300 ">
                  We offer top-grade gasoline and diesel from reputable suppliers to keep your vehicle running smoothly.
                </p>
              </div>
              <div>
                <h5 className="block text-3xl font-bold text-gray-200 sm:text-4xl lg:text-2xl lg:leading-tight">
                  Exceptional Service
                </h5>
                <p className="mt-3 text-lg text-gray-300 ">
                  Our friendly staff is here to assist you with all your fueling needs, ensuring your satisfaction with
                  every visit.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <h5 className="block text-3xl font-bold text-gray-200 sm:text-4xl lg:text-2xl lg:leading-tight ">
                  Convenience
                </h5>
                <p className="mt-3 text-lg text-gray-300 ">
                  With a clean, easy-to-navigate facility and a well-stocked convenience store, we make sure you get
                  everything you need on the go.
                </p>
              </div>
              <div>
                <h5 className="block text-3xl font-bold text-gray-200 sm:text-4xl lg:text-2xl lg:leading-tight ">
                  Community Commitment
                </h5>
                <p className="mt-3 text-lg text-gray-300 ">
                  We are dedicated to giving back to our community, supporting local events, charities, and initiatives.
                </p>
              </div>
              <div>
                <h5 className="block text-3xl font-bold text-gray-200 sm:text-4xl lg:text-2xl lg:leading-tight ">
                  Innovation
                </h5>
                <p className="mt-3 text-lg text-gray-300 ">
                  Embracing the latest in fueling technology and eco-friendly practices, we are committed to a
                  sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact us</h1>
              <p className="mt-1 text-gray-600 ">We'd love to talk about how we can help you.</p>
            </div>

            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">
                <h2 className="mb-8 text-xl font-semibold text-gray-800 ">Fill in the form</h2>

                <form>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-contacts-1"
                          id="hs-firstname-contacts-1"
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm"
                          placeholder="First Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="hs-lastname-contacts-1"
                          id="hs-lastname-contacts-1"
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm "
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hs-email-contacts-1" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="hs-email-contacts-1"
                        id="hs-email-contacts-1"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm"
                        placeholder="Email"
                      />
                    </div>

                    <div>
                      <label htmlFor="hs-phone-number-1" className="sr-only">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="hs-phone-number-1"
                        id="hs-phone-number-1"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <label htmlFor="hs-about-contacts-1" className="sr-only">
                        Details
                      </label>
                      <textarea
                        id="hs-about-contacts-1"
                        name="hs-about-contacts-1"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm"
                        placeholder="Details"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4 grid">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white  disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Send inquiry
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">We'll get back to you in 1-2 business days.</p>
                  </div>
                </form>
              </div>

              <div className="divide-y divide-gray-200 ">
                <div className="flex gap-x-7 py-6">
                  <svg
                    className="flex-shrink-0 size-6 mt-1.5 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 ">Knowledgebase</h3>
                    <p className="mt-1 text-sm text-gray-500 ">We're here to help with any questions or code.</p>
                    <a
                      className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      Contact support
                      <svg
                        className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex gap-x-7 py-6">
                  <svg
                    className="flex-shrink-0 size-6 mt-1.5 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 ">FAQ</h3>
                    <p className="mt-1 text-sm text-gray-500 ">Search our FAQ for answers to anything you might ask.</p>
                    <a
                      className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      Visit FAQ
                      <svg
                        className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className=" flex gap-x-7 py-6">
                  <svg
                    className="flex-shrink-0 size-6 mt-1.5 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 11 2-2-2-2" />
                    <path d="M11 13h4" />
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 ">Developer APIs</h3>
                    <p className="mt-1 text-sm text-gray-500 ">Check out our development quickstart guide.</p>
                    <a
                      className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      Contact sales
                      <svg
                        className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className=" flex gap-x-7 py-6">
                  <svg
                    className="flex-shrink-0 size-6 mt-1.5 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 ">Contact us by email</h3>
                    <p className="mt-1 text-sm text-gray-500 ">If you wish to write us an email instead please use</p>
                    <a
                      className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      example@site.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100">
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <a className="flex-none text-xl font-semibold text-primary" href="#" aria-label="Brand">
                CB-AR Fuel
              </a>
              <p className="mt-3 text-xs sm:text-sm text-gray-600">© 2024 CB-AR Co.</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase ">Product</h4>

              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Pricing
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Changelog
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Docs
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase ">Company</h4>

              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    About us
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Blog
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Careers
                  </a>{" "}
                  <span className="inline text-blue-600 ">— Upcomming</span>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Customers
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Newsroom
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Sitemap
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase ">Resources</h4>

              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Community
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Help & Support
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    eBook
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    What's New
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Status
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase ">Developers</h4>

              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Api
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Status
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    GitHub
                  </a>{" "}
                  <span className="inline text-blue-600 ">— New</span>
                </p>
              </div>

              <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase ">Industries</h4>

              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Financial Services
                  </a>
                </p>
                <p>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Education
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-gray-200 ">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex items-center gap-x-3">
                <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                  <button
                    id="footer-language-dropdown"
                    type="button"
                    className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                  >
                    <svg
                      className="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us1"
                      viewBox="0 0 512 512"
                    >
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    English (US)
                    <svg
                      className="hs-dropdown-open:rotate-180 flex-shrink-0 size-4 text-gray-500 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>

                  <div
                    className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2  border border-neutral-700 divide-neutral-700"
                    aria-labelledby="footer-language-dropdown"
                  >
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 "
                      href="#"
                    >
                      <svg
                        className="size-3.5 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      English (US)
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100  hover:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Deutsch
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100  hover:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-dk"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#c8102e" d="M0 0h512.1v512H0z" />
                        <path fill="#fff" d="M144 0h73.1v512H144z" />
                        <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
                      </svg>
                      Dansk
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100  hover:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd" strokeWidth="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italiano
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100  hover:text-neutral-300"
                      href="#"
                    >
                      <svg
                        className="size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" />
                        <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" />
                        <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" />
                        <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" />
                        <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" />
                      </svg>
                      中文 (繁體)
                    </a>
                  </div>
                </div>

                <div className="space-x-4 text-sm ms-4">
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Terms
                  </a>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Privacy
                  </a>
                  <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">
                    Status
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="mt-3 sm:hidden">
                  <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">
                    Brand
                  </a>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 ">© 2022 Preline.</p>
                </div>

                <div className="space-x-4">
                  <a className="inline-block text-gray-500 hover:text-gray-800" href="#">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a className="inline-block text-gray-500 hover:text-gray-800" href="#">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a className="inline-block text-gray-500 hover:text-gray-800 " href="#">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
