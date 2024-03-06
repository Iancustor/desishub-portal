import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className=" flex items-center justify-center py-16 px-5">
      <div className=" w-full max-w-3xl p-4 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dp0tf8poo/image/upload/v1709625547/formbg_iotuyg.jpg')] bg-blend-multiply border  rounded-lg shadow sm:p-6 md:p-8 bg-stone-800  dark:bg-stone-700 border-stone-800 ">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium  text-white"> Log In</h5>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-dark:border-stone-600 border border-stone-800 text-stone-50 placeholder-stone-50 dark:text-stone-50 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-600 dark:placeholder-white  dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-stone-100 border border-stone-800 text-stone-950 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-stone-50 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#C225B4] hover:bg-[#C225B4] focus:ring-4 focus:outline-none focus:ring-[#C225B4] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#C225B4] dark:hover:bg-[#C225B4] dark:focus:ring-[#C225B4]"
          >
            Login to your Account
          </button>

          <div className="text-sm font-medium text-white">
            Not registered?{" "}
            <Link href="/signup" className=" hover:underline text-[#C225B4]">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
