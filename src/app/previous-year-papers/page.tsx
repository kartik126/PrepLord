"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import Header from "../../components/modules/Header";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Footer from "@/components/modules/Footer";
import Link from "next/link";
import CategoryFilter from "@/components/modules/CategoryFilter";
import MobileCategoryFilter from "@/components/modules/MobileCategoryFilter";
import { primary_color } from "@/utils/Colors";
import Button from "@/components/elements/Button";
import { usePaper } from "@/hooks/usePapers";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Papers({ params }: { params: { slug: string } }) {

  const { papers, isLoading }: any = usePaper("upsc");

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <Header />
      {/* My Post: {params.slug} */}
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <MobileCategoryFilter
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-2xl uppercase font-bold tracking-tight text-gray-700">
                Previous Year Papers
              </h1>
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Sidebar Filters */}
                <CategoryFilter />

                {/* Exams subcategories grid */}
                <div className="lg:col-span-3 bg-gray-100 h-screen overflow-auto">
                  <div className="container mx-auto p-4">
                    {/* <h1 className="text-xl">Explore all exams</h1> */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                      {/* Map over items and apply colors */}
                      {papers?.papers?.map((item:any, index:number) => (
                        <>
                          <div
                            key={index}
                            className={`bg-white flex flex-row border border-2 cursor-pointer p-4 mb-3 text-gray-600 rounded-md`}
                          >
                           
                            <div className="flex flex-col w-100">
                            <p className="bg-green-200  text-green-700 w-fit fond-bold text-xs p-1 rounded-lg px-2">Free</p>
                              <h1 className="pt-2 text-lg font-bold">
                           
                                {item.title}
                              </h1>
                              <p>{item.uploadDate}</p>

                              <div className="flex flex-row pt-3">
                                <p className="text-sm text-gray-400 mr-3">
                                  100 Question
                                </p>
                                <p className="text-sm text-gray-400 mr-3">
                                  200 Marks
                                </p>
                                <p className="text-sm text-gray-400 mr-3">
                                  120 Min
                                </p>
                              </div>
                              <div className="flex flex-row items-center justify-between pt-3">
                                <Button text={"Download PDF"} link=""/>
                                {/* <button
                                  className=" rounded-lg w-fit py-1 px-12"
                                  style={{
                                    border: `2px solid ${primary_color}`,
                                  }}
                                >
                                  Start Now
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
