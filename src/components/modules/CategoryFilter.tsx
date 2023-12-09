"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useExams } from "@/hooks/useExams";

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function CategoryFilter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [myExamId, setmyExamId] = useState<String>("");

  const { exams } = useExams();

  useEffect(() => {
    const my_exam_id = localStorage.getItem("myExamId");

    setmyExamId(my_exam_id || "");
  });

  return (
    <>
      <form className="hidden lg:block">
        <h3 className="sr-only">Categories</h3>
        <ul
          role="list"
          className="space-y-4 pb-6 text-sm font-medium text-gray-900"
        >
          {exams
            ?.filter((e: any) => e._id === myExamId)
            ?.map((key: any) => (
              <ul key={key._id}>
                {key.categories.map((category: any) => (
                  <li className="border-b border-gray-200 py-2 mb-2" key={category._id}>
                    <a className="font-bold" href={""}>{category.name}</a>
                    <ul>
                      {category.subcategories.map((subcategory: any) => (
                        <li className="font-normal pl-3 hover:text-blue-800" key={subcategory._id}>
                          <a href={""}>{subcategory.name}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ))}

          {/* {subCategories.map((category) => (
            <li key={category.name}>
              <a href={category.href}>{category.name}</a>
            </li>
          ))} */}
        </ul>
      </form>
    </>
  );
}
