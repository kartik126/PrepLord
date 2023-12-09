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
          className="space-y-4 bg-gray-50 p-5 pb-6 text-sm font-medium text-gray-900"
        >
          {exams
            ?.filter((e: any) => e._id === myExamId)
            ?.map((key: any) => (
              <ul key={key._id}>
                {key.categories.map((category: any) => (
                  <li className="border-b border-gray-200 py-2 mb-2" key={category._id}>
                    <a className="font-bold text-md text-gray-800" href={""}>{category.name}</a>
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
