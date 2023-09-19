import { primary_color } from "@/utils/Colors";
import React from "react";

function EnquiryForm({ open, setopen }: any) {
  const closeModal = () => {
    // setIsModalOpen(false);
    setopen(false);
  };
  return (
    <div
      className={`fixed top-10 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-10 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <button
          onClick={closeModal}
          className="float-right text-gray-700 hover:text-gray-900"
        >
          &#x2715;
        </button>
        <section className="">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Enquiry Form
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-lg border py-2 px-3 h-32 focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                style={{ backgroundColor: primary_color }}
              >
               Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EnquiryForm;
