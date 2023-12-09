import { primary_color } from "@/utils/Colors";
import React, { useState } from "react";
import Signup from "./Signup";
import apiClient from "@/utils/apiClient";
import { useRecoilState } from "recoil";
import { phoneState } from "@/recoil/authState";

function Login({ open, setopen,hadleOtpOpen }: any) {
  const [signupOpen, setsignupOpen] = useState(false);
  const [phone, setPhone] = useRecoilState(phoneState);

  const closeModal = () => {
    setopen(false);
  };

  const handleSendOtp = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.sendOtp}`, {
        phone: phone,
      });
      const data = response;
      if(data.success) {
        alert(data.message);
        hadleOtpOpen();
      }
      else{
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
    <>
      <Signup open={signupOpen} setopen={setsignupOpen} />
      <div
        className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-10 ${
          open ? "" : "hidden"
        }`}
      >
        <div className="bg-white p-4 rounded shadow-lg w-1/3 ">
          <button
            onClick={closeModal}
            className="float-right text-gray-700 hover:text-gray-900"
          >
            &#x2715;
          </button>
          <section className="">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your phone"
                    required={true}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required={true}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  style={{ backgroundColor: primary_color }}
                  onClick={handleSendOtp}
                >
                  Send Otp
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    onClick={() => {
                      setsignupOpen(!signupOpen);
                      setopen(false);
                    }}
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
