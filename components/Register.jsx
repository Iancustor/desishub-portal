"use client";
import { useRouter } from "next/router";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  function handleForm(data) {
    // console.log(data);
    router.push("/onboard");
    reset();
  }
  const [reviewPassword, setReviewPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center py-6 px-8">
      <form
        onClick={handleSubmit(handleForm)}
        className="w-full max-w-3xl p-4 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dp0tf8poo/image/upload/v1709625547/formbg_iotuyg.jpg')] bg-blend-multiply border  rounded-lg shadow sm:p-6 md:p-8 bg-stone-800  dark:bg-stone-700 border-stone-800 "
      >
        <h5 className="text-xl mb-4 font-medium text-white"> Sign Up</h5>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              First name
            </label>
            <input
              {...register("firstName")}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Last name
            </label>
            <input
              {...register("lastName")}
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <div className="relative flex items-center  justify-center">
            <input
              {...register("password")}
              type={reviewPassword ? "password" : "text"}
              id="password"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              placeholder="•••••••••"
              required
            />
            <button
              className="absolute dark:text-white  right-0 px-4"
              onClick={() => setReviewPassword(!reviewPassword)}
            >
              {reviewPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirm password
          </label>
          <div className="relative flex items-center  justify-center">
            <input
              {...register("comfirmPassword")}
              type={ConfirmPassword ? "password" : "text"}
              id="confirm_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              placeholder="•••••••••"
              required
            />
            <button
              className="absolute dark:text-white  right-0 px-4"
              onClick={() => setConfirmPassword(!ConfirmPassword)}
            >
              {ConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-[#C225B4] hover:bg-[#C225B4] focus:ring-4 focus:outline-none focus:ring-[#C225B4] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#C225B4] dark:hover:bg-[#C225B4] dark:focus:ring-[#C225B4]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
