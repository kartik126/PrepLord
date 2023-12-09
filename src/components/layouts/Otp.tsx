import { authState, phoneState } from "@/recoil/authState";
import { primary_color } from "@/utils/Colors";
import apiClient from "@/utils/apiClient";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useRecoilState, useRecoilValue } from "recoil";

function Otp({ open, setopen }: any) {
  const [auth, setAuth] = useRecoilState(authState);
  const [otp, setOtp] = useState("");
  const phone = useRecoilValue(phoneState);

  const closeModal = () => {
    setopen(false);
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.verifyOtp}`, {
        phone: phone,
        otp: otp,
      });
      const data = response;
      if (data.success) {
        alert(data.message)
        setAuth({
          isAuthenticated: true,
          user: response.user,
          token: response.token,
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
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
          3242 &#x2715;
        </button>
        <section className="">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Verify Otp
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <OtpInput
                value={otp}
                onChange={(e)=>setOtp(e)}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                style={{ backgroundColor: primary_color }}
              >
                Send Otp
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={handleVerifyOtp}
                >
                  Verify
                </a>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Otp;
