"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Header from "../../../components/modules/Header";
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
import logo from "../../../../public/logo-hindi-main.webp";
import Image from "next/image";
import { primary_color } from "@/utils/Colors";
import InstituteCard from "@/components/modules/InstituteCard";
import Filters from "@/components/modules/Filters";
import { useInstitutes } from "@/hooks/useInstitutes";
import { useRouter, useSearchParams } from "next/navigation";
import ListboxComponent from "@/components/elements/Listbox";
import { cities } from "@/app/config/static";
import { useRecoilState } from "recoil";
import { cityState, classModeState } from "@/recoil/filterInstituteState";
import Loader from "../Loader";

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

export default function Institutes({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();

  const cityParams = searchParams.get("city");

  const courses = searchParams.get("courses");

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [city, setCity] = useRecoilState(cityState || cityParams);
  const [classMode, setClassMode] = useRecoilState(classModeState);

  const { institutes, isLoading }: any = useInstitutes(
    courses || "",
    Object.values(city)[0] || "", //city
    Object.values(classMode)[0] || "" //class mode
  );

  console.log("institeue", institutes);

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
              <h1 className="text-2xl uppercase font-bold tracking-tight text-gray-900">
                {params.slug}
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
                    <Menu.Items className="absolute right-0 z-20 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                <div className="lg:col-span-3">
                  {/* Filters  */}
                  <div className="flex flex-row justify-between items-center px-4 pb-3 w-100 relative h-fit">
                    <ListboxComponent
                      selected={city}
                      setSelected={setCity}
                      data={cities}
                      defaultValue={"Select Location"}
                    />
                    <ListboxComponent
                      selected={classMode}
                      setSelected={setClassMode}
                      data={[{ name: "online" }, { name: "offline" }]}
                      defaultValue={"Online/Offline"}
                    />
                    <ListboxComponent
                      data={[{ name: "Jan-june" }, { name: "june-nov" }]}
                      defaultValue={"Select Batch"}
                    />
                    <ListboxComponent
                      data={[{ name: "English" }, { name: "Hindi" }]}
                      defaultValue={"Select Language"}
                    />
                  </div>
                  <div className="container mx-auto p-4">
                    {/* <h1 className="text-xl">Explore all exams</h1> */}
                    <div className="flex flex-col ">
                      {!isLoading ? (
                        institutes?.institutes?.map((data: any, index: any) => {
                          return (
                            <Link
                              key={data?._id}
                              href={`/institute-details/${data?._id}`}
                            >
                              <InstituteCard
                                {...data}
                                key={index}
                                isLoading={isLoading}
                              />
                            </Link>
                          );
                        })
                      ) : (
                        <Loader />
                      )}
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
